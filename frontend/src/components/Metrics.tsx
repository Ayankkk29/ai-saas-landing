'use client'

import { motion } from 'framer-motion'
import { RefreshCw, DollarSign, Globe, TrendingUp, BarChart3 } from 'lucide-react'

const Metrics = () => {
  const metrics = [
    {
      icon: RefreshCw,
      title: 'Daily AI Tasks Automated',
      value: '12,500',
      change: '+42%',
      description: 'AI optimization reducing expenses for clients',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: DollarSign,
      title: 'Cost Savings Generated',
      value: '$480,000',
      description: 'AI optimization reducing expenses for clients',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: BarChart3,
      title: 'Sales Analysis',
      value: '$480,000',
      period: 'July 2024',
      description: 'Monthly sales performance',
      color: 'bg-green-100 text-green-600',
      isChart: true,
    },
    {
      icon: Globe,
      title: 'Global Users',
      value: '150K+',
      description: 'Across 40+ countries',
      color: 'bg-green-600 text-white',
      isDark: true,
    },
    {
      icon: TrendingUp,
      title: 'AI-Powered Predictions',
      value: '98%',
      description: 'Validated with real customer data',
      color: 'bg-green-100 text-green-600',
    },
  ]

  const additionalStats = [
    '500+ Companies Trust Us',
    '99.9% Uptime SLA',
    '50M+ Tasks Automated',
    '4.9 ★ Companies Trust Us',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="py-16 bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                metric.isDark ? 'bg-green-600 text-white' : 'bg-white'
              }`}
            >
              <div className={`w-12 h-12 ${metric.color} rounded-xl flex items-center justify-center mb-4`}>
                <metric.icon className="w-6 h-6" />
              </div>
              
              <h3 className={`text-lg font-semibold mb-2 ${metric.isDark ? 'text-white' : 'text-gray-900'}`}>
                {metric.title}
              </h3>
              
              <div className="flex items-baseline mb-2">
                <span className={`text-3xl font-bold ${metric.isDark ? 'text-white' : 'text-gray-900'}`}>
                  {metric.value}
                </span>
                {metric.change && (
                  <span className="ml-2 text-sm text-green-600 font-medium">
                    {metric.change}
                  </span>
                )}
              </div>
              
              {metric.period && (
                <p className={`text-sm mb-2 ${metric.isDark ? 'text-green-100' : 'text-gray-600'}`}>
                  {metric.period}
                </p>
              )}
              
              <p className={`text-sm ${metric.isDark ? 'text-green-100' : 'text-gray-600'}`}>
                {metric.description}
              </p>

              {metric.isChart && (
                <div className="mt-4">
                  <div className="flex items-end space-x-2 h-16">
                    {['Jan', 'Feb', 'Mar', 'Apr'].map((month, i) => (
                      <div key={month} className="flex flex-col items-center">
                        <div
                          className={`w-8 rounded-t ${
                            month === 'Apr' ? 'bg-green-600 h-12' : 'bg-green-100 h-8'
                          }`}
                        ></div>
                        <span className="text-xs text-gray-600 mt-1">{month}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-600"
        >
          {additionalStats.map((stat, index) => (
            <div key={index} className="flex items-center">
              {stat.includes('★') && <span className="text-yellow-400 mr-1">★</span>}
              {stat}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Metrics
