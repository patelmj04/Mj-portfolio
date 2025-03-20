"use client"

import { motion } from "framer-motion"
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaFigma, FaPaintBrush, FaPython, FaJava, FaGitAlt, FaLinux, FaAws, FaMobileAlt, FaRocket, FaCheckCircle, FaUsers, FaFlagUsa, FaLanguage } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiAdobephotoshop, SiAdobepremierepro, SiAdobelightroom, SiOracle, SiFlask } from 'react-icons/si';
import { ReactNode } from 'react';

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML/CSS", icon: <FaHtml5 className="h-6 w-6 text-orange-400" /> },
      { name: "JavaScript", icon: <FaJs className="h-6 w-6 text-yellow-400" /> },
      { name: "React", icon: <FaReact className="h-6 w-6 text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="h-6 w-6 text-black" /> },
      { name: "TypeScript", icon: <SiTypescript className="h-6 w-6 text-blue-600" /> },
    ],
  },
  {
    name: "Design",
    skills: [
      { name: "Figma", icon: <FaFigma className="h-6 w-6 text-pink-400" /> },
      { name: "UI/UX", icon: <FaPaintBrush className="h-6 w-6 text-purple-400" /> },
      { name: "Photoshop", icon: <SiAdobephotoshop className="h-6 w-6 text-blue-600" /> },
      { name: "PremierPro", icon: <SiAdobepremierepro className="h-6 w-6 text-purple-900" /> },
      { name: "Adobe Lightroom", icon: <SiAdobelightroom className="h-6 w-6 text-blue-300" /> },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="h-6 w-6 text-green-400" /> },
      { name: "Python", icon: <FaPython className="h-6 w-6 text-blue-400" /> },
      { name: "Java", icon: <FaJava className="h-6 w-6 text-red-400" /> },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "Oracle", icon: <SiOracle className="h-6 w-6 text-red-600" /> },
      { name: "Flask", icon: <SiFlask className="h-6 w-6 text-green-400" /> },
    ],
  },
  {
    name: "DevOps",
    skills: [
      { name: "Git", icon: <FaGitAlt className="h-6 w-6 text-orange-400" /> },
      { name: "Linux", icon: <FaLinux className="h-6 w-6 text-black" /> },
      { name: "AWS", icon: <FaAws className="h-6 w-6 text-orange-400" /> },
    ],
  },
  {
    name: "Mobile",
    skills: [
      { name: "React Native", icon: <FaReact className="h-6 w-6 text-cyan-400" /> },
      { name: "Responsive Design", icon: <FaMobileAlt className="h-6 w-6 text-purple-400" /> },
    ],
  },
  {
    name: "Other",
    skills: [
      { name: "Performance Optimization", icon: <FaRocket className="h-6 w-6 text-blue-400" /> },
      { name: "Testing", icon: <FaCheckCircle className="h-6 w-6 text-green-400" /> },
      { name: "Agile/Scrum", icon: <FaUsers className="h-6 w-6 text-purple-400" /> },
    ],
  },
  {
    name: "Languages",
    skills: [
      { name: "English", icon: <FaFlagUsa className="h-6 w-6 text-blue-400" /> },
      { name: "Hindi", icon: <FaLanguage className="h-6 w-6 text-orange-400" /> },
      { name: "Gujarati", icon: <FaLanguage className="h-6 w-6 text-green-400" /> },
      { name: "Sanskrit", icon: <FaLanguage className="h-6 w-6 text-brown-400" /> },
    ],
  },
];

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
}

const Marquee = ({ children, speed = 50 }: MarqueeProps) => {
    return (
      <div className="overflow-hidden whitespace-nowrap w-full">
        <motion.div
          animate={{
            x: ["0%", "-50%"], // Start from right edge of screen to left edge
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: speed,
              ease: "linear",
            },
          }}
          className="inline-flex"
        >
          {/* First instance with spacing */}
          <div className="flex items-center space-x-6">{children}</div>
          {/* Second instance with additional spacing */}
          <div className="flex items-center space-x-6 pl-6">{children}</div>
        </motion.div>
      </div>
    );
  };

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-purple-950/10 pointer-events-none"></div>

      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: -60 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">My Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools throughout my career. Here's an overview of my
            technical and creative skills.
          </p>
        </motion.div>

        <Marquee speed={30}>
          <div className="flex gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.name}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300 min-w-[250px]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2">
                      {skill.icon}
                      <span className="text-gray-300">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}