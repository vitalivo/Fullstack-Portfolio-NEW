"use client"

import { motion } from "framer-motion"
import CertificateCard from "./certificate-card"
import type { Certificate } from "@/lib/types"
import type { Locale } from "../../i18n-config"

interface CertificatesContentProps {
  dict: any
  certificates: Certificate[]
  locale: Locale
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function CertificatesContent({ dict, certificates, locale }: CertificatesContentProps) {
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
            {dict.header.certificates}
          </h2>
          <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {dict.certificates.description}
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {certificates.length > 0 ? (
          certificates.map((certificate) => (
            <motion.div key={certificate.id} variants={itemVariants}>
              <CertificateCard certificate={certificate} locale={locale} />
            </motion.div>
          ))
        ) : (
          <motion.div className="col-span-full text-center text-gray-500" variants={itemVariants}>
            <div className="py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <p className="text-lg font-medium">{dict.certificates.no_certificates_found}</p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
