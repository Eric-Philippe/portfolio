import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Canon800d_Model } from "./Canon_800d_Model";

export default function Canon800d_Canvas() {
  const BASE = 240;
  const FIRST_STEP = 400;
  const ROTATION_STOP = 1000;
  const SECOND_STEP = 700;
  const ROTATION_SPEED = 0.006;
  const isSmallScreen = window.innerWidth < 1020;
  const FOV = isSmallScreen ? 20 : 10;

  const [rotation, setRotation] = useState(
    scrollY < SECOND_STEP ? scrollY * ROTATION_SPEED : 0
  );
  const [modelHeight, setModelHeight] = useState(BASE);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY <= ROTATION_STOP) setRotation(scrollY * ROTATION_SPEED);
      else setRotation(ROTATION_STOP * ROTATION_SPEED);

      if (scrollY > SECOND_STEP)
        setModelHeight(BASE - FIRST_STEP * 0.5 - (scrollY - SECOND_STEP) * 0.4);

      if (scrollY < FIRST_STEP) setModelHeight(BASE - scrollY * 0.5);

      // Reduce the opacity after the second step
      if (scrollY > SECOND_STEP) setOpacity(1 - (scrollY - SECOND_STEP) / 200);
      else setOpacity(1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 2], fov: FOV }}
      style={{
        position: "fixed",
        top: modelHeight,
        width: "40%",
        right: "0.5%",
        opacity: opacity,
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
