import { createElement } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Truck, Building2, Globe,
  ShieldCheck, Clock, HeadphonesIcon, Star, MapPin, CheckCircle2, AlertTriangle,
} from 'lucide-react'
import AnimateInView from '@/components/AnimateInView'
import { homeProhibitedPreviewImages } from '@/constants/prohibitedImages'
import {
  HOME_HERO_LEAD,
  US_DELIVERY_COVERAGE_BULLETS,
  US_DELIVERY_SUMMARY,
} from '@/constants/shippingCoverage'

const services = [
  {
    icon: Globe,
    title: 'Ghana → USA shipping',
    desc: 'International shipment from Ghana to the United States, with included US delivery in all New York cities and Newark, NJ. Other US states — we quote add-on delivery before you ship.',
    color: 'bg-indigo-50 text-indigo-500',
    learnMoreTo: '/services#ghana-usa',
  },
  {
    icon: Truck,
    title: 'Ghana local & intercity',
    desc: 'Same-day and next-day delivery in your city, plus dependable routes between major cities across Ghana — for individuals, families, and retailers.',
    color: 'bg-orange-50 text-orange-500',
    learnMoreTo: '/services#local',
  },
  {
    icon: Building2,
    title: 'Business logistics',
    desc: 'Volume to the USA, recurring Ghana moves, and tailored support so your team always knows cost, cut-off times, and where freight sits.',
    color: 'bg-green-50 text-green-500',
    learnMoreTo: '/services#business',
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

const WHATSAPP_NUMBER = '233200000000'
const SHIP_MESSAGE = encodeURIComponent(
  'Hello JM Logistics, I want to ship an item from Ghana.',
)

const coverage = US_DELIVERY_COVERAGE_BULLETS

const priceCards = [
  { label: 'Standard package', amount: 'GHS 159', note: 'Per 1kg (all packages)' },
  { label: 'Passport / documents', amount: 'GHS 1,200', note: 'Flat charge' },
  { label: 'ID card shipment', amount: 'GHS 1,000', note: 'Flat charge' },
]

const prohibitedPreview = [
  'Garlic',
  'Sachet garlic',
  'Garlic powder',
  'Shito with meat',
  'Benylin codeine',
  'Marijuana / weed',
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-500 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="max-w-3xl">
            <div
              className="hero-text-reveal inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 ring-1 ring-green-500/25 text-orange-200 text-sm px-4 py-1.5 rounded-full mb-6"
              style={{ animationDelay: '0.06s' }}
            >
              <Star size={14} className="fill-green-400 text-green-400" />
              Trusted by 200+ businesses nationwide
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span
                className="hero-text-reveal inline-block"
                style={{ animationDelay: '0.14s' }}
              >
                Fast, Reliable
              </span>
              <span className="hero-text-reveal inline-block" style={{ animationDelay: '0.26s' }}>
                {' '}
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-green-400 hero-bounce-infinite">
                  Logistics
                </span>
              </span>
              <br />
              <span className="hero-text-reveal inline-block mt-1" style={{ animationDelay: '0.4s' }}>
                <span className="hero-bounce-infinite hero-bounce-infinite--late inline-block">
                  You Can Count On
                </span>
              </span>
            </h1>

            <p
              className="hero-text-reveal text-lg text-slate-300 mb-8 max-w-xl"
              style={{ animationDelay: '0.48s' }}
            >
              {HOME_HERO_LEAD}
            </p>

            <div
              className="hero-text-reveal flex flex-wrap gap-4"
              style={{ animationDelay: '0.58s' }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all hover:scale-105 shadow-lg shadow-orange-500/25"
              >
                Get a Quote <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all"
              >
                Contact Us
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16">
              {stats.map(({ value, label }, i) => (
                <div key={label}>
                  <p
                    className="hero-text-bounce text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-green-300"
                    style={{ animationDelay: `${0.68 + i * 0.08}s` }}
                  >
                    {value}
                  </p>
                  <p
                    className="hero-text-reveal text-sm text-slate-400 mt-0.5"
                    style={{ animationDelay: `${0.74 + i * 0.08}s` }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateInView variant="fade-up" className="text-center mb-14">
            <p className="font-semibold text-sm uppercase tracking-wider mb-2">
              <span className="text-orange-500">What we</span>
              <span className="text-slate-400 mx-2" aria-hidden="true">
                ·
              </span>
              <span className="text-green-600">Offer</span>
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Our Core Services</h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re an individual or a business, we have the right
              logistics solution for you — from Ghana to the USA (with clear US
              delivery zones) to local and intercity moves across Ghana.
            </p>
          </AnimateInView>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <AnimateInView key={svc.title} variant="fade-up" delay={i * 120}>
                <div className="group bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className={`${svc.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    {createElement(svc.icon, { size: 26 })}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{svc.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{svc.desc}</p>
                  <Link
                    to={svc.learnMoreTo ?? '/services'}
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

      {/* Coverage and pricing */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateInView variant="fade-up" className="text-center mb-12">
            <p className="font-semibold text-sm uppercase tracking-wider mb-2">
              <span className="text-orange-500">Shipping coverage</span>
              <span className="text-slate-400 mx-2" aria-hidden="true">
                ·
              </span>
              <span className="text-green-600">Charges</span>
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Ghana to USA Shipping Details
            </h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
              {US_DELIVERY_SUMMARY}
            </p>
          </AnimateInView>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <AnimateInView
              variant="fade-up"
              className="bg-white border border-slate-200 border-l-4 border-l-green-500 rounded-2xl p-6 sm:p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-1">Where we ship</h3>
              <p className="text-xs font-medium text-green-700 mb-4">
                Service coverage
              </p>
              <ul className="space-y-3">
                {coverage.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 size={18} className="text-green-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AnimateInView>

            <AnimateInView
              variant="fade-up"
              delay={100}
              className="bg-white border border-slate-200 border-l-4 border-l-orange-500 rounded-2xl p-6 sm:p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-1">Current charges</h3>
              <p className="text-xs font-medium text-orange-600 mb-4">
                Rates in Ghana cedis (GHS)
              </p>
              <div className="space-y-3">
                {priceCards.map(({ label, amount, note }) => (
                  <div key={label} className="rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-semibold text-slate-800">{label}</p>
                      <p className="font-bold text-orange-600">{amount}</p>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">{note}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl bg-green-50 border border-green-200 px-4 py-3 mt-4">
                <p className="text-sm text-green-900 font-medium">
                  Medicine and jewelry
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  Additional charges apply by weight. Contact us on WhatsApp for
                  a quote.
                </p>
              </div>
            </AnimateInView>
          </div>

          <AnimateInView
            variant="fade-up"
            className="bg-white border-2 border-red-200 rounded-2xl p-6 sm:p-8 shadow-sm ring-1 ring-red-100"
          >
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  <AlertTriangle size={14} />
                  Prohibited Items
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Some items are not accepted for shipment
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Check the full prohibited items list before booking your
                  shipment to avoid delays.
                </p>
                <div className="flex flex-wrap gap-2">
                  {prohibitedPreview.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-medium text-red-700 bg-red-50 border border-red-100 rounded-full px-3 py-1"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {homeProhibitedPreviewImages.map((item) => (
                    <div
                      key={item.src}
                      className="rounded-lg overflow-hidden border border-red-100 bg-red-50"
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        width={320}
                        height={220}
                        className="w-full h-24 sm:h-28 object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  to="/prohibited-items"
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 rounded-xl font-semibold text-sm transition-colors"
                >
                  View full list <ArrowRight size={16} />
                </Link>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${SHIP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl font-semibold text-sm transition-colors"
                >
                  Ship via WhatsApp
                </a>
              </div>
            </div>
          </AnimateInView>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimateInView variant="fade-right">
                <p className="font-semibold text-sm uppercase tracking-wider mb-2">
                  <span className="text-orange-500">Why JM</span>
                  <span className="text-slate-400 mx-2" aria-hidden="true">
                    ·
                  </span>
                  <span className="text-green-600">Logistics</span>
                </p>
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
                      <CheckCircle2 size={18} className="text-green-600 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 mt-8 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
                >
                  About Us <ArrowRight size={16} />
                </Link>
              </AnimateInView>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {whyUs.map((row, i) => (
                <AnimateInView key={row.title} variant="zoom" delay={i * 100}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow h-full">
                    <div className="bg-gradient-to-br from-orange-50 to-green-50 w-11 h-11 rounded-xl flex items-center justify-center mb-4 ring-1 ring-orange-100/80">
                      {createElement(row.icon, { size: 20, className: 'text-orange-600' })}
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">{row.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{row.desc}</p>
                  </div>
                </AnimateInView>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-orange-500 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateInView variant="zoom">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Ship With Us?</h2>
            <p className="text-white/90 text-lg mb-8">
              Get a free quote in minutes and experience stress-free logistics.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
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
