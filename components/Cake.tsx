"use client"

import { Float } from '@react-three/drei'

export default function BirthdayCake() {
    return (
        <Float speed={0.6} rotationIntensity={0.4} floatIntensity={0.5}>
            <group>
                {/* Base layer */}
                <mesh position={[0, -0.8, 0]}>
                    <cylinderGeometry args={[1.5, 1.5, 1.2, 32]} />
                    <meshStandardMaterial color="#8b5cf6" />
                </mesh>
                {/* Middle layer */}
                <mesh position={[0, 0, 0]}>
                    <cylinderGeometry args={[1.2, 1.2, 1, 32]} />
                    <meshStandardMaterial color="#a855f7" />
                </mesh>
                {/* Top layer */}
                <mesh position={[0, 0.8, 0]}>
                    <cylinderGeometry args={[0.9, 0.9, 0.8, 32]} />
                    <meshStandardMaterial color="#c084fc" />
                </mesh>
                {/* Frosting */}
                <mesh position={[0, 1.3, 0]}>
                    <cylinderGeometry args={[1, 1, 0.2, 32]} />
                    <meshStandardMaterial color="#ec4899" />
                </mesh>
                {/* Candles */}
                {Array.from({ length: 7 }, (_, i) => (
                    <group key={i} position={[Math.cos(i * 0.9) * 0.6, 1.5, Math.sin(i * 0.9) * 0.6]}>
                        <mesh>
                            <cylinderGeometry args={[0.03, 0.03, 0.4, 8]} />
                            <meshStandardMaterial color="#fbbf24" />
                        </mesh>
                        <mesh position={[0, 0.25, 0]}>
                            <sphereGeometry args={[0.04, 8, 8]} />
                            <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={1.2} />
                        </mesh>
                    </group>
                ))}
            </group>
        </Float>
    )
}