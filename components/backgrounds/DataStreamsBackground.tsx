/// <reference types="@react-three/fiber" />
'use client';

import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function DataStream() {
  const streamRef = useRef<THREE.Group>(null);
  
  const particles = useMemo(() => {
    const particles = [];
    for (let i = 0; i < 200; i++) {
      particles.push({
        initialY: (Math.random() - 0.5) * 50,
        x: (Math.random() - 0.5) * 50,
        z: (Math.random() - 0.5) * 30,
        speed: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.9 ? '#FF8A00' : '#666666',
      });
    }
    return particles;
  }, []);

  const particleRefs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    particleRefs.current.forEach((ref, i) => {
      if (ref && particles[i]) {
        ref.position.y = (particles[i].initialY + time * particles[i].speed * 10) % 50 - 25;
        ref.position.z = particles[i].z + Math.sin(time * 0.5 + i) * 5;
      }
    });
  });

  return (
    <group ref={streamRef}>
      {particles.map((particle, i) => (
        <mesh 
          key={i} 
          ref={(el) => { particleRefs.current[i] = el; }}
          position={[particle.x, particle.initialY, particle.z]}
        >
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

