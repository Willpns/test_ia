"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshTransmissionMaterial, Float, Environment } from "@react-three/drei";
import * as THREE from "three";

// Floating torus knot with transmission material
function TorusKnot({ mousePos }: { mousePos: React.MutableRefObject<{ x: number; y: number }> }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.15 + mousePos.current.y * 0.3;
    meshRef.current.rotation.y = t * 0.2  + mousePos.current.x * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={meshRef} castShadow>
        <torusKnotGeometry args={[1.4, 0.45, 200, 32, 2, 3]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          thickness={0.5}
          roughness={0.02}
          transmission={1}
          ior={1.4}
          chromaticAberration={0.04}
          anisotropy={0.1}
          distortion={0.1}
          distortionScale={0.2}
          temporalDistortion={0.05}
          color="#BFDBFE"
          attenuationColor="#2563EB"
          attenuationDistance={2}
        />
      </mesh>
    </Float>
  );
}

// Orbiting particles ring
function ParticlesRing() {
  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < 120; i++) {
      const angle  = (i / 120) * Math.PI * 2;
      const radius = 3.2 + (Math.random() - 0.5) * 0.6;
      const y      = (Math.random() - 0.5) * 0.5;
      pts.push(new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius));
    }
    return pts;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.08;
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    return geo;
  }, [points]);

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial color="#93C5FD" size={0.04} transparent opacity={0.7} />
    </points>
  );
}

// Floating small spheres
function FloatingSpheres() {
  const spheres = useMemo(() =>
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      pos: [
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 3,
      ] as [number, number, number],
      radius: 0.05 + Math.random() * 0.12,
      speed:  0.3 + Math.random() * 0.7,
    })), []
  );

  const refs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state) => {
    refs.current.forEach((mesh, i) => {
      if (mesh) {
        const t = state.clock.getElapsedTime() * spheres[i].speed;
        mesh.position.y = spheres[i].pos[1] + Math.sin(t) * 0.4;
        mesh.position.x = spheres[i].pos[0] + Math.cos(t * 0.5) * 0.2;
      }
    });
  });

  return (
    <>
      {spheres.map((s, i) => (
        <mesh
          key={s.id}
          position={s.pos}
          ref={(el) => { refs.current[i] = el; }}
        >
          <sphereGeometry args={[s.radius, 16, 16]} />
          <meshStandardMaterial
            color="#3B82F6"
            metalness={0.8}
            roughness={0.1}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </>
  );
}

// Camera that reacts to mouse
function CameraRig({ mousePos }: { mousePos: React.MutableRefObject<{ x: number; y: number }> }) {
  const { camera } = useThree();

  useFrame(() => {
    camera.position.x += (mousePos.current.x * 0.8 - camera.position.x) * 0.05;
    camera.position.y += (mousePos.current.y * 0.5 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function FloatingMesh() {
  const mousePos = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mousePos.current = {
      x: ((e.clientX - rect.left) / rect.width  - 0.5) * 2,
      y: ((e.clientY - rect.top)  / rect.height - 0.5) * -2,
    };
  };

  return (
    <div
      className="w-full h-full"
      onMouseMove={handleMouseMove}
      role="img"
      aria-label="Animation 3D interactive"
    >
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <CameraRig mousePos={mousePos} />
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.5}
          color="#DBEAFE"
        />
        <pointLight position={[-3, 3, 3]} intensity={2} color="#2563EB" />
        <pointLight position={[3, -2, -3]} intensity={1} color="#93C5FD" />
        <Environment preset="city" />
        <TorusKnot mousePos={mousePos} />
        <ParticlesRing />
        <FloatingSpheres />
      </Canvas>
    </div>
  );
}
