"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)
  const [colorIndex, setColorIndex] = useState(0)

  const fullText = "Mit Patel"
  const period = 2000

  // Array of gradient combinations
  const gradients = [
    "from-blue-400 via-purple-500 to-blue-600",
    // "from-green-400 via-blue-500 to-purple-600",
    // "from-pink-400 via-purple-500 to-indigo-600",
    // "from-yellow-400 via-orange-500 to-red-600",
    // "from-teal-400 via-cyan-500 to-blue-600",
  ]

  useEffect(() => {
    setMounted(true)

    const ticker = setInterval(() => {
      tick()
    }, typingSpeed)

    return () => clearInterval(ticker)
  }, [text, isDeleting])

  // Color changing effect
  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % gradients.length)
    }, 3000)

    return () => clearInterval(colorInterval)
  }, [])

  const tick = () => {
    const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setTypingSpeed((prevSpeed) => prevSpeed / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setTypingSpeed(period)
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setTypingSpeed(500)
    }
  }

  if (!mounted) return null

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black z-0"></div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] z-0"></div>

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={`text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${gradients[colorIndex]} animate-gradient-text`}
          >
            {text}
            <span className="animate-pulse">|</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
          >
            Aspiring Data Analyst & Creative UI Designer
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <Button
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-6 rounded-md text-lg"
              asChild
            >
              <Link href="#projects">My Work</Link>
            </Button>
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 rounded-md text-lg"
              asChild
            >
              <Link href="#about">About Me</Link>
            </Button>
            <Button
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-6 rounded-md text-lg"
              asChild
            >
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10"
      >
        <Link href="#about" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="animate-bounce" />
        </Link>
      </motion.div>
    </section>
  )
}

