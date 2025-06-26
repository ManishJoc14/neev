"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function DancingEmoji() {
    const emojis = ["🕺", "💃", "🤸‍♂️", "🎭", "🤹‍♀️", "🎪"]
    const [currentEmoji, setCurrentEmoji] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentEmoji((prev) => (prev + 1) % emojis.length)
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <motion.div
            className="fixed bottom-8 right-8 text-6xl z-50 cursor-pointer"
            animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1],
            }}
            transition={{
                duration: 0.5,
                repeat: Number.POSITIVE_INFINITY,
            }}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.8 }}
        >
            {emojis[currentEmoji]}
        </motion.div>
    )
}