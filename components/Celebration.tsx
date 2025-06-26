"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Sparkles } from "lucide-react"
import { Button } from "./ui/button"

export default function Celebration({ setShowConfetti }: { setShowConfetti: (show: boolean) => void }) {
    const finalRef = useRef(null)
    const finalInView = useInView(finalRef, { once: true })
    return (
        <motion.section ref={finalRef} className="py-48 px-8 relative min-h-screen flex items-center justify-center">
            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={finalInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="space-y-16"
                >
                    <motion.h2
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={finalInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-6xl lg:text-8xl font-bold leading-tight"
                    >
                        🎊 Let's Party! 🎊
                    </motion.h2>

                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={finalInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="text-3xl lg:text-4xl text-purple-100 leading-relaxed font-light"
                    >
                        Hope your birthday is absolutely amazing!
                    </motion.p>

                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={finalInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="flex flex-col items-center space-y-12"
                    >
                        <Button
                            onClick={() => setShowConfetti(true)}
                            className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-700 hover:via-violet-700 hover:to-indigo-700 text-white px-20 py-8 text-2xl font-bold rounded-full shadow-2xl border-2 border-white/20 backdrop-blur-sm relative overflow-hidden group transform transition-all duration-300 hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center space-x-4">
                                <Sparkles className="w-8 h-8" />
                                <span>CELEBRATE!</span>
                                <Sparkles className="w-8 h-8" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    )
}