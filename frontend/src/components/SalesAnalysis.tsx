'use client'

import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'

const SalesAnalysis = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-green-400 to-green-600">
      <div className="container-custom">
  <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Automate Your Sales Analysis with AI
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Authenticate, monetize & launch an advanced website on Framer.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-100"
              >
                Start Free Trial
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:text-green-600"
              >
                Book a Demo
              </motion.button>
            </div>
          </motion.div>

          {/* Right side - Status Tracker */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-green-50 rounded-3xl p-12 shadow-2xl border-4 border-green-500 w-full max-w-2xl mx-auto"
            style={{ minHeight: '500px' }}
          >
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-2xl font-bold text-green-700">Sales Analysis</h3>
              <button className="text-lg text-green-600 hover:text-green-700 font-semibold">See All</button>
            </div>
            
            <div className="space-y-8">
              {/* Active User */}
              <div className="flex items-center justify-between p-6 bg-green-100 rounded-xl">
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4 text-xl">
                    TK
                  </div>
                  <div>
                    <div className="font-bold text-green-700 text-lg">Tahsan Khna</div>
                    <div className="text-md text-green-600">UI Designer</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-md text-green-700 font-semibold">Active</span>
                </div>
              </div>

              {/* Offline User */}
              <div className="flex items-center justify-between p-6 bg-green-100 rounded-xl">
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-green-300 rounded-full flex items-center justify-center text-white font-bold mr-4 text-xl">
                    KM
                  </div>
                  <div>
                    <div className="font-bold text-green-700 text-lg">Keliana Mery</div>
                    <div className="text-md text-green-600">Offline</div>
                  </div>
                </div>
                <div className="text-md text-green-700 font-semibold">03m</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SalesAnalysis
