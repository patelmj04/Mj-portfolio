"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

// Sample project data
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with a modern design.",
    image: "/PP.png?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    liveUrl: "https://patelmj.tech/",
    githubUrl: "https://github.com/patelmj04/",
  },
  {
    id: 2,
    title: "WeCreate",
    description: "WeCreate website which showcase my professional work.",
    image: "/wc.png?height=400&width=600",
    tags: ["Next.js", "vercel", "Tailwind CSS", "TypeScript", "HTML"],
    liveUrl: "https://wecreated.studio/",
    githubUrl: "https://github.com/patelmj04/",
  },
  {
    id: 3,
    title: "Proctor.AI",
    description: "An advanced AI-powered tool designed to monitor student behavior during online proctored exams.",
    image: "/ai.png?height=400&width=600",
    tags: ["JavaScript", "Computer Vision", "Python", "OpenCV"],
    liveUrl: "https://github.com/patelmj04/Proctor.AI.git",
    githubUrl: "https://github.com/patelmj04/",
  },  
  {
    id: 4,
    title: "VADET Platform",
    description:
      "An AI-powered system for real-time video monitoring, detecting anomalies, and tracking events.",
    image: "/vadet.png?height=400&width=600",
    tags: ["React", "Next.JS", "Resnet50", "ConvLSTM", "Python3"],
    liveUrl: "https://vadet.vercel.app/",
    githubUrl: "https://github.com/patelmj04/",

    },
  {
    id: 5,
    title: "Brain Tumor Detection System",
    description: "A collaborative task management application with real-time updates and team workspaces.",
    image: "/BT.png?height=400&width=600",
    tags: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://btumor.vercel.app/",
    githubUrl: "https://github.com/patelmj04/",
  },
  {
    id: 6,
  //   title: "Finance Dashboard",
  //   description: "An interactive dashboard for tracking personal finances with data visualization and insights.",
  //   image: "/cashflow.png?height=400&width=600",
  //   tags: ["Data Visualization", "ReactJS", "Vercel"],
  //   liveUrl: "https://cashflow-sigma.vercel.app/",
  //   githubUrl: "https://github.com/patelmj04/CashFlow.git",
  // },
    title: "SonicSync AI",
    description: "An AI-powered tool that analyzes video content to suggest perfectly synchronized, context-aware sounds and music.",
    image: "/sync.png?height=400&width=600",
    tags: ["DL", "Machine Learning", "ReactJS", "Vercel"],
    liveUrl: "https://sonicsync.vercel.app/",
    githubUrl: "https://github.com/patelmj04/",
  },
  {
    id: 7,
    title: "Design Dramatics",
    description: "A personal website to show a designers work.",
    image: "/dd.png?height=400&width=600",
    tags: ["JavaScript"],
    liveUrl: "https://ddramatics.vercel.app/",
    githubUrl: "https://github.com/patelmj04/",
  },  
  {
    id: 8,
    title: "RC Interiors",
     description:" Interior design website showcasing various designs and styles.",
    image: "/rc.png?height=400&width=600",
    tags: ["React",],
    liveUrl: "https://rc-interiors.vercel.app/",
    githubUrl: "https://github.com/patelmj04",
  },
  {
    id: 9,
    title: "IG Social Media Clone",
    description: "A Instagram clone platform which features simmilar user profile and use settings.",
    image: "/ig.png?height=400&width=600",
    tags: ["React", "Vercel", "HTML" , "CSS"],
    liveUrl: "https://ig-profile.vercel.app/patelmj04",
    githubUrl: "https://github.com/patelmj04/",
  },
  {
    id: 10,
    title: "222 Backyard ",
    description: "A vibrant, mobile-friendly website designed to showcase 222 Backyard’s ambiance, menu, events, and make reservations easy for customers.",
    image: "/222.png?height=400&width=600",
    tags: ["React", "Vercel", "HTML" , "CSS"],
    liveUrl: "https://222backyard.vercel.app",
    githubUrl: "https://github.com/patelmj04/",
  },  
  {
    id: 11,
    title: "Monita Patel & Associates ",
    description:"An dynamic website designed to showcase Monita Patel's extraordinary work in the field of Interior Designing.",
    image: "/mp.png?height=400&width=600",
    tags: ["React","UI","Next","JS","CSS"],
    liveUrl: "https://monitapatel.vercel.app/",
    githubUrl: "https://github.com/patelmj04",
  },
  {
    id: 12,
    title: "Rich Bliss",
    description: "Rich Bliss Auto, founded in 2021 by Anmol Kothari, is Nagpur's premier dealership for new and pre-owned luxury cars and superbikes, and Central India's first exclusive showroom of its kind.",
    image: "/rb.png?height=400&width=600",
    tags: ["Tailwind CSS","HTML","CSS","React","Creative Thinking"],
    liveUrl: "https://richbliss.vercel.app/",
    githubUrl: "https://github.com/patelmj04",
  },
  
  {
    id: 13,
    title: "Comming Soon",
    // description: "A collaborative task management application with real-time updates and team workspaces.",
    image: "/cs.webp?height=400&width=600",
    tags: ["Still Working on it"],
    liveUrl: "https://vercel.app/",
    githubUrl: "https://github.com/patelmj04",
  },
  
  {
    id: 14,
    title: "Comming Soon",
    // description: "A collaborative task management application with real-time updates and team workspaces.",
    image: "/cs.webp?height=400&width=600",
    tags: ["Still Working on it"],
    liveUrl: "https://vercel.app/",
    githubUrl: "https://github.com/patelmj04",
  },
  
  {
    id: 15,
    title: "Comming Soon",
    // description: "A collaborative task management application with real-time updates and team workspaces.",
    image: "/cs.webp?height=400&width=600",
    tags: ["Still Working on it"],
    liveUrl: "https://vercel.app/",
    githubUrl: "https://github.com/patelmj04",
  },
  
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 bg-black relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 via-black to-black pointer-events-none"></div>

      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: -65 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project is a unique piece of development that showcases my skills
            and passion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="h-full"
            >
              <Card className="bg-gray-900/50 border-gray-800 overflow-hidden h-full backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out"
                    style={{
                      transform: hoveredId === project.id ? "scale(1.05)" : "scale(1)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-gray-300 text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full bg-blue-900/30 text-blue-400">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-purple-400 hover:text-purple-300 hover:bg-purple-900/20 gap-1"
                      asChild
                    >
                      <Link href={project.liveUrl}>
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-400 hover:text-blue-300 hover:bg-blue-900/20 gap-1"
                      asChild
                    >
                      <Link href={project.githubUrl}>
                        <Github size={16} />
                        <span>Code</span>
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

