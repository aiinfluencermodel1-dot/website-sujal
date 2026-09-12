"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Core() {
  const outer = useRef<THREE.Mesh>(null);
  const inner = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (outer.current) {
      outer.current.rotation.y += delta * 0.12;
      outer.current.rotation.x += delta * 0.04;
    }
    if (inner.current) {
      inner.current.rotation.y -= delta * 0.18;
      inner.current.rotation.z += delta * 0.06;
    }
    const { x, y } = state.pointer;
    state.camera.position.x += (x * 1.2 - state.camera.position.x) * 0.04;
    state.camera.position.y += (y * 0.8 - state.camera.position.y) * 0.04;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group position={[2.6, -1.5, -0.5]}>
      {/* Outer wireframe shell */}
      <mesh ref={outer}>
        <icosahedronGeometry args={[1.1, 3]} />
        <meshBasicMaterial color="#a8f4ff" wireframe transparent opacity={0.4} />
      </mesh>
      {/* Inner counter-rotating shell */}
      <mesh ref={inner} scale={0.68}>
        <icosahedronGeometry args={[1.1, 2]} />
        <meshBasicMaterial color="#3351f1" wireframe transparent opacity={0.5} />
      </mesh>
      {/* Inner glow sphere */}
      <mesh scale={0.32}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshBasicMaterial color="#a8f4ff" transparent opacity={0.9} />
      </mesh>
      <pointLight color="#a8f4ff" intensity={20} distance={10} />
    </group>
  );
}

function Rings() {
  const ring = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (ring.current) {
      ring.current.rotation.x = Math.PI / 2.4;
      ring.current.rotation.z += delta * 0.12;
    }
    if (ring2.current) {
      ring2.current.rotation.x = Math.PI / 1.8;
      ring2.current.rotation.z -= delta * 0.09;
      ring2.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.15;
    }
  });

  return (
    <group position={[2.6, -1.5, -0.5]}>
      <mesh ref={ring}>
        <torusGeometry args={[2.0, 0.015, 8, 128]} />
        <meshBasicMaterial color="#8fa3c8" transparent opacity={0.55} />
      </mesh>
      <mesh ref={ring2}>
        <torusGeometry args={[2.5, 0.012, 8, 128]} />
        <meshBasicMaterial color="#a8f4ff" transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  const positions = new Float32Array(300 * 3);
  for (let i = 0; i < 300; i++) {
    const r = 4 + Math.random() * 6;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
    positions[i * 3 + 2] = r * Math.cos(phi);
  }

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#a8f4ff" size={0.035} transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

export default function HeroScene() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.6}>
          <Core />
        </Float>
        <Rings />
        <Particles />
        <Stars radius={40} depth={20} count={1200} factor={3} saturation={0} fade speed={0.6} />
      </Canvas>
      {/* Fade edges into page background */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[var(--bg-primary)] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--bg-primary)] to-transparent" />
    </div>
  );
}
