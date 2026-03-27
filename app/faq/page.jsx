'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react'
import AnimateInView from '@/components/AnimateInView'

const categories = [
  {
    label: 'Shipping & Delivery',
    faqs: [
      {
        q: 'How long does local delivery take?',
        a: 'Our local delivery service offers same-day delivery for orders placed before 12:00 PM. Orders placed after that time are typically delivered the next morning. We also offer express slots for urgent deliveries.',
      },
      {
        q: 'What cities do you deliver to?',
        a: "We currently offer local delivery within Accra, Kumasi, Tamale, Takoradi, and Cape Coast. Our intercity service connects all major cities across Ghana. Contact us if your location isn't listed — we're always expanding.",
      },
      {
        q: 'Do you offer same-day intercity delivery?',
        a: 'Intercity deliveries typically take 1–3 business days depending on the distance. We do offer express intercity options for time-sensitive shipments at a premium rate.',
      },
      {
        q: 'Can I schedule a future delivery date?',
        a: 'Yes! You can schedule pickups and deliveries up to 7 days in advance. Just mention your preferred date and time when placing your order.',
      },
    ],
  },
  {
    label: 'Pricing & Payment',
    faqs: [
      {
        q: 'How is the delivery fee calculated?',
        a: 'Our pricing is based on package weight, dimensions, distance, and delivery speed. For local deliveries, we offer flat rates starting from GH₵10. Contact us for a custom quote on large or intercity shipments.',
      },
      {
        q: 'Are there any hidden charges?',
        a: 'Never. We believe in transparent pricing. The quote you receive is the price you pay — no surprise fees at delivery.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept bank transfers, cash on pickup, and mobile money (MTN MoMo, Telecel Cash, AirtelTigo Money). For business clients, we offer monthly invoicing with NET-30 terms.',
      },
      {
        q: 'Do you offer discounts for bulk shipments?',
        a: 'Yes! Business clients and high-volume senders enjoy tiered discounts. Reach out to our business team to discuss a custom pricing package.',
      },
    ],
  },
  {
    label: 'Tracking & Safety',
    faqs: [
      {
        q: 'How can I track my shipment?',
        a: "After pickup, you'll receive a tracking update via WhatsApp or SMS. You can also contact our support team at any time for a status update on your package.",
      },
      {
        q: 'Is my package insured?',
        a: "All shipments are covered by our basic insurance policy. For high-value items, we offer additional coverage. Please declare the value of your item when placing your order.",
      },
      {
        q: 'What happens if my package is damaged or lost?',
        a: 'We take full responsibility. In the rare event of damage or loss, contact us immediately with your tracking details and we will initiate a claim process within 24 hours.',
      },
      {
        q: 'What items cannot be shipped?',
        a: "We do not ship illegal items, hazardous materials, live animals, or perishable food items (without prior arrangement). Contact us if you're unsure about your item.",
      },
    ],
  },
  {
    label: 'Business Accounts',
    faqs: [
      {
        q: 'How do I set up a business account?',
        a: "Setting up a business account is quick and free. Contact our business team via email or WhatsApp with your company details and we'll have your account ready within 24 hours.",
      },
      {
        q: 'Can I integrate JM Logistics with my e-commerce store?',
        a: 'Yes! We offer API integration and webhooks for popular platforms including Shopify, WooCommerce, and custom-built stores. Talk to our tech team for details.',
      },
      {
        q: 'Do you provide a dedicated account manager?',
        a: 'All business accounts with monthly volumes above 50 shipments receive a dedicated account manager who is available during business hours for support and coordination.',
      },
    ],
  },
]

function AccordionItem({ q, a, index }) {
  const [open, setOpen] = useState(false)
  return (
    <AnimateInView variant="fade-up" delay={index * 60}>
      <div className="border border-slate-100 rounded-2xl overflow-hidden">
        <button
          onClick={() => setOpen(!open)}
          className={`w-full flex items-center justify-between px-6 py-5 text-left transition-colors ${
            open ? 'bg-orange-50' : 'bg-white hover:bg-slate-50'
          }`}
        >
          <span className={`font-semibold text-sm pr-4 ${open ? 'text-orange-600' : 'text-slate-900'}`}>{q}</span>
          <ChevronDown
            size={20}
            className={`shrink-0 transition-transform duration-300 ${open ? 'rotate-180 text-orange-500' : 'text-slate-400'}`}
          />
        </button>
        {open && (
          <div className="px-6 pb-5 bg-white">
            <div className="border-t border-slate-100 pt-4">
              <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
            </div>
          </div>
        )}
      </div>
    </AnimateInView>
  )
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <div>
      <section className="bg-slate-900 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateInView variant="fade-up" delay={0}>
            <div className="bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm px-4 py-1.5 rounded-full inline-block mb-5">
              Got Questions?
            </div>
          </AnimateInView>
          <AnimateInView variant="fade-up" delay={100}>
            <h1 className="text-4xl sm:text-5xl font-bold mb-5">Frequently Asked Questions</h1>
          </AnimateInView>
          <AnimateInView variant="fade-up" delay={200}>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Find quick answers to the most common questions about our logistics services.
            </p>
          </AnimateInView>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <AnimateInView variant="fade-up">
            <div className="flex flex-wrap gap-2 mb-12 justify-center">
              {categories.map(({ label }, i) => (
                <button
                  key={label}
                  onClick={() => setActiveCategory(i)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    activeCategory === i
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </AnimateInView>

          <div className="space-y-3">
            {categories[activeCategory].faqs.map(({ q, a }, i) => (
              <AccordionItem key={q} q={q} a={a} index={i} />
            ))}
          </div>

          <AnimateInView variant="zoom" delay={200}>
            <div className="mt-16 bg-white rounded-3xl p-10 text-center shadow-sm">
              <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <HelpCircle size={28} className="text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Still Have Questions?</h3>
              <p className="text-slate-500 mb-8 max-w-md mx-auto">
                Can't find what you're looking for? Our friendly support team is available 7 days a week.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-xl font-semibold text-sm transition-colors"
                >
                  Contact Support <ArrowRight size={16} />
                </Link>
                <a
                  href="https://wa.me/233200000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-7 py-3 rounded-xl font-semibold text-sm transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </AnimateInView>
        </div>
      </section>
    </div>
  )
}
