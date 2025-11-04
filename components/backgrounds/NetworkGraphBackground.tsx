/// <reference types="@react-three/fiber" />
'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function NetworkNodes() {
  const groupRef = useRef<THREE.Group>(null);
  
  const nodes = useMemo(() => {
    const nodeArray = [];
    for (let i = 0; i < 150; i++) {
      nodeArray.push({
        position: [
          (Math.random() - 0.5) * 40,
          (Math.random() - 0.5) * 40,
          (Math.random() - 0.5) * 30
        ],
        connections: Math.floor(Math.random() * 3) + 2,
      });
    }
    return nodeArray;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime();
      groupRef.current.rotation.y = time * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <group key={i} position={node.position as [number, number, number]}>
          <mesh>
            <sphereGeometry args={[0.06, 8, 8]} />
            <meshBasicMaterial color="#FF8A00" />
          </mesh>
          {/* Connection lines */}
          {nodes.slice(i + 1, i + node.connections + 1).map((target, j) => {
            const distance = Math.sqrt(
              Math.pow(node.position[0] - target.position[0], 2) +
              Math.pow(node.position[1] - target.position[1], 2) +
              Math.pow(node.position[2] - target.position[2], 2)
            );
            if (distance < 8) {
              return (
                <line key={j}>
                  <bufferGeometry>
                    <bufferAttribute
                      attach="attributes-position"
                      count={2}
                      array={new Float32Array([
                        ...node.position,
                        ...target.position,
                      ])}
                      itemSize={3}
                    />
                  </bufferGeometry>
                  <lineBasicMaterial color="#FF8A00" opacity={0.2} transparent />
                </line>
              );
            }
            return null;
          })}
        </group>
      ))}
    </group>
  );
}

export default function NetworkGraphBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 20], fov: 60 }} style={{ background: 'transparent' }}>
        <ambientLight intensity={1.0} />
        <NetworkNodes />
      </Canvas>
    </div>
  );
}

