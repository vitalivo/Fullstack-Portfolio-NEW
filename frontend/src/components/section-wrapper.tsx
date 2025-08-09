"use client"

import { motion } from "framer-motion"
import type React from "react"

interface SectionWrapperProps {
  children: React.ReactNode
  id: string
  className?: string
  delay?: number // Задержка для анимации секции
}

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren", // Анимировать родителя перед дочерними элементами
      staggerChildren: 0.1, // Задержка между анимациями дочерних элементов
    },
  },
}

export default function SectionWrapper({ children, id, className, delay = 0 }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={className}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Анимировать один раз, когда 20% секции видно
      transition={{ delay }}
    >
      {children}
    </motion.section>
  )
}
