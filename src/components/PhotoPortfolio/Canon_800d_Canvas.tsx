import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Canon800d_Model } from "./Canon_800d_Model";

export default function Canon800d_Canvas() {
  const [rotation, setRotation] = useState(0);
  const [modelHeight, setModelHeight] = useState(240);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setRotation(scrollY * 0.004);
      if (scrollY < 400) {
        if (scrollY >= 800) {
          setModelHeight(240 - 800 * 0.5);
        } else setModelHeight(240 - scrollY * 0.5);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 2], fov: 10 }}
      style={{
        position: "fixed",
        top: modelHeight,
        left: 400,
        width: "100vw",
        height: "100vh",
      }}
    >
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={null}>
        <Canon800d_Model position={[0.025, 0, 0]} rotation={[0, rotation, 0]} />
      </Suspense>
      <OrbitControls enabled={false} />
    </Canvas>
  );
}
