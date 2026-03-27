import Link from 'next/link'
import {
  ArrowRight, Package, Truck, Building2,
  ShieldCheck, Clock, HeadphonesIcon, Star, MapPin, CheckCircle2,
} from 'lucide-react'
import AnimateInView from '@/components/AnimateInView'

const services = [
  {
    icon: Package,
    title: 'Local Delivery',
    desc: 'Same-day and next-day delivery within your city. Fast, secure, and affordable.',
    color: 'bg-orange-50 text-orange-500',
  },
  {
    icon: Truck,
    title: 'Intercity Delivery',
    desc: 'Reliable transport between cities across Ghana with real-time tracking.',
    color: 'bg-blue-50 text-blue-500',
  },
  {
    icon: Building2,
    title: 'Business Logistics',
    desc: 'End-to-end supply chain solutions tailored for businesses of all sizes.',
    color: 'bg-green-50 text-green-500',
  },
]

const whyUs = [
  { icon: ShieldCheck, title: 'Safe & Secure', desc: 'Every shipment is insured and handled with care.' },
  { icon: Clock, title: 'On-Time Delivery', desc: '98% of deliveries arrive on schedule.' },
  { icon: HeadphonesIcon, title: '24/7 Support', desc: 'Our team is always here to help you.' },
  { icon: MapPin, title: 'Real-Time Tracking', desc: 'Know exactly where your package is at all times.' },
]

const stats = [
  { value: '50K+', label: 'Deliveries Made' },
  { value: '98%', label: 'On-Time Rate' },
  { value: '200+', label: 'Business Clients' },
  { value: '24/7', label: 'Support Available' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="max-w-3xl">
            <AnimateInView variant="fade-up" delay={0}>
              <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm px-4 py-1.5 rounded-full mb-6">
                <Star size={14} className="fill-orange-400 text-orange-400" />
                Trusted by 200+ businesses nationwide
              </div>
            </AnimateInView>

            <AnimateInView variant="fade-up" delay={100}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                Fast, Reliable
                <span className="text-orange-400"> Logistics</span>
                <br />You Can Count On
              </h1>
            </AnimateInView>

            <AnimateInView variant="fade-up" delay={200}>
              <p className="text-lg text-slate-300 mb-8 max-w-xl">
                From same-day local delivery to nationwide intercity shipping across Ghana — JM Logistics moves your goods safely, on time, every time.
              </p>
            </AnimateInView>

            <AnimateInView variant="fade-up" delay={300}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all hover:scale-105 shadow-lg shadow-orange-500/25"
                >
                  Get a Quote <ArrowRight size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </AnimateInView>

            <AnimateInView variant="fade-up" delay={400}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16">
                {stats.map(({ value, label }) => (
                  <div key={label}>
                    <p className="text-2xl sm:text-3xl font-bold text-orange-400">{value}</p>
                    <p className="text-sm text-slate-400 mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </AnimateInView>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateInView variant="fade-up" className="text-center mb-14">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">What We Offer</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Our Core Services</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">
              Whether you're an individual or a business, we have the right logistics solution for you.
            </p>
          </AnimateInView>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map(({ icon: Icon, title, desc, color }, i) => (
              <AnimateInView key={title} variant="fade-up" delay={i * 120}>
                <div className="group bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className={`${color} w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                  <p className="text-slate-500 leading-relaxed">{desc}</p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 mt-5 text-orange-500 font-medium text-sm hover:gap-2 transition-all"
                  >
                    Learn more <ArrowRight size={16} />
                  </Link>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimateInView variant="fade-right">
                <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">Why JM Logistics</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5">
                  Delivering More Than Packages
                </h2>
                <p className="text-slate-500 leading-relaxed mb-8">
                  We're not just a delivery company — we're your logistics partner. Our team is committed to making every delivery smooth, transparent, and worry-free.
                </p>
              </AnimateInView>
              <AnimateInView variant="fade-right" delay={150}>
                <ul className="space-y-3">
                  {[
                    'Competitive pricing with no hidden fees',
                    'Dedicated account managers for businesses',
                    'Insurance coverage on all shipments',
                    'Flexible pickup and delivery windows',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-700">
                      <CheckCircle2 size={18} className="text-orange-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 mt-8 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
                >
                  About Us <ArrowRight size={16} />
                </Link>
              </AnimateInView>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {whyUs.map(({ icon: Icon, title, desc }, i) => (
                <AnimateInView key={title} variant="zoom" delay={i * 100}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow h-full">
                    <div className="bg-orange-50 w-11 h-11 rounded-xl flex items-center justify-center mb-4">
                      <Icon size={20} className="text-orange-500" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </AnimateInView>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateInView variant="zoom">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Ship With Us?</h2>
            <p className="text-orange-100 text-lg mb-8">
              Get a free quote in minutes and experience stress-free logistics.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-orange-500 hover:bg-orange-50 px-8 py-3.5 rounded-xl font-bold text-base transition-colors"
              >
                Get a Free Quote <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+233200000000"
                className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white px-8 py-3.5 rounded-xl font-bold text-base transition-colors"
              >
                Call Us Now
              </a>
            </div>
          </AnimateInView>
        </div>
      </section>
    </div>
  )
}
