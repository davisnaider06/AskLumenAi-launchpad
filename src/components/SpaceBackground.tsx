import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface PlanetProps {
  position: [number, number, number];
  size: number;
  color: string;
  speed: number;
  orbitRadius?: number;
}

const Planet = ({ position, size, color, speed, orbitRadius = 2 }: PlanetProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Self rotation
      meshRef.current.rotation.y += speed * 0.5;
      meshRef.current.rotation.x += speed * 0.2;
      
      // Orbital movement in 3D space
      const time = state.clock.elapsedTime * speed;
      meshRef.current.position.x = position[0] + Math.sin(time) * orbitRadius;
      meshRef.current.position.y = position[1] + Math.sin(time * 0.7) * (orbitRadius * 0.5);
      meshRef.current.position.z = position[2] + Math.cos(time) * orbitRadius;
    }
  });

  return (
    <Sphere ref={meshRef} args={[size, 32, 32]} position={position}>
      <meshStandardMaterial 
        color={color} 
        emissive={color} 
        emissiveIntensity={0.5}
        roughness={0.7}
        metalness={0.3}
      />
    </Sphere>
  );
};

const Scene = () => {
  return (
    <>
      {/* Enhanced lighting for cosmic atmosphere */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#00d4ff" distance={50} />
      <pointLight position={[-10, -10, -10]} intensity={1.2} color="#9d00ff" distance={50} />
      <pointLight position={[0, 15, 5]} intensity={0.8} color="#ff00ff" distance={40} />
      
      {/* Layered stars with different depths for parallax effect */}
      <Stars radius={120} depth={60} count={8000} factor={5} saturation={0} fade speed={1.2} />
      <Stars radius={90} depth={45} count={4000} factor={4} saturation={0.3} fade speed={0.6} />
      <Stars radius={60} depth={30} count={2000} factor={3} saturation={0.5} fade speed={0.3} />
      
      {/* Large prominent planets */}
      <Planet position={[-10, 3, -12]} size={1.5} color="#00ffff" speed={0.008} orbitRadius={3} />
      <Planet position={[8, -2, -18]} size={1.8} color="#ff00ff" speed={0.006} orbitRadius={2.5} />
      <Planet position={[0, 6, -22]} size={1.3} color="#9d00ff" speed={0.009} orbitRadius={3.5} />
      
      {/* Medium planets */}
      <Planet position={[-6, -4, -16]} size={1} color="#4a90e2" speed={0.011} orbitRadius={2} />
      <Planet position={[12, 2, -20]} size={1.1} color="#1abc9c" speed={0.007} orbitRadius={2.8} />
      <Planet position={[-14, 0, -25]} size={0.9} color="#ffd700" speed={0.01} orbitRadius={2.2} />
      
      {/* Additional depth planets */}
      <Planet position={[16, -6, -28]} size={1.2} color="#ff6b9d" speed={0.005} orbitRadius={3} />
      <Planet position={[-8, 8, -30]} size={0.8} color="#00d4ff" speed={0.012} orbitRadius={1.8} />
      <Planet position={[4, -10, -24]} size={1} color="#e74c3c" speed={0.008} orbitRadius={2.5} />
      
      {/* Small asteroids and moons */}
      <Planet position={[-18, 4, -20]} size={0.4} color="#888888" speed={0.015} orbitRadius={1.5} />
      <Planet position={[14, -4, -14]} size={0.35} color="#aaaaaa" speed={0.018} orbitRadius={1.2} />
      <Planet position={[-4, 10, -26]} size={0.45} color="#999999" speed={0.014} orbitRadius={1.6} />
      <Planet position={[10, 6, -32]} size={0.3} color="#666666" speed={0.02} orbitRadius={1} />
      <Planet position={[-12, -8, -19]} size={0.38} color="#bbbbbb" speed={0.016} orbitRadius={1.3} />
    </>
  );
};

export const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 1], fov: 75 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
      {/* Ambient cosmic overlay */}
      <div className="absolute inset-0 bg-gradient-space opacity-60"></div>
    </div>
  );
};
