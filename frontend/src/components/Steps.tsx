'use client'

import { motion } from 'framer-motion'
import { UserPlus, Settings, Rocket, ArrowRight } from 'lucide-react'

const Steps = () => {
  const steps = [
    {
      number: 1,
      icon: UserPlus,
      title: 'Sign Up & Connect Your Tools',
      description: 'Integrate with your existing apps like Slack, Google Workspace, CRM, or project tools—no coding required.',
      details: 'Tell us about you - Some basic details to get started',
      formExample: {
        email: 'alvy@gmail.com',
        firstName: 'Alvy',
        lastName: 'Hossain'
      },
      color: 'bg-green-100 text-green-600',
    },
    {
      number: 2,
      icon: Settings,
      title: 'Customize Workflows with AI',
      description: 'Personalize automation flows for your team\'s exact needs.',
      details: 'AI-powered workflow customization',
      integrationIcons: ['Google', 'Slack', 'Gear', 'Apple', 'Star', 'Network'],
      color: 'bg-green-100 text-green-600',
    },
    {
      number: 3,
      icon: Rocket,
      title: 'Launch Automation & Watch Results',
      description: 'Track performance in real-time dashboards and measure productivity gains.',
      details: 'Real-time performance tracking',
      chartData: {
        value: '$415',
        segments: [
          { label: '14%', color: 'bg-green-500' },
          { label: '11%', color: 'bg-green-400' },
          { label: '25%', color: 'bg-green-300' },
          { label: '28%', color: 'bg-green-200' },
          { label: '22%', color: 'bg-gray-200' },
        ]
      },
      color: 'bg-green-100 text-green-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Started in 3 Easy Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No steep learning curve—just connect, customize, and let AI do the work.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Step number badge */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 ${step.color} rounded-xl flex items-center justify-center mb-6`}>
                <step.icon className="w-8 h-8" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {step.description}
              </p>

              {/* Step-specific content */}
              {step.number === 1 && step.formExample && (
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="text-sm text-gray-600 mb-3">{step.details}</div>
                  <div className="space-y-2">
                    <div className="bg-white rounded border p-2 text-sm">
                      {step.formExample.email}
                    </div>
                    <div className="flex space-x-2">
                      <div className="bg-white rounded border p-2 text-sm flex-1">
                        {step.formExample.firstName}
                      </div>
                      <div className="bg-white rounded border p-2 text-sm flex-1">
                        {step.formExample.lastName}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step.number === 2 && (
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div className="text-sm text-gray-600 mb-4 text-center">{step.details}</div>
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                      AI
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {step.integrationIcons?.map((icon, i) => (
                      <div key={i} className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center text-xs">
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {step.number === 3 && (
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div className="text-sm text-gray-600 mb-4 text-center">{step.details}</div>
                  <div className="flex justify-center mb-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">{step.chartData?.value}</div>
                      <div className="text-sm text-gray-500">Monthly Savings</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {step.chartData?.segments.map((segment, i) => (
                      <div key={i} className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          <div className={`w-3 h-3 rounded-full ${segment.color} mr-2`}></div>
                          <span className="text-gray-600">Productivity Gain</span>
                        </div>
                        <span className="font-semibold text-gray-900">{segment.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Steps
