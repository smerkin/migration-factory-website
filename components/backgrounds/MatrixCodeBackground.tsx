/// <reference types="@react-three/fiber" />
'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function MatrixCode() {
  const codeRef = useRef<THREE.Group>(null);
  
  const columns = useMemo(() => {
    const cols = [];
    for (let i = 0; i < 30; i++) {
      const length = Math.floor(Math.random() * 10) + 5;
      cols.push({
        x: (i - 15) * 2,
        length,
        speed: Math.random() * 0.5 + 0.3,
        chars: Array.from({ length }, () => 
          String.fromCharCode(0x30A0 + Math.random() * 96)
        ),
      });
    }
    return cols;
  }, []);

  useFrame((state) => {
    if (codeRef.current) {
      const time = state.clock.getElapsedTime();
      codeRef.current.children.forEach((col, i) => {
        if (col instanceof THREE.Group) {
          col.position.y = (time * columns[i].speed * 5) % 50 - 25;
        }
      });
    }
  });

  return (
    <group ref={codeRef}>
      {columns.map((col, colIdx) => (
        <group key={colIdx} position={[col.x, 0, -10]}>
          {col.chars.map((char, charIdx) => (
            <mesh key={charIdx} position={[0, -charIdx * 0.8, 0]}>
              <boxGeometry args={[0.3, 0.8, 0.1]} />
              <meshBasicMaterial 
                color={charIdx === 0 ? '#FF8A00' : '#00FF00'} 
                opacity={1 - charIdx * 0.1}
                transparent
              />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
}

export default function MatrixCodeBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 20], fov: 60 }} style={{ background: 'transparent' }}>
        <ambientLight intensity={1.0} />
        <MatrixCode />
      </Canvas>
    </div>
  );
}

