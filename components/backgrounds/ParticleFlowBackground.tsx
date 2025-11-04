/// <reference types="@react-three/fiber" />
'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FlowingParticles() {
  const ref = useRef<THREE.Points>(null);
  
  const [positions, velocities] = useMemo(() => {
    const positions = new Float32Array(3000 * 3);
    const velocities = new Float32Array(3000 * 3);
    
    for (let i = 0; i < 3000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
      
      velocities[i * 3] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    }
    
    return [positions, velocities];
  }, []);

  useFrame(() => {
    if (ref.current) {
      const positions = ref.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < 3000; i++) {
        positions[i * 3] += velocities[i * 3];
        positions[i * 3 + 1] += velocities[i * 3 + 1];
        positions[i * 3 + 2] += velocities[i * 3 + 2];
        
        // Reset if out of bounds
        if (Math.abs(positions[i * 3]) > 50) {
          positions[i * 3] = (Math.random() - 0.5) * 100;
          positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
        }
      }
      
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="var(--primary)"
        size={0.1}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function FlowTrails() {
  const trailsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (trailsRef.current) {
      trailsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
      trailsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  const trails = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-30 + i * 1.2, Math.sin(i) * 10, -20),
        new THREE.Vector3(-20 + i * 1.2, Math.cos(i) * 10, 0),
        new THREE.Vector3(-10 + i * 1.2, Math.sin(i * 0.5) * 10, 20),
      ]);
      const points = curve.getPoints(50);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      return { key: i, geometry };
    });
  }, []);

  return (
    <group ref={trailsRef}>
      {trails.map(({ key, geometry }) => (
        <line key={key} geometry={geometry}>
          <lineBasicMaterial
            color="var(--primary)"
            transparent
            opacity={0.1}
            blending={THREE.AdditiveBlending}
          />
        </line>
      ))}
    </group>
  );
}

export default function ParticleFlowBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 30], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <FlowingParticles />
        <FlowTrails />
      </Canvas>
    </div>
  );
}
