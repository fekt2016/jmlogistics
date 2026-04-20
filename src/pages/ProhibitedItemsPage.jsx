import { Link } from 'react-router-dom'
import { AlertTriangle, ArrowRight, CircleX } from 'lucide-react'
import AnimateInView from '@/components/AnimateInView'
import {
  PROHIBITED_BANNER,
  prohibitedItemsDetail,
  prohibitedItemSrc,
} from '@/constants/prohibitedImages'

const WHATSAPP_NUMBER = '233200000000'
const MESSAGE = encodeURIComponent(
  'Hello JM Logistics, I want to confirm if my item is allowed for shipment.',
)

export default function ProhibitedItemsPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateInView variant="fade-up" className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-100 text-red-700 px-4 py-1.5 text-sm font-semibold mb-4">
            <AlertTriangle size={16} />
            Shipment Policy
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Prohibited Items
          </h1>
          <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
            For safety and compliance reasons, J.M Logistics does not accept
            the following items for shipment from Ghana to the United States.
          </p>
        </AnimateInView>

        <AnimateInView
          variant="fade-up"
          delay={80}
          className="mb-8 bg-white border-2 border-red-200 rounded-2xl p-3 sm:p-4 shadow-sm ring-1 ring-red-100"
        >
          <img
            src={PROHIBITED_BANNER}
            alt="Visual list of prohibited shipment items"
            width={1200}
            height={1500}
            className="w-full h-auto rounded-xl"
            fetchPriority="high"
            decoding="async"
          />
        </AnimateInView>

        <AnimateInView
          variant="fade-up"
          delay={90}
          className="mb-8 bg-white border-2 border-red-200 rounded-2xl p-5 sm:p-6 shadow-sm ring-1 ring-red-100"
        >
          <h2 className="text-lg font-bold text-slate-900 mb-4">
            Prohibited items examples
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {prohibitedItemsDetail.map((item) => (
              <div
                key={item.label}
                className="overflow-hidden rounded-xl border border-red-100 bg-red-50/40"
              >
                <img
                  src={prohibitedItemSrc(item)}
                  alt={item.label}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <p className="px-3 py-2 text-sm font-medium text-slate-800">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </AnimateInView>

        <AnimateInView
          variant="fade-up"
          delay={100}
          className="bg-white border-2 border-red-200 rounded-2xl p-5 sm:p-8 shadow-sm ring-1 ring-red-100"
        >
          <div className="grid sm:grid-cols-2 gap-3">
            {prohibitedItemsDetail.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 rounded-xl bg-red-50 border border-red-100 px-3 py-2.5 text-sm text-red-800"
              >
                <CircleX size={16} className="shrink-0" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </AnimateInView>

        <AnimateInView
          variant="fade-up"
          delay={150}
          className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-5 sm:p-8"
        >
          <h2 className="text-lg font-bold text-green-900 mb-2">
            Special handling notice
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Medicine and jewelry attract additional charges based on weight.
            Please contact us before booking so we can confirm the applicable
            rate and shipment requirements.
          </p>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            If your item is not listed here and you are unsure, send us a quick
            message and our team will confirm before pickup.
          </p>
        </AnimateInView>

        <AnimateInView variant="fade-up" delay={200} className="mt-8 bg-slate-900 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-2xl font-bold mb-2">Need item confirmation?</h2>
          <p className="text-slate-200 mb-5">
            Our team responds quickly to confirm eligibility, pricing, and next
            steps for your shipment.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl font-semibold text-sm transition-colors"
            >
              Chat on WhatsApp <ArrowRight size={16} />
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-xl font-semibold text-sm transition-colors border border-white/20"
            >
              Back to Homepage
            </Link>
          </div>
        </AnimateInView>
      </section>
    </div>
  )
}
