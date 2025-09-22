'use client'

import { motion } from 'framer-motion'
import { Zap, TrendingUp, Shield, ArrowRight } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'Automated Task Management',
      description: 'Eliminate manual work with intelligent automation. Save time on routine tasks so your team can focus on innovation and growth.',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Identify trends, forecast outcomes, and optimize performance using data-driven AI predictions that adapt as your business evolves.',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Shield,
      title: 'Keep your data safe and compliant.',
      description: 'End-to-end encryption, role-based access, and industry-standard compliance ensure your organization\'s data remains fully protected.',
      color: 'bg-green-100 text-green-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center text-green-600 font-medium group-hover:text-green-700 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Right side - Dashboard Illustration */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Welcome Back! Tahsan</h3>
              
              {/* Mini cards */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-sm text-gray-600">Worked This Week</div>
                  <div className="text-lg font-bold text-gray-900">8:26:44</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-sm text-gray-600">Earned This Week</div>
                  <div className="text-lg font-bold text-gray-900">$4,647</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-sm text-gray-600">Project Worked</div>
                  <div className="text-lg font-bold text-gray-900">435</div>
                </div>
              </div>

              {/* Chart area */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-2">This Month</div>
                <div className="h-32 bg-white rounded border flex items-end justify-between px-4 py-2">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, i) => (
                    <div key={month} className="flex flex-col items-center">
                      <div className={`w-2 rounded-t ${i === 6 ? 'bg-green-500 h-20' : 'bg-gray-200 h-8'}`}></div>
                      <span className="text-xs text-gray-500 mt-1">{month}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status sections */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm font-medium text-gray-900">Status Tracker</div>
                  <div className="text-xs text-gray-600 mt-1">See All</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm font-medium text-gray-900">Time Tracker</div>
                  <div className="text-xs text-gray-600 mt-1">Active</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

export default Features
