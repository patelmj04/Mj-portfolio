// "use client"

// import { motion } from "framer-motion"
// import { useInView } from "react-intersection-observer"
// import { Code, Database, Globe, Palette, Server, Terminal, Smartphone, Layers } from "lucide-react"
// import { FaHtml5, FaJs, FaReact, FaNodeJs, FaFigma, FaPaintBrush, FaServer, FaPython, FaPhp, FaJava, FaGitAlt, FaLinux, FaAws, FaDocker, FaCogs, FaMobileAlt, FaRocket, FaCheckCircle, FaExchangeAlt, FaUsers, FaFlagUsa, FaLanguage, FaFlag } from 'react-icons/fa';
// import { SiNextdotjs, SiTypescript, SiAdobephotoshop, SiAdobeillustrator, SiAdobexd, SiOracle, SiMongodb, SiMysql, SiPostgresql, SiFirebase, SiFlutter, SiSwift, SiKotlin, SiGraphql, SiAdobepremierepro, SiAdobelightroom, SiFlask } from 'react-icons/si';

// const skillCategories = [
//   {
//     name: "Frontend",
//     // icon: <Code className="h-6 w-6 text-blue-400" />,
//     skills: [
//       { name: "HTML/CSS", icon: <FaHtml5 className="h-6 w-6 text-orange-400" /> },
//       { name: "JavaScript", icon: <FaJs className="h-6 w-6 text-yellow-400" /> },
//       { name: "React", icon: <FaReact className="h-6 w-6 text-cyan-400" /> },
//       { name: "Next.js", icon: <SiNextdotjs className="h-6 w-6 text-black" /> },
//       { name: "TypeScript", icon: <SiTypescript className="h-6 w-6 text-blue-600" /> },
//     ],
//   },
//   {
//     name: "Design",
//     // icon: <Palette className="h-6 w-6 text-purple-400" />,
//     skills: [
//       { name: "Figma", icon: <FaFigma className="h-6 w-6 text-pink-400" /> },
//       { name: "UI/UX", icon: <FaPaintBrush className="h-6 w-6 text-purple-400" /> },
//       { name: "Photoshop", icon: <SiAdobephotoshop className="h-6 w-6 text-blue-600" /> },
//       { name: "PremierPro", icon: <SiAdobepremierepro className="h-6 w-6 text-purple-900" /> },
//       { name: "Adobe Lightroom", icon: <SiAdobelightroom className="h-6 w-6 text-blue-300" /> },
//     ],
//   },
//   {
//     name: "Backend",
//     // icon: <Server className="h-6 w-6 text-blue-400" />,
//     skills: [
//       { name: "Node.js", icon: <FaNodeJs className="h-6 w-6 text-green-400" /> },
//       // { name: "Express", icon: <FaServer className="h-6 w-6 text-gray-400" /> },
//       { name: "Python", icon: <FaPython className="h-6 w-6 text-blue-400" /> },
//       // { name: "PHP", icon: <FaPhp className="h-6 w-6 text-indigo-400" /> },
//       { name: "Java", icon: <FaJava className="h-6 w-6 text-red-400" /> },
//     ],
//   },
//   {
//     name: "Database",
//     // icon: <Database className="h-6 w-6 text-purple-400" />,
//     skills: [
//       { name: "Oracle", icon: <SiOracle className="h-6 w-6 text-red-600" /> },
//       { name: "Flask", icon: <SiFlask className="h-6 w-6 text-green-400" /> },
//       // { name: "MongoDB", icon: <SiMongodb className="h-6 w-6 text-green-400" /> },
//       // { name: "MySQL", icon: <SiMysql className="h-6 w-6 text-blue-400" /> },
//       // { name: "PostgreSQL", icon: <SiPostgresql className="h-6 w-6 text-blue-600" /> },
//       // { name: "Firebase", icon: <SiFirebase className="h-6 w-6 text-yellow-400" /> },
//     ],
//   },
//   {
//     name: "DevOps",
//     // icon: <Terminal className="h-6 w-6 text-blue-400" />,
//     skills: [
//       { name: "Git", icon: <FaGitAlt className="h-6 w-6 text-orange-400" /> },
//       { name: "Linux", icon: <FaLinux className="h-6 w-6 text-black" /> },
//       { name: "AWS", icon: <FaAws className="h-6 w-6 text-orange-400" /> },
//       // { name: "Docker", icon: <FaDocker className="h-6 w-6 text-blue-400" /> },
//       // { name: "CI/CD", icon: <FaCogs className="h-6 w-6 text-gray-400" /> },
//     ],
//   },
//   {
//     name: "Mobile",
//     // icon: <Smartphone className="h-6 w-6 text-purple-400" />,
//     skills: [
//       { name: "React Native", icon: <FaReact className="h-6 w-6 text-cyan-400" /> },
//       // { name: "Flutter", icon: <SiFlutter className="h-6 w-6 text-blue-400" /> },
//       // { name: "Swift", icon: <SiSwift className="h-6 w-6 text-orange-400" /> },
//       // { name: "Kotlin", icon: <SiKotlin className="h-6 w-6 text-purple-400" /> },
//       { name: "Responsive Design", icon: <FaMobileAlt className="h-6 w-6 text-purple-400" /> },
//     ],
//   },
//   {
//     name: "Other",
//     // icon: <Layers className="h-6 w-6 text-blue-400" />,
//     skills: [
//       { name: "Performance Optimization", icon: <FaRocket className="h-6 w-6 text-blue-400" /> },
//       { name: "Testing", icon: <FaCheckCircle className="h-6 w-6 text-green-400" /> },
//       // { name: "GraphQL", icon: <SiGraphql className="h-6 w-6 text-pink-400" /> },
//       // { name: "REST API", icon: <FaExchangeAlt className="h-6 w-6 text-blue-400" /> },
//       { name: "Agile/Scrum", icon: <FaUsers className="h-6 w-6 text-purple-400" /> },
//     ],
//   },
//   {
//     name: "Languages",
//     // icon: <Globe className="h-6 w-6 text-purple-400" />,
//     skills: [
//       { name: "English", icon: <FaFlagUsa className="h-6 w-6 text-blue-400" /> },
//       { name: "Hindi", icon: <FaLanguage className="h-6 w-6 text-orange-400" /> },
//       { name: "Gujarati", icon: <FaLanguage className="h-6 w-6 text-green-400" /> },
//       { name: "Sanskrit", icon: <FaLanguage className="h-6 w-6 text-brown-400" /> },
//       // { name: "German", icon: <FaFlag className="h-6 w-6 text-black" /> }, // Corrected "Germany" to "German"
//     ],
//   },
// ];

// export default function Skills() {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   })

//   return (
//     <section id="skills" className="py-20 bg-black relative">
//       {/* Subtle gradient background */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-purple-950/10 pointer-events-none"></div>

//       <div className="container px-4 md:px-6 mx-auto">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: -50 } : { opacity: 1, y: 20 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
//           <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
//           <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
//             I've worked with a variety of technologies and tools throughout my career. Here's an overview of my
//             technical and creative skills.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {skillCategories.map((category, categoryIndex) => (
//             <motion.div
//               key={category.name}
//               ref={ref}
//               initial={{ opacity: 0, y: 30 }}
//               animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//               transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
//               className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300"
//             >
//               <div className="flex items-center gap-3 mb-4">
//                 {category.icon}
//                 <h3 className="text-lg font-semibold text-white">{category.name}</h3>
//               </div>

//               <div className="space-y-4">
//                 {category.skills.map((skill) => (
//                   <div key={skill.name} className="flex items-center gap-2">
//                     {skill.icon}
//                     <span className="text-gray-300">{skill.name}</span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }