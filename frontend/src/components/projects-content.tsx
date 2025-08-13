"use client"

import { motion } from "framer-motion"
import ProjectCard from "./project-card"
import type { Project } from "@/lib/types"
import type { Locale } from "../../i18n-config"

interface ProjectsContentProps {
  dict: any
  projects: Project[]
  locale: Locale
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function ProjectsContent({ dict, projects, locale }: ProjectsContentProps) {
  return (
    <div className="container px-4 md:px-6">
      <motion.div
        className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.div className="space-y-4" variants={itemVariants}>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {dict.header.projects}
          </h2>
          <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {dict.projects.description}
          </p>
        </motion.div>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div key={project.id}>
              <ProjectCard project={project} locale={locale} />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            <div className="py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📁</span>
              </div>
              <p className="text-lg font-medium">{dict.projects.no_projects_found}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
