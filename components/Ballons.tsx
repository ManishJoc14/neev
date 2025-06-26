"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

type Balloon = {
    id: number
    x: number
    y: number
    color: string
    popped: boolean
    size: number
}

export default function Balloons() {
    const [balloons, setBalloons] = useState<Balloon[]>([])

    useEffect(() => {
        const initialBalloons = Array.from({ length: 3 }, (_, i) => ({
            id: i,
            x: i < 2 ? Math.random() * 20 + 5 : Math.random() * 20 + 75, // Prefer sides
            y: Math.random() * 60 + 20,
            color: ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4"][i],
            popped: false,
            size: Math.random() * 30 + 60,
        }))
        setBalloons(initialBalloons)
    }, [])

    const popBalloon = (id: number) => {
        // Pop sound
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()

        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)

        oscillator.frequency.setValueAtTime(800, audioContext.currentTime)
        oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.1)
        oscillator.type = "square"

        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1)

        oscillator.start(audioContext.currentTime)
        oscillator.stop(audioContext.currentTime + 0.1)

        // Pop + add new ones
        setBalloons((prev) => {
            const updated = prev.map((b) => (b.id === id ? { ...b, popped: true } : b))
            const newOnes = Array.from({ length: Math.floor(Math.random()) + 1 }, (_, i) => ({
                id: Date.now() + i,
                x: Math.random() < 0.5 ? Math.random() * 15 + 2 : Math.random() * 15 + 83,
                y: Math.random() * 70 + 15,
                color: ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4"][Math.floor(Math.random() * 4)],
                popped: false,
                size: Math.random() * 30 + 50,
            }))
            return [...updated, ...newOnes]
        })
    }

    return (
        <div className="fixed inset-0 pointer-events-none z-40">
            {balloons.map((balloon) => (
                <motion.div
                    key={balloon.id}
                    className={`absolute cursor-pointer pointer-events-auto ${balloon.popped ? "pointer-events-none" : ""}`}
                    style={{ left: `${balloon.x}%`, top: `${balloon.y}%` }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                        scale: balloon.popped ? 0 : 1,
                        opacity: balloon.popped ? 0 : 1,
                        y: balloon.popped ? 0 : [0, -10, 0],
                        x: balloon.popped ? 0 : [0, 5, -5, 0],
                    }}
                    transition={{
                        scale: { duration: 0.5 },
                        opacity: { duration: 0.5 },
                        y: { duration: 3, repeat: balloon.popped ? 0 : Infinity, ease: "easeInOut" },
                        x: { duration: 4, repeat: balloon.popped ? 0 : Infinity, ease: "easeInOut" },
                    }}
                    onClick={() => !balloon.popped && popBalloon(balloon.id)}
                >
                    {!balloon.popped ? (
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className="relative">
                            {/* Balloon */}
                            <div
                                className="rounded-full shadow-lg relative overflow-hidden"
                                style={{
                                    width: `${balloon.size}px`,
                                    height: `${balloon.size * 1.2}px`,
                                    background: `linear-gradient(135deg, ${balloon.color}, ${balloon.color}dd)`,
                                    boxShadow: `inset -10px -10px 20px rgba(0,0,0,0.2), 0 0 20px ${balloon.color}44`,
                                }}
                            >
                                <div
                                    className="absolute top-2 left-2 bg-white/40 rounded-full"
                                    style={{
                                        width: `${balloon.size * 0.3}px`,
                                        height: `${balloon.size * 0.2}px`,
                                    }}
                                />
                            </div>
                            {/* String */}
                            <div
                                className="absolute left-1/2 transform -translate-x-1/2 bg-gray-600"
                                style={{
                                    width: "2px",
                                    height: "60px",
                                    top: `${balloon.size * 1.2}px`,
                                }}
                            />
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ scale: 1 }}
                            animate={{ scale: 0, rotate: 180 }}
                            transition={{ duration: 0.3 }}
                            className="text-4xl"
                        >
                            💥
                        </motion.div>
                    )}
                </motion.div>
            ))}
        </div>
    )
}
