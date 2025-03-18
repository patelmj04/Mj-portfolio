"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function About() {
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-purple-950/10 pointer-events-none"></div>

      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 10 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
          style={{ opacity: titleInView ? 1 : 0 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -50 }}
            animate={imageInView ? { opacity: 50, x: 10 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
            style={{ opacity: imageInView ? 0 : 0 }}
          >
            <div className="relative h-[500px] w-full md:h-[500px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-900/20 z-10 rounded-lg"></div>
              <Image
                src="/Mj.webp?height=500&width=500"
                alt="Profile Picture"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-0 -right-0 h-full w-full border-2 border-blue-300 rounded-lg z-0"></div>
            <div className="absolute -bottom-2 -right-2 h-full w-full border-2 border-purple-500 rounded-lg z-0"></div>
            <div className="absolute -bottom-4 -right-4 h-full w-full border-2 border-blue-400 rounded-lg z-0"></div>
          </motion.div>

          <motion.div
            ref={textRef}
            initial={{ opacity: 0, x: 50 }}
            animate={textInView ? { opacity: 1, x: 10 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 text-white"
            style={{ opacity: textInView ? 1 : 0 }}
          >
            <h3 className="text-2xl font-bold">Hi, I'm Mit Patel</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer and UI/UX designer with over 5 years of experience creating
              beautiful, functional, and user-centered digital experiences.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding or designing, you can find me hiking in the mountains, experimenting with photography,
              or enjoying a good book with a cup of coffee.
            </p>

            <div className="pt-4">
              <h4 className="text-xl font-semibold mb-3">Key Highlights</h4>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 px-3 py-1">
                  5+ Years Experience
                </Badge>
                <Badge className="bg-purple-600/20 text-purple-400 hover:bg-purple-600/30 px-3 py-1">
                  50+ Projects Completed
                </Badge>
                <Badge className="bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 px-3 py-1">UI/UX Specialist</Badge>
                <Badge className="bg-purple-600/20 text-purple-400 hover:bg-purple-600/30 px-3 py-1">Remote Work</Badge>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
