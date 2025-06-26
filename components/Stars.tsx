"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

type Star = {
    id: number
    x: number
    y: number
    size: number
    duration: number
    delay: number
}

type BlackHole = {
    id: number
    x: number
    y: number
    size: number
}

export default function AnimatedStars() {
    const [stars, setStars] = useState<Star[]>([])
    const [blackHoles, setBlackHoles] = useState<BlackHole[]>([])

    useEffect(() => {
        const generatedStars = Array.from({ length: 60 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            duration: Math.random() * 4 + 2,
            delay: Math.random() * 2,
        }))

        const generatedHoles = Array.from({ length: 3 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 200 + 150,
        }))

        setStars(generatedStars)
        setBlackHoles(generatedHoles)
    }, [])

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Black Holes */}
            {blackHoles.map((hole) => (
                <motion.div
                    key={`hole-${hole.id}`}
                    className="absolute rounded-full"
                    style={{
                        left: `${hole.x}%`,
                        top: `${hole.y}%`,
                        width: `${hole.size}px`,
                        height: `${hole.size}px`,
                        background: `radial-gradient(circle, transparent 30%, rgba(139, 92, 246, 0.1) 50%, rgba(139, 92, 246, 0.3) 70%, rgba(0, 0, 0, 0.8) 100%)`,
                    }}
                    animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                    }}
                />
            ))}

            {/* Stars */}
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute bg-white rounded-full"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                    }}
                    animate={{
                        opacity: [0.3, 1, 0.3],
                        scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: star.delay,
                    }}
                />
            ))}
        </div>
    )
}
