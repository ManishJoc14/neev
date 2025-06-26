"use client"

import { Float, Text3D } from '@react-three/drei'
import React from 'react'

export default function Text3DComponent({
  text,
  position,
  color,
}: { text: string; position: [number, number, number]; color: string }) {
  return (
    <Text3D font="/fonts/helvetiker_regular.typeface.json" size={0.3} height={0.1} position={position} curveSegments={12}>
      {text}
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
    </Text3D>
  )
}