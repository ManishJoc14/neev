
"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, PerspectiveCamera, Stars } from "@react-three/drei";
import { Suspense } from "react";

export default function Background() {
    return (
        <div className="absolute inset-0 opacity-30 pointer-events-none">
            <Canvas>
                <Suspense fallback={null}>
                    <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                    <ambientLight intensity={0.3} />
                    <pointLight position={[10, 10, 10]} intensity={0.5} color="#8b5cf6" />
                    <Environment preset="night" />
                    <Stars radius={100} depth={50} count={500} factor={2} saturation={0} fade speed={0.5} />
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.2} />
                </Suspense>
            </Canvas>
        </div>
    );
}