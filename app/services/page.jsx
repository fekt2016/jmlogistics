import Link from 'next/link'
import {
  Package, Truck, Building2, CheckCircle2, ArrowRight,
  Clock, MapPin, ShieldCheck, Zap,
} from 'lucide-react'
import AnimateInView from '@/components/AnimateInView'

export const metadata = {
  title: 'Services — JM Logistics',
  description: 'Local delivery, intercity shipping, and business logistics solutions across Ghana.',
}

const services = [
  {
    id: 'local',
    icon: Package,
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    badge: 'bg-orange-100 text-orange-700',
    title: 'Local Delivery',
    tagline: 'Fast delivery within your city',
    description:
      "Our local delivery service is designed for speed and convenience. Whether it's documents, parcels, or goods — we pick up from your door and deliver the same day or next day within your city.",
    benefits: [
      'Same-day delivery available',
      'Real-time tracking via WhatsApp',
      'Door-to-door pickup and drop-off',
      'Affordable flat-rate pricing',
      'Secure handling for fragile items',
    ],
    useCases: [
      { icon: Zap, label: 'Urgent documents and legal papers' },
      { icon: Package, label: 'E-commerce order fulfillment' },
      { icon: ShieldCheck, label: 'Fragile or high-value items' },
      { icon: Clock, label: 'Grocery and food deliveries' },
    ],
  },
  {
    id: 'intercity',
    icon: Truck,
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    badge: 'bg-blue-100 text-blue-700',
    title: 'Intercity Delivery',
    tagline: 'Connecting cities nationwide',
    description:
      'Move goods between cities safely and efficiently. Our intercity service covers all major routes across Ghana with regular dispatch schedules and reliable transit times.',
    benefits: [
      'Coverage across all major cities',
      'Scheduled dispatches (morning & evening)',
      'Full shipment tracking',
      'Bulk and oversized shipments accepted',
      'Insurance on all intercity orders',
    ],
    useCases: [
      { icon: Truck, label: 'Business stock replenishment' },
      { icon: Building2, label: 'Corporate document transfer' },
      { icon: Package, label: 'Online store nationwide shipping' },
      { icon: MapPin, label: 'Personal relocation parcels' },
    ],
  },
  {
    id: 'business',
    icon: Building2,
    color: 'text-green-500',
    bg: 'bg-green-50',
    badge: 'bg-green-100 text-green-700',
    title: 'Business Logistics',
    tagline: 'End-to-end supply chain management',
    description:
      'Tailored logistics solutions for businesses of all sizes. From warehousing support to last-mile delivery, we become an extension of your operations — so you can focus on growing.',
    benefits: [
      'Dedicated account manager',
      'Custom SLA and pricing',
      'Bulk shipping discounts',
      'API integration for order management',
      'Monthly analytics & performance reports',
    ],
    useCases: [
      { icon: Building2, label: 'Retail chain distribution' },
      { icon: ShieldCheck, label: 'Pharmaceutical supply chains' },
      { icon: Zap, label: 'FMCG product distribution' },
      { icon: Truck, label: 'Manufacturing parts logistics' },
    ],
  },
]

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-slate-900 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateInView variant="fade-up" delay={0}>
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-3">What We Do</p>
          </AnimateInView>
          <AnimateInView variant="fade-up" delay={100}>
            <h1 className="text-4xl sm:text-5xl font-bold mb-5">Our Services</h1>
          </AnimateInView>
          <AnimateInView variant="fade-up" delay={200}>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              From urgent same-day deliveries to complex business logistics — we have the expertise and infrastructure to handle it all.
            </p>
          </AnimateInView>
        </div>
      </section>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
          {services.map(({ id, icon: Icon, color, bg, badge, title, tagline, description, benefits, useCases }, idx) => (
            <div
              key={id}
              id={id}
              className={`grid lg:grid-cols-2 gap-12 items-start ${idx % 2 === 1 ? 'lg:flex lg:flex-row-reverse' : ''}`}
            >
              {/* Content */}
              <AnimateInView variant={idx % 2 === 0 ? 'fade-right' : 'fade-left'} threshold={0.1}>
                <span className={`inline-block ${badge} text-xs font-semibold px-3 py-1 rounded-full mb-4`}>
                  {tagline}
                </span>
                <div className={`${bg} w-14 h-14 rounded-2xl flex items-center justify-center mb-5`}>
                  <Icon size={28} className={color} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{title}</h2>
                <p className="text-slate-500 leading-relaxed mb-8">{description}</p>

                <h3 className="font-bold text-slate-900 mb-4">Key Benefits</h3>
                <ul className="space-y-2.5">
                  {benefits.map((b, i) => (
                    <li key={b} className="flex items-start gap-3 text-slate-600 text-sm">
                      <CheckCircle2 size={17} className="text-orange-500 mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-8 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
                >
                  Get a Quote <ArrowRight size={16} />
                </Link>
              </AnimateInView>

              {/* Use cases */}
              <AnimateInView variant={idx % 2 === 0 ? 'fade-left' : 'fade-right'} delay={150} threshold={0.1}>
                <div className={`${bg} rounded-3xl p-8 lg:p-10`}>
                  <h3 className="font-bold text-slate-900 mb-6 text-lg">Common Use Cases</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {useCases.map(({ icon: UIcon, label }, i) => (
                      <AnimateInView key={label} variant="zoom" delay={i * 80}>
                        <div className="bg-white rounded-2xl p-5 shadow-sm flex items-start gap-3 h-full">
                          <div className={`${bg} p-2 rounded-lg shrink-0`}>
                            <UIcon size={18} className={color} />
                          </div>
                          <p className="text-sm font-medium text-slate-700 leading-snug">{label}</p>
                        </div>
                      </AnimateInView>
                    ))}
                  </div>
                  <div className="mt-8 border-t border-white/60 pt-6">
                    <p className="text-sm text-slate-500">
                      Not sure which service fits your needs?{' '}
                      <Link href="/contact" className="text-orange-500 font-semibold hover:underline">
                        Talk to us →
                      </Link>
                    </p>
                  </div>
                </div>
              </AnimateInView>
            </div>
          ))}
        </div>
      </div>

      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateInView variant="zoom">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-slate-400 mb-8">Contact us today for a free quote tailored to your delivery needs.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-xl font-bold transition-colors"
            >
              Contact Us Today <ArrowRight size={18} />
            </Link>
          </AnimateInView>
        </div>
      </section>
    </div>
  )
}
