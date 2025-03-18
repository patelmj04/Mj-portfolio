"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Database, Globe, Palette, Server, Terminal, Smartphone, Layers } from "lucide-react"

// Skill categories with their respective skills
const skillCategories = [
  {
    name: "Frontend",
    icon: <Code className="h-6 w-6 text-blue-400" />,
    skills: [
      { name: "HTML/CSS", level: 65 },
      { name: "JavaScript", level: 50 },
      { name: "React", level: 75 },
      { name: "Next.js", level: 60 },
      { name: "TypeScript", level: 55 },
    ],
  },
  {
    name: "Backend",
    icon: <Server className="h-6 w-6 text-purple-400" />,
    skills: [
      { name: "Node.js", level: 35 },
      { name: "Express", level: 0 },
      { name: "Python", level: 50 },
      { name: "PHP", level: 0 },
      { name: "Java", level: 60 },
    ],
  },
  {
    name: "Database",
    icon: <Database className="h-6 w-6 text-blue-400" />,
    skills: [
      { name: "Oracle", level: 60 },
      { name: "MongoDB", level: 0 },
      { name: "MySQL", level: 0 },
      { name: "PostgreSQL", level: 0 },
      { name: "Firebase", level: 0 },
    ],
  },
  {
    name: "Design",
    icon: <Palette className="h-6 w-6 text-purple-400" />,
    skills: [
      { name: "Figma", level: 90 },
      { name: "UI/UX", level: 85 },
      { name: "Photoshop", level: 80 },
      { name: "Illustrator", level: 50 },
      { name: "Adobe XD", level: 25 },
    ],
  },
  {
    name: "DevOps",
    icon: <Terminal className="h-6 w-6 text-blue-400" />,
    skills: [
      { name: "Git", level: 60 },
      { name: "Linux", level: 50 },
      { name: "AWS", level: 40 },
      { name: "Docker", level: 0 },
      { name: "CI/CD", level: 0 },
    ],
  },
  {
    name: "Mobile",
    icon: <Smartphone className="h-6 w-6 text-purple-400" />,
    skills: [
      { name: "React Native", level: 50 },
      { name: "Flutter", level: 20 },
      { name: "Swift", level: 0 },
      { name: "Kotlin", level: 0 },
      { name: "Responsive Design", level: 0 },
    ],
  },
  {
    name: "Other",
    icon: <Layers className="h-6 w-6 text-blue-400" />,
    skills: [
      { name: "Performance Optimization", level: 60 },
      { name: "Testing", level: 60 },
      { name: "GraphQL", level: 0 },
      { name: "REST API", level: 0 },
      { name: "Agile/Scrum", level: 0 },
    ],
  },
  {
    name: "Languages",
    icon: <Globe className="h-6 w-6 text-purple-400" />,
    skills: [
      { name: "English", level: 90 },
      { name: "Hindi", level: 80 },
      { name: "Gujarati", level: 80 },
      { name: "Sanskrit", level: 60 },
      { name: "Germany", level: 10 },
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20 bg-black relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-purple-950/10 pointer-events-none"></div>

      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: -50 } : { opacity: 1, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools throughout my career. Here's an overview of my
            technical and creative skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-lg font-semibold text-white">{category.name}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className={`h-full rounded-full ${
                          categoryIndex % 2 === 0
                            ? "bg-gradient-to-r from-blue-600 to-blue-400"
                            : "bg-gradient-to-r from-purple-600 to-purple-400"
                        }`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

