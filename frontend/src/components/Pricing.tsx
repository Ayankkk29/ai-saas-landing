'use client'

import { motion } from 'framer-motion'
import { Check, Star, Zap } from 'lucide-react'
import { useState } from 'react'

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: 'Starter Plan',
      description: 'Perfect for small teams getting started',
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        'Access to basic AI tools',
        '1 integration',
        'Community support',
        'Limited task runs per month',
        'Basic analytics dashboard',
      ],
      popular: false,
      color: 'bg-green-100 text-green-600',
    },
    {
      name: 'Pro',
      description: 'Most Popular',
      monthlyPrice: 49,
      annualPrice: 490,
      features: [
        'Unlimited tasks & workflows',
        'Advanced AI features',
        'Priority email support',
        'Up to 10 integrations',
        'Customizable dashboards & reporting',
      ],
      popular: true,
      color: 'bg-green-600 text-white',
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        'Tailored AI solutions',
        'Unlimited integrations',
        'Dedicated success manager',
        '24/7 premium support',
        'Custom security & compliance setup',
      ],
      popular: false,
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
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your team—no hidden fees, cancel anytime.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`relative rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'bg-green-500 text-white' : 'bg-white'
              }`}
            >
              <div className="text-center mb-8">
                <div className={`w-12 h-12 ${plan.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <Zap className="w-6 h-6" />
                </div>
                
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                
                <div className="mb-6">
                  <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    ${plan.monthlyPrice}
                  </span>
                  <span className={`ml-2 ${plan.popular ? 'text-green-100' : 'text-gray-600'}`}>
                    /Per Month
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-white text-green-600 hover:bg-gray-100'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  {plan.name === 'Starter Plan' ? 'Start Free Trial' : 
                   plan.name === 'Pro' ? 'Upgrade to Pro' : 'Talk to Sales'}
                </motion.button>
              </div>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-green-500'}`} />
                    <span className={plan.popular ? 'text-white' : 'text-gray-700'}>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Our enterprise team can create a tailored plan that fits your specific needs and scale requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
                >
                  Contact Sales
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
