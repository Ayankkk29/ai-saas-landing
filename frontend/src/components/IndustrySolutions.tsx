'use client'

import { motion } from 'framer-motion'
import { ChevronDown, ShoppingBag, CreditCard, Heart, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const IndustrySolutions = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const industries = [
    {
      id: 1,
      name: 'Retail',
      icon: ShoppingBag,
      shortDescription: 'Personalized customer experiences',
      fullDescription: 'Transform your retail operations with AI-powered personalization, inventory optimization, and customer behavior analysis. Increase sales and customer satisfaction.',
      benefits: [
        'Personalized product recommendations',
        'Dynamic pricing optimization',
        'Inventory management automation',
        'Customer behavior analytics',
        'Omnichannel experience enhancement'
      ],
      color: 'bg-green-100 text-green-600',
    },
    {
      id: 2,
      name: 'Finance',
      icon: CreditCard,
      shortDescription: 'Fraud detection & smart predictions',
      fullDescription: 'Secure your financial operations with advanced AI algorithms for fraud detection, risk assessment, and automated compliance monitoring.',
      benefits: [
        'Real-time fraud detection',
        'Risk assessment automation',
        'Compliance monitoring',
        'Algorithmic trading insights',
        'Customer credit scoring'
      ],
      color: 'bg-green-100 text-green-600',
    },
    {
      id: 3,
      name: 'Healthcare',
      icon: Heart,
      shortDescription: 'Faster diagnosis & workflow efficiency',
      fullDescription: 'Enhance patient care with AI-driven diagnostic tools, treatment optimization, and streamlined healthcare workflows.',
      benefits: [
        'Medical image analysis',
        'Treatment recommendation',
        'Patient data management',
        'Drug interaction checking',
        'Appointment scheduling optimization'
      ],
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
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transforming Every Industry with
            <span className="text-green-600"> Smarter AI Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From retail to healthcare, our AI adapts to diverse industries—helping businesses scale smarter, faster, and with precision.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-4"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div
                className="p-6 cursor-pointer"
                onClick={() => setExpandedCard(expandedCard === industry.id ? null : industry.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${industry.color} rounded-xl flex items-center justify-center`}>
                      <industry.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {industry.name} →
                      </h3>
                      <p className="text-gray-600">
                        {industry.shortDescription}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedCard === industry.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  </motion.div>
                </div>
              </div>

              <motion.div
                initial={false}
                animate={{
                  height: expandedCard === industry.id ? 'auto' : 0,
                  opacity: expandedCard === industry.id ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="pt-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {industry.fullDescription}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      {industry.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default IndustrySolutions
