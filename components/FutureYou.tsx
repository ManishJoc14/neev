"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"


export default function FutureYou() {
    const [showOldFace, setShowOldFace] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setShowOldFace(true), 2000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <section className="py-48 px-8 relative min-h-screen flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-16"
                >
                    <h2 className="text-5xl lg:text-6xl font-bold text-white">🔮 Future You Preview 🔮</h2>

                    {showOldFace && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="space-y-8"
                        >
                            <div className="relative mx-auto w-80 h-80">
                                <motion.div
                                    animate={{ opacity: [1, 0.3, 1] }}
                                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                                    className="absolute inset-0 rounded-full overflow-hidden border-8 border-gray-400 bg-white/5 shadow-2xl"
                                >
                                    <Image
                                        src="/old_neev.png"
                                        alt="Aged Neev"
                                        className="w-full h-full object-cover filter grayscale sepia"
                                        width={320}
                                        height={320}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-800/30"></div>
                                </motion.div>
                            </div>

                            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                                <p className="text-xl leading-relaxed">
                                    You at 80. Still fabulous. Still weird. Still Single Neev 🤣
                                </p>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    )
}