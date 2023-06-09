import * as THREE from "three";
import { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, TrackballControls } from "@react-three/drei";
import randomWord from "random-words";
import userData from '../../assets/data.json';

function Word({ children, ...props }) {
  const color = new THREE.Color();
  const fontProps = {
    font: "/Inter-Bold.woff",
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);
  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    return () => (document.body.style.cursor = "auto");
  }, [hovered]);
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion);
    // Animate font color
    ref.current.material.color.lerp(
      color.set(hovered ? "#fa2720" : "white"),
      0.1
    );
  });
  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      onClick={() => console.log("clicked")}
      {...props}
      {...fontProps}
      children={children}
    />
  );
}

function Cloud({ count = 4, radius = 28 }) {
  // Create a count x count random words with spherical distribution

  const groupRef = useRef();

  useEffect(() => {
    groupRef.current.rotation.x = Math.PI * 2; // Adjust rotation speed as needed
  }, []);

  useFrame(() => {
    // groupRef.current.rotation.y += 0.001; // Adjust rotation speed as needed
    groupRef.current.rotation.y += 0.01;
  });

  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    let skillCounter = 0;
    let maxSkills = userData.skills.length;
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++)
      {
        if(skillCounter>=maxSkills){
          skillCounter = 0;
        }
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          userData.skills[skillCounter++],
        ]);
      }
    return temp;
  }, [count, radius]);

  return (
    <group ref={groupRef}>
      {words.map(([pos, word], index) => (
        <Word key={index} position={pos} children={word} />
      ))}
    </group>
  );

  //   return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
}

export default function App() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }} className="sphere" style={{height:'60vh'}}>
      <fog attach="fog" args={["#202025", 0, 80]} />
      <Cloud count={8} radius={20} />
      <TrackballControls />
    </Canvas>
  );
}
