'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function EnergyWaves() {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(80, 80, 100, 100);
    return geo;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      const positions = meshRef.current.geometry.attributes.position;
      const time = state.clock.getElapsedTime();

      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        
        const waveX = Math.sin(x * 0.1 + time) * 2;
        const waveY = Math.sin(y * 0.1 + time * 0.5) * 2;
        const distance = Math.sqrt(x * x + y * y);
        const wave = Math.sin(distance * 0.1 - time) * 3;
        
        positions.setZ(i, waveX + waveY + wave);
      }
      
      positions.needsUpdate = true;
      meshRef.current.geometry.computeVertexNormals();
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 3, 0, 0]} position={[0, -10, 0]}>
      <meshBasicMaterial
        color="var(--primary)"
        transparent
        opacity={0.2}
        wireframe
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

function GlowingCircuits() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.getElapsedTime() * 0.05;
    }
  });

  const circuits = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => {
      const radius = 10 + i * 5;
      const segments = 64;
      const points = [];
      
      for (let j = 0; j <= segments; j++) {
        const theta = (j / segments) * Math.PI * 2;
        const x = Math.cos(theta) * radius;
        const y = Math.sin(theta) * radius;
        points.push(new THREE.Vector3(x, y, 0));
      }
      
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      return { key: i, geometry, radius };
    });
  }, []);

  return (
    <group ref={groupRef}>
      {circuits.map(({ key, geometry, radius }) => (
        <line key={key} geometry={geometry}>
          <lineBasicMaterial
            color="var(--primary)"
            transparent
            opacity={0.3 - key * 0.05}
            blending={THREE.AdditiveBlending}
            linewidth={2}
          />
        </line>
      ))}
    </group>
  );
}

function EnergyOrbs() {
  const orbsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (orbsRef.current) {
      orbsRef.current.children.forEach((child, i) => {
        child.position.y = Math.sin(state.clock.getElapsedTime() + i) * 5;
        child.position.x = Math.cos(state.clock.getElapsedTime() * 0.5 + i) * 10;
      });
    }
  });

  const orbs = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      key: i,
      position: [
        Math.cos(i * Math.PI * 2 / 8) * 15,
        Math.sin(i * Math.PI * 2 / 8) * 10,
        -10 - i * 2,
      ] as [number, number, number],
    }));
  }, []);

  return (
    <group ref={orbsRef}>
      {orbs.map(({ key, position }) => (
        <mesh key={key} position={position}>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshBasicMaterial
            color="var(--primary)"
            transparent
            opacity={0.6}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function EnergyFieldBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 35], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <EnergyWaves />
        <GlowingCircuits />
        <EnergyOrbs />
      </Canvas>
    </div>
  );
}
