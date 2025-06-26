"use client"

// package imports
import Confetti from "react-confetti"
import { Canvas } from "@react-three/fiber"
import { useRef, useState, Suspense } from "react"
import useWindowSize from "react-use/lib/useWindowSize"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { OrbitControls, Environment, PerspectiveCamera } from "@react-three/drei"

// local imports
import Messages from "@/components/Messages"
import Footer from "@/components/Footer"
import Balloons from "@/components/Ballons"
import GiftBox from "@/components/GiftBox"
import BirthdayCake from "@/components/Cake"
import GiftShop from "@/components/GiftShop"
import FutureYou from "@/components/FutureYou"
import MakeAWish from "@/components/MakeAWish"
import AnimatedStars from "@/components/Stars"
import Background from "@/components/Background"
import Celebration from "@/components/Celebration"
import MusicPlayer from "@/components/MusicPlayer"
import DancingEmoji from "@/components/DancingEmoji"
import MemoryGraveyard from "@/components/MemoryGraveyard"
import Image from "next/image"
import Text3DComponent from "@/components/Text3D"


export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const { width, height } = useWindowSize()
  const [showConfetti, setShowConfetti] = useState(false)

  const heroRef = useRef(null)
  const cakeRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const cakeInView = useInView(cakeRef, { once: true })

  // Parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 0.3], ["0%", "30%"])
  const textY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-20%"])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <AnimatedStars />
      <Balloons />
      <DancingEmoji />
      <MusicPlayer />

      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={300}
          gravity={0.3}
          colors={["#8b5cf6", "#a855f7", "#c084fc", "#e879f9", "#fbbf24"]}
          style={{ position: "fixed", top: 0, left: 0, zIndex: 9999 }}
        />
      )}

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative px-8 py-24"
        style={{ y: heroY }}
      >
        <div className="max-w-6xl mx-auto text-center relative z-30">
          {/* Main Content */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-16"
          >
            {/* Birthday Person Photo - Made Larger */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={heroInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="relative mx-auto w-fit"
            >
              <div className="w-64 h-64 lg:w-80 lg:h-80 mx-auto rounded-full overflow-hidden border-4 border-purple-400/50 shadow-2xl bg-white/5 backdrop-blur-sm">
                <Image
                  src="/Neev.png"
                  alt="Birthday Person"
                  className="w-full h-full object-cover"
                  width={320}
                  height={320}
                />
              </div>
              <motion.div
                animate={{
                  boxShadow: ["0 0 30px #8b5cf6", "0 0 60px #8b5cf6", "0 0 30px #8b5cf6"],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute inset-0 rounded-full"
              />
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-6"
              style={{ y: textY }}
            >
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-20">
                <span className="block text-white mb-4 text-5xl lg:text-7xl xl:text-8xl">Happy Birthday</span>
                <span className="block bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
                  Neev
                </span>
              </h1>
            </motion.div>

            {/* Messages*/}
            <Messages heroInView={heroInView} />
          </motion.div>

          {/* Subtle 3D Background */}
          <Background />
        </div>
      </motion.section>

      {/* 3D Cake Section */}
      <section ref={cakeRef} className="min-h-screen flex items-center justify-center relative my-40">
        <div className="absolute inset-0">
          <Canvas>
            <Suspense fallback={null}>
              <PerspectiveCamera makeDefault position={[0, 0, 6]} />
              <ambientLight intensity={0.6} />
              <pointLight position={[5, 5, 5]} intensity={1} color="#8b5cf6" />
              <pointLight position={[-5, -5, 5]} intensity={0.8} color="#ec4899" />
              <Environment preset="night" />
              <Text3DComponent
                text="Happy Birthday Neev!"
                position={[-2, 2, 0]}
                color="#8b5cf6"
              />
              <BirthdayCake />
              <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
            </Suspense>
          </Canvas>
        </div>
        <MakeAWish cakeInView={cakeInView} />
      </section>

      {/* Floating Gift Box Section */}
      <GiftBox />

      {/* Future You Section */}
      <FutureYou />

      {/* Memory Graveyard Section */}
      <MemoryGraveyard />

      {/* Gift Shop Section */}
      <GiftShop />

      {/* Celebration Section */}
      <Celebration setShowConfetti={setShowConfetti} />

      {/* Footer */}
      <Footer />
    </div>
  )
}
