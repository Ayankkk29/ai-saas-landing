'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Star, Users, Zap } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-100 rounded-3xl rotate-45 opacity-20 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-green-200 rounded-2xl rotate-12 opacity-25 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-green-300 rounded-full opacity-30 animate-pulse" style={{animationDelay: '2.5s'}}></div>
      </div>

      <div className="container-custom relative z-10 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 w-full max-w-4xl text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mx-auto"
          >
            <span>Your All-in-One AI SaaS Platform</span>
          </motion.div>

          {/* Main heading - expanded, black for AI-Powered Automation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight text-gray-800 mb-6"
            style={{ letterSpacing: '-0.03em' }}
          >
            Supercharge Your Business with <span className="text-black">AI-Powered Automation</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            Our AI SaaS platform helps teams save time, cut costs, and unlock smarter decision-making—without complexity.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-green flex items-center space-x-2 group"
            >
              <span>Start Free Trial</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center space-x-2 group"
            >
              <span>Book a Demo</span>
            </motion.button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default Hero
