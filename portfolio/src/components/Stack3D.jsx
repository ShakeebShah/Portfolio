import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox, Text, Float } from "@react-three/drei";
import * as THREE from "three";

const LAYERS = [
  { label: "N", full: "Node.js", color: "#34e7b8", y: -1.5 },
  { label: "R", full: "React.js", color: "#5b8cff", y: -0.5 },
  { label: "E", full: "Express.js", color: "#8f9bb8", y: 0.5 },
  { label: "M", full: "MongoDB", color: "#3ccf91", y: 1.5 },
];

function Layer({ label, full, color, y, index }) {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.position.y = y + Math.sin(t * 0.6 + index) * 0.08;
      ref.current.rotation.z = Math.sin(t * 0.3 + index) * 0.03;
    }
  });

  return (
    <group
      ref={ref}
      position={[0, y, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <RoundedBox args={[3.4, 0.62, 0.62]} radius={0.12} smoothness={4}>
        <meshStandardMaterial
          color={color}
          transparent
          opacity={hovered ? 0.55 : 0.32}
          roughness={0.25}
          metalness={0.15}
        />
      </RoundedBox>
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(3.4, 0.62, 0.62)]} />
        <lineBasicMaterial color={color} transparent opacity={0.9} />
      </lineSegments>
      <Text
        position={[-1.35, 0, 0.32]}
        fontSize={0.32}
        color={color}
        anchorX="left"
        anchorY="middle"
        font={undefined}
      >
        {label}
      </Text>
      <Text
        position={[-0.85, 0, 0.32]}
        fontSize={0.16}
        color="#eef1f7"
        anchorX="left"
        anchorY="middle"
        font={undefined}
      >
        {full}
      </Text>
    </group>
  );
}

function Rig() {
  const group = useRef();
  const target = useMemo(() => new THREE.Vector2(0, 0), []);

  useFrame((state) => {
    target.x = state.pointer.x * 0.35;
    target.y = state.pointer.y * 0.2;
    if (group.current) {
      group.current.rotation.y += (target.x - group.current.rotation.y) * 0.04;
      group.current.rotation.x += (-target.y - group.current.rotation.x) * 0.04;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.3}>
        {LAYERS.map((l, i) => (
          <Layer key={l.label} index={i} {...l} />
        ))}
      </Float>
    </group>
  );
}

export default function Stack3D() {
  return (
    <Canvas
      camera={{ position: [3.2, 1.6, 5.2], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.7} />
      <pointLight position={[5, 5, 5]} intensity={40} color="#5b8cff" />
      <pointLight position={[-5, -3, 2]} intensity={20} color="#34e7b8" />
      <Rig />
    </Canvas>
  );
}
