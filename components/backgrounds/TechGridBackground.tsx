/// <reference types="@react-three/fiber" />
'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Color palette variants
const colorPalettes = {
  // Option 1: Dark gray with orange accents (visible, professional)
  grayOrange: [
    [0.5, 0.5, 0.5],    // Light gray (70%) - clearly visible
    [0.7, 0.7, 0.7],    // Bright gray (25%) - very visible
    [1.0, 0.53, 0.0],   // Bright orange (4%) - brand accent
    [1.0, 0.7, 0.3],    // Light orange (1%) - highlight
  ],
  
  // Option 2: Blue-gray with orange accents (tech, modern)
  blueOrange: [
    [0.2, 0.25, 0.3],   // Dark blue-gray (85%)
    [0.3, 0.4, 0.5],    // Medium blue-gray (10%)
    [0.4, 0.6, 0.8],    // Light blue (3%)
    [1.0, 0.53, 0.0],   // Orange accent (2%)
  ],
  
  // Option 3: Warm orange gradient (brand-aligned, visible)
  warmOrange: [
    [0.3, 0.15, 0.05],  // Dark orange-brown (80%) - visible
    [0.6, 0.3, 0.1],    // Medium orange (15%) - clearly visible
    [0.9, 0.5, 0.15],   // Bright orange (4%) - strong accent
    [1.0, 0.53, 0.0],   // Primary orange (1%) - brand color
  ],
  
  // Option 4: Subtle gray monochrome (minimal, elegant)
  monochrome: [
    [0.25, 0.25, 0.25], // Dark gray (88%)
    [0.4, 0.4, 0.4],    // Medium gray (10%)
    [0.55, 0.55, 0.55], // Light gray (1.5%)
    [0.7, 0.7, 0.7],    // Very light gray (0.5%)
  ],
  
  // Option 5: Purple-gray with orange accents (creative, unique)
  purpleOrange: [
    [0.2, 0.15, 0.25],  // Dark purple-gray (85%)
    [0.35, 0.25, 0.4],  // Medium purple-gray (10%)
    [0.5, 0.35, 0.6],   // Light purple (3%)
    [1.0, 0.53, 0.0],   // Orange accent (2%)
  ],
};

function DataNodes({ variant = 'grayOrange' }: { variant?: keyof typeof colorPalettes }) {
  const ref = useRef<THREE.Group>(null);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    try {
      if (!ref.current) {
        console.warn('[TechGridBackground] DataNodes ref is null');
      } else {
        console.log('[TechGridBackground] DataNodes initialized successfully');
      }
    } catch (err: any) {
      const errorMsg = `DataNodes error: ${err.message}`;
      console.error(errorMsg, err);
      setError(errorMsg);
    }
  }, []);

    // Generate grid of points with colors - more points for visibility
    const { positions, colors } = useMemo(() => {
      try {
      const numPoints = 3000; // Increased from 2000
      const positionsArray = new Float32Array(numPoints * 3);
      const colorsArray = new Float32Array(numPoints * 3);
      
      const colorPalette = colorPalettes[variant];
      
      for (let i = 0; i < numPoints; i++) {
        // Spread points in 3D space for depth effect
        const x = (Math.random() - 0.5) * 40;
        const y = (Math.random() - 0.5) * 40;
        const z = (Math.random() - 0.5) * 30; // Spread in Z for depth
        
        positionsArray.set([x, y, z], i * 3);
        
      // Assign colors based on probability - gray and orange
      const rand = Math.random();
      let color;
      if (rand < 0.70) {
        color = colorPalette[0]; // 70% base color - light gray
      } else if (rand < 0.95) {
        color = colorPalette[1]; // 25% secondary color - bright gray
      } else if (rand < 0.99) {
        color = colorPalette[2]; // 4% accent color - bright orange
      } else {
        color = colorPalette[3]; // 1% highlight color - light orange
      }
        
        colorsArray.set(color, i * 3);
      }
      
      console.log('[TechGridBackground] Generated', positionsArray.length / 3, 'points with colors. Points should be visible now!');
      return { positions: positionsArray, colors: colorsArray };
    } catch (err: any) {
      console.error('[TechGridBackground] Error generating points:', err);
      setError(`Points generation error: ${err.message}`);
      return { positions: new Float32Array(0), colors: new Float32Array(0) };
    }
  }, [variant]);

  // Animate rotation and movement - rotate the group
  useFrame((state) => {
    try {
      if (ref.current) {
        const time = state.clock.getElapsedTime();
        // Rotate the entire group
        ref.current.rotation.x = time * 0.1;
        ref.current.rotation.y = time * 0.15;
        ref.current.rotation.z = time * 0.05;
        
        // Floating movement
        ref.current.position.y = Math.sin(time * 0.5) * 3;
        ref.current.position.x = Math.cos(time * 0.4) * 2.5;
        
        if (Math.floor(time) % 2 === 0 && Math.floor(time * 10) % 20 === 0) {
          console.log('[TechGridBackground] Animation running, time:', time.toFixed(2), 'points:', pointMeshes.length);
        }
      }
    } catch (err: any) {
      console.error('[TechGridBackground] Animation error:', err);
      setError(`Animation error: ${err.message}`);
    }
  });

  const geometry = useMemo(() => {
    try {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      console.log('[TechGridBackground] Geometry created with', positions.length / 3, 'vertices');
      return geo;
    } catch (err: any) {
      console.error('[TechGridBackground] Geometry error:', err);
      setError(`Geometry error: ${err.message}`);
      return new THREE.BufferGeometry();
    }
  }, [positions, colors]);

  if (error) {
    console.error('[TechGridBackground] Rendering error display:', error);
  }

  // Create mesh instances for each point - render as small spheres
  const pointMeshes = useMemo(() => {
    const meshes = [];
    const numPoints = Math.min(positions.length / 3, 2000); // 2000 points for good visibility
    for (let i = 0; i < numPoints; i++) {
      const x = positions[i * 3];
      const y = positions[i * 3 + 1];
      const z = positions[i * 3 + 2];
      const r = colors[i * 3];
      const g = colors[i * 3 + 1];
      const b = colors[i * 3 + 2];
      meshes.push({ position: [x, y, z], color: [r, g, b] });
    }
    console.log('[TechGridBackground] Created', meshes.length, 'point meshes');
    return meshes;
  }, [positions, colors]);

  return (
    <group ref={ref}>
      {error && (
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color="red" />
        </mesh>
      )}
      {/* Render points as small colored spheres */}
      {pointMeshes.map((point, i) => (
        <mesh
          key={i}
          position={[point.position[0], point.position[1], point.position[2]]}
        >
          <sphereGeometry args={[0.08, 6, 6]} />
          <meshBasicMaterial
            color={`rgb(${Math.floor(point.color[0] * 255)}, ${Math.floor(point.color[1] * 255)}, ${Math.floor(point.color[2] * 255)})`}
            transparent={false}
          />
        </mesh>
      ))}
    </group>
  );
}

function Connections({ variant = 'grayOrange' }: { variant?: keyof typeof colorPalettes }) {
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
    try {
      if (linesRef.current) {
        const time = state.clock.getElapsedTime();
        linesRef.current.rotation.y = time * 0.05;
        linesRef.current.rotation.x = Math.sin(time * 0.2) * 0.2;
        linesRef.current.rotation.z = Math.cos(time * 0.15) * 0.1;
      }
    } catch (err: any) {
      console.error('[TechGridBackground] Connections animation error:', err);
    }
  });

  // Get line color based on variant
  const lineColor = variant === 'blueOrange' ? '#4A90E2' : 
                     variant === 'purpleOrange' ? '#9B59B6' : 
                     '#FF8A00';

  return (
    <lineSegments ref={linesRef} geometry={geometry}>
      <lineBasicMaterial
        color={lineColor}
        transparent
        opacity={0.1}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
}

interface TechGridBackgroundProps {
  variant?: keyof typeof colorPalettes;
}

export default function TechGridBackground({ variant = 'grayOrange' }: TechGridBackgroundProps) {
  const [canvasError, setCanvasError] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    console.log('[TechGridBackground] Component mounted, variant:', variant);
    
    // THREE doesn't need to be on window - it's imported directly
    // Check if @react-three/fiber is available
    try {
      const r3f = require('@react-three/fiber');
      console.log('[TechGridBackground] @react-three/fiber is available');
    } catch (err) {
      console.error('[TechGridBackground] @react-three/fiber not available:', err);
      setCanvasError('@react-three/fiber not loaded');
    }
  }, [variant]);

  if (!isMounted) {
    return (
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-4 left-4 bg-red-500/80 text-white p-2 rounded text-xs z-50">
          Loading background...
        </div>
      </div>
    );
  }

  if (canvasError) {
    return (
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-4 left-4 bg-red-500/80 text-white p-2 rounded text-xs z-50 max-w-xs">
          <strong>Background Error:</strong> {canvasError}
          <br />
          Check browser console for details
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
          <Canvas
            camera={{ position: [0, 0, 20], fov: 60 }}
            style={{ background: 'transparent' }}
            gl={{ 
              alpha: true, 
              antialias: true,
              powerPreference: 'high-performance'
            }}
            dpr={[1, 2]}
        onCreated={(state) => {
          console.log('[TechGridBackground] Canvas created', state);
        }}
        onError={(error) => {
          console.error('[TechGridBackground] Canvas error:', error);
          setCanvasError(error.message || 'Unknown Canvas error');
        }}
      >
            <ambientLight intensity={1.0} />
            <pointLight position={[10, 10, 10]} intensity={0.5} />
        <DataNodes variant={variant} />
        <Connections variant={variant} />
      </Canvas>
      {/* Debug info */}
      <div className="absolute top-4 right-4 bg-graphite-900/80 text-graphite-300 p-2 rounded text-xs z-50 pointer-events-auto">
        <div>Variant: {variant}</div>
        <div>Canvas: Active</div>
      </div>
    </div>
  );
}
