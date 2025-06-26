"use client"

import { motion } from "framer-motion"
import { useState } from "react"


export default function GiftBox() {
    const [isOpened, setIsOpened] = useState(false)

    const handleGiftClick = () => {
        setIsOpened(true)
    }

    return (
        <section className="py-48 px-8 relative min-h-screen flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center space-y-16">
                {!isOpened ? (
                    <motion.div
                        whileHover={{ scale: 1.05, rotateY: 5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleGiftClick}
                        className="cursor-pointer relative mx-auto w-fit"
                        animate={{
                            y: [0, -15, 0],
                            rotateX: [0, 2, -2, 0],
                        }}
                        transition={{
                            y: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                            rotateX: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                        }}
                    >
                        <div className="relative perspective-1000">
                            {/* Gift Box */}
                            <div className="w-48 h-48 relative transform-style-preserve-3d">
                                {/* Box faces */}
                                <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-500 to-red-700 rounded-2xl shadow-2xl border-2 border-red-400/50">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                                    {/* Texture pattern */}
                                    <div className="absolute inset-0 opacity-20">
                                        <div className="w-full h-full bg-gradient-to-br from-transparent via-white/10 to-transparent rounded-2xl"></div>
                                    </div>
                                </div>

                                {/* Ribbon vertical */}
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-full bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-500 shadow-lg">
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-black/20"></div>
                                </div>

                                {/* Ribbon horizontal */}
                                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-8 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 shadow-lg">
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-black/20"></div>
                                </div>

                                {/* Bow */}
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <div className="relative">
                                        <div className="w-16 h-12 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full shadow-xl transform rotate-45"></div>
                                        <div className="absolute top-0 left-0 w-16 h-12 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full shadow-xl transform -rotate-45"></div>
                                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-lg shadow-lg"></div>
                                    </div>
                                </div>
                            </div>

                            <motion.div
                                animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-xl px-6 py-3 border border-white/20 text-white rounded-2xl text-lg font-bold shadow-xl"
                            >
                                Open me!
                            </motion.div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ scale: 0, rotate: 180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-12"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-8xl"
                        >
                            💥
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="text-4xl font-bold text-white"
                        >
                            You get... NOTHING. Just like every year 😎
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 max-w-3xl mx-auto"
                        >
                            <p className="text-2xl text-purple-100 leading-relaxed">
                                Happy Birthday, idiot ❤️
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </section>
    )
}
