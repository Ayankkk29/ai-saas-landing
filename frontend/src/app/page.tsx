'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Metrics from '@/components/Metrics'
import IndustrySolutions from '@/components/IndustrySolutions'
import Features from '@/components/Features'
import Steps from '@/components/Steps'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import SalesAnalysis from '@/components/SalesAnalysis'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Metrics />
      <IndustrySolutions />
      <Features />
      <Steps />
      <Testimonials />
      <Pricing />
      <SalesAnalysis />
      <Footer />
    </main>
  )
}
