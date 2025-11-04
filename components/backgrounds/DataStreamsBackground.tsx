/// <reference types="@react-three/fiber" />
'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function DataStream() {
  const streamRef = useRef<THREE.Group>(null);
  
  const particles = useMemo(() => {
    const particles = [];
    for (let i = 0; i < 200; i++) {
      particles.push({
        position: [
          (Math.random() - 0.5) * 50,
          (Math.random() - 0.5) * 50,
          (Math.random() - 0.5) * 30
        ],
        speed: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.9 ? '#FF8A00' : '#666666',
      });
    }
    return particles;
  }, []);

  useFrame((state) => {
    if (streamRef.current) {
      const time = state.clock.getElapsedTime();
      streamRef.current.children.forEach((child, i) => {
        if (child instanceof THREE.Mesh) {
          child.position.y = (particles[i].position[1] + time * particles[i].speed * 10) % 50 - 25;
          child.position.z = Math.sin(time * 0.5 + i) * 5;
        }
      });
    }
  });

  return (
    <group ref={streamRef}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position as [number, number, number]}>
          <sphereGeometry args={[0.04, 6, 6]} />
          <meshBasicMaterial color={particle.color} />
        </mesh>
      ))}
    </group>
  );
}

export default function DataStreamsBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 20], fov: 60 }} style={{ background: 'transparent' }}>
        <ambientLight intensity={1.0} />
        <DataStream />
      </Canvas>
    </div>
  );
}

