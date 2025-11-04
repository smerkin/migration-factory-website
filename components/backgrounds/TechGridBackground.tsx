/// <reference types="@react-three/fiber" />
'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function DataNodes() {
  const ref = useRef<THREE.Points>(null);
  
  // Generate grid of points with colors
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    const colors = new Float32Array(2000 * 3);
    
    // Color palette: dark gray, medium gray, orange accent
    const colorPalette = [
      [0.15, 0.15, 0.15],  // Dark gray (90%)
      [0.25, 0.25, 0.25],  // Medium gray (7%)
      [1.0, 0.53, 0.0],    // Orange accent (3%) - primary color
      [0.85, 0.45, 0.0],   // Darker orange (rare)
    ];
    
    for (let i = 0; i < 2000; i++) {
      const x = (Math.random() - 0.5) * 50;
      const y = (Math.random() - 0.5) * 50;
      const z = (Math.random() - 0.5) * 50;
      
      positions.set([x, y, z], i * 3);
      
      // Assign colors based on probability
      const rand = Math.random();
      let color;
      if (rand < 0.9) {
        color = colorPalette[0]; // 90% dark gray
      } else if (rand < 0.97) {
        color = colorPalette[1]; // 7% medium gray
      } else if (rand < 0.99) {
        color = colorPalette[2]; // 2% orange accent
      } else {
        color = colorPalette[3]; // 1% darker orange
      }
      
      colors.set(color, i * 3);
    }
    
    return { positions, colors };
  }, []);

  // Animate rotation
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.05;
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.075;
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [positions, colors]);

  return (
    <Points ref={ref} geometry={geometry} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors={true}
        size={0.12}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.5}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function Connections() {
  const linesRef = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => {
    const positions = [];
    const numLines = 100;

    for (let i = 0; i < numLines; i++) {
      const x1 = (Math.random() - 0.5) * 40;
      const y1 = (Math.random() - 0.5) * 40;
      const z1 = (Math.random() - 0.5) * 40;
      
      const x2 = x1 + (Math.random() - 0.5) * 10;
      const y2 = y1 + (Math.random() - 0.5) * 10;
      const z2 = z1 + (Math.random() - 0.5) * 10;

      positions.push(x1, y1, z1, x2, y2, z2);
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <lineSegments ref={linesRef} geometry={geometry}>
      <lineBasicMaterial
        color="#FF8A00"
        transparent
        opacity={0.08}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
}

export default function TechGridBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 25], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <DataNodes />
        <Connections />
      </Canvas>
    </div>
  );
}
