export const metadata = {
  title: 'Sign In - Simple',
  description: 'Page description',
}

import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Hero from '@/components/hero'
import Newsletter from '@/components/newsletter'
import Testimonials from '@/components/testimonials'
import Link from 'next/link'


export default function SignIn() {
  return (
    <>
       <Hero />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <Newsletter />
      </>
  )
}
