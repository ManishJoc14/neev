"use client"

import { motion } from "framer-motion"


export default function MemoryGraveyard() {
  const tombstones = [
    { text: "Ghosted more than a haunted house", icon: "⚰️", epitaph: "Love life" },
    { text: "Topper... until Wi-Fi hit", icon: "🪦", epitaph: "Academic focus" },
    { text: "Born Jan 1. Died Jan 3", icon: "💀", epitaph: "Gym motivation" },
    { text: "Fell in battle in todays exam.", icon: "☠️", epitaph: "Last Brain Cell" },
  ]

  return (
    <section className="py-48 px-8 relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-900/30 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl lg:text-6xl font-bold text-center mb-8 text-gray-300"
        >
          ⚰️ Memory Graveyard ⚰️
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center text-gray-400 mb-20 text-xl"
        >
          Here lies everything you&apos;ve lost with age... RIP 💀
        </motion.p>

        <div className="flex justify-center items-end gap-12 flex-wrap">
          {tombstones.map((tombstone, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0, rotateX: 45 }}
              whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative cursor-pointer"
            >
              {/* Tombstone */}
              <motion.div
                whileHover={{ scale: 1.1, y: -10 }}
                className="relative bg-gradient-to-b from-gray-500 to-gray-700 rounded-t-full w-32 h-40 border-2 border-gray-600 shadow-2xl flex flex-col justify-center items-center"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-t-full"></div>

                {/* Icon - always visible */}
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.5,
                  }}
                  className="text-3xl relative z-10"
                >
                  {tombstone.icon}
                </motion.div>

                {/* Epitaph text - always visible */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-sm text-gray-300 font-bold text-center px-2">
                  {tombstone.epitaph}
                </div>
              </motion.div>

              {/* Grass at the base */}
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full h-4 bg-gradient-to-t from-green-800/50 to-transparent rounded-b-lg"></div>

              {/* Hover text tooltip */}
              <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-2 pointer-events-none z-20">
                <div className="bg-black/90 text-white text-sm font-bold px-4 py-3 rounded-lg border border-gray-600 shadow-xl whitespace-nowrap">
                  {tombstone.text}
                  {/* Tooltip arrow */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Spooky decorations */}
        <div className="absolute top-20 left-10 text-5xl opacity-30">🦇</div>
        <div className="absolute top-32 right-16 text-4xl opacity-40">🕷️</div>
        <div className="absolute bottom-20 left-20 text-6xl opacity-25">🌙</div>
        <div className="absolute bottom-32 right-12 text-4xl opacity-35">⚰️</div>
      </div>
    </section>
  )
}