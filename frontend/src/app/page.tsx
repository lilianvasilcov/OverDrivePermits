import Layout from '@/components/layout/Layout'
import HeroSection from '@/components/hero/HeroSection'
import MapSection from '@/components/map/MapContainer'
import PermitForm from '@/components/form/PermitForm/PermitForm'
import FAQ from '@/components/faq/FAQ'
import StructuredData from '@/components/seo/StructuredData'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'OVERDRIVE PERMITS',
  description: 'Your trusted partner for trucking permits across all 50 US states',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://overdrivepermits.com',
  logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://overdrivepermits.com'}/logo.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    email: 'admin@overdrivepermits.com',
  },
  sameAs: [
    // Add social media links when available
  ],
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Trucking Permit Services',
  provider: {
    '@type': 'Organization',
    name: 'OVERDRIVE PERMITS',
  },
  description: 'Professional permit services for oversized, overweight, and superload cargo transportation across all 50 US states',
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  offers: {
    '@type': 'Offer',
    description: 'Trucking permit procurement and consultation services',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'OVERDRIVE PERMITS',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://overdrivepermits.com',
  description: 'Your trusted partner for trucking permits across all 50 US states',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://overdrivepermits.com'}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

export default function Home() {
  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={serviceSchema} />
      <StructuredData data={websiteSchema} />
      <Layout>
        <HeroSection />
        <MapSection />
        <PermitForm />
        <FAQ />
      </Layout>
    </>
  )
}

