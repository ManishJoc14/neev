"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Play, Pause } from "lucide-react"

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const hasStarted = useRef(false)

    useEffect(() => {
        const tryAutoPlay = () => {
            if (hasStarted.current) return
            hasStarted.current = true
            setIsPlaying(true)
        }

        window.addEventListener("click", tryAutoPlay)
        window.addEventListener("touchstart", tryAutoPlay)

        return () => {
            window.removeEventListener("click", tryAutoPlay)
            window.removeEventListener("touchstart", tryAutoPlay)
        }
    }, [])

    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        if (isPlaying) {
            audio.play().catch((err) => console.warn("Autoplay blocked:", err))
        } else {
            audio.pause()
        }
    }, [isPlaying])

    return (
        <>
            <audio ref={audioRef} src="/audio/happy-birthday-music.mp3" loop preload="auto" />

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsPlaying(!isPlaying)}
                className="fixed top-8 right-8 z-50 bg-purple-600/80 backdrop-blur-sm text-white p-4 rounded-full shadow-lg border border-purple-400/30"
            >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </motion.button>
        </>
    )
}
