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
    
    // Option 1: Orange gradient palette (warm, brand-aligned)
    // Different shades of orange from dark to bright
    const colorPalette = [
      [0.2, 0.1, 0.05],    // Very dark orange-brown (85%) - subtle base
      [0.4, 0.2, 0.05],    // Dark orange (10%) - medium depth
      [0.8, 0.4, 0.1],     // Medium orange (4%) - visible accent
      [1.0, 0.53, 0.0],    // Bright orange (1%) - primary brand color
    ];
    
    // Alternative palettes (commented out - can be switched):
    // Option 2: Blue-orange tech palette
    // const colorPalette = [
    //   [0.1, 0.15, 0.2],    // Dark blue-gray (85%)
    //   [0.2, 0.3, 0.4],     // Medium blue-gray (10%)
    //   [0.3, 0.5, 0.7],     // Light blue (3%)
    //   [1.0, 0.53, 0.0],    // Orange accent (2%)
    // ];
    
    // Option 3: Warm gradient (red-orange-yellow)
    // const colorPalette = [
    //   [0.15, 0.08, 0.05],   // Dark red-brown (80%)
    //   [0.4, 0.2, 0.05],     // Dark orange (15%)
    //   [0.8, 0.5, 0.2],      // Medium orange-yellow (4%)
    //   [1.0, 0.7, 0.3],      // Bright yellow-orange (1%)
    // ];
    
    // Option 4: Monochrome dark (minimal, professional)
    // const colorPalette = [
    //   [0.12, 0.12, 0.12],   // Very dark gray (90%)
    //   [0.18, 0.18, 0.18],   // Dark gray (8%)
    //   [0.25, 0.25, 0.25],   // Medium gray (1.5%)
    //   [0.35, 0.35, 0.35],   // Light gray (0.5%)
    // ];
    
    for (let i = 0; i < 2000; i++) {
      const x = (Math.random() - 0.5) * 50;
      const y = (Math.random() - 0.5) * 50;
      const z = (Math.random() - 0.5) * 50;
      
      positions.set([x, y, z], i * 3);
      
      // Assign colors based on probability
      const rand = Math.random();
      let color;
      if (rand < 0.85) {
        color = colorPalette[0]; // 85% very dark orange-brown
      } else if (rand < 0.95) {
        color = colorPalette[1]; // 10% dark orange
      } else if (rand < 0.99) {
        color = colorPalette[2]; // 4% medium orange
      } else {
        color = colorPalette[3]; // 1% bright orange
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
