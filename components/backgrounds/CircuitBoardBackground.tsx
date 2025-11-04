/// <reference types="@react-three/fiber" />
'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function CircuitBoard() {
  const boardRef = useRef<THREE.Group>(null);
  
  const { nodes, connections } = useMemo(() => {
    const gridSize = 8;
    const nodes = [];
    const connections = [];
    
    // Create grid of nodes
    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        nodes.push({
          position: [
            (x - gridSize / 2) * 3,
            (y - gridSize / 2) * 3,
            0
          ],
        });
      }
    }
    
    // Create connections
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      // Connect to adjacent nodes
      if (i % gridSize < gridSize - 1) {
        connections.push([node.position, nodes[i + 1].position]);
      }
      if (i < nodes.length - gridSize) {
        connections.push([node.position, nodes[i + gridSize].position]);
      }
    }
    
    return { nodes, connections };
  }, []);

  useFrame((state) => {
    if (boardRef.current) {
      const time = state.clock.getElapsedTime();
      boardRef.current.rotation.z = Math.sin(time * 0.1) * 0.1;
    }
  });

  return (
    <group ref={boardRef}>
      {/* Nodes */}
      {nodes.map((node, i) => (
        <mesh key={i} position={node.position as [number, number, number]}>
          <boxGeometry args={[0.08, 0.08, 0.08]} />
          <meshBasicMaterial color="#FF8A00" />
        </mesh>
      ))}
      {/* Connections */}
      {connections.map((conn, i) => {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array([
          ...conn[0],
          ...conn[1],
        ]);
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        return (
          <line key={i} geometry={geometry}>
            <lineBasicMaterial color="#666666" opacity={0.3} transparent />
          </line>
        );
      })}
    </group>
  );
}

export default function CircuitBoardBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 25], fov: 60 }} style={{ background: 'transparent' }}>
        <ambientLight intensity={1.0} />
        <CircuitBoard />
      </Canvas>
    </div>
  );
}

