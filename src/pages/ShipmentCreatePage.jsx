import { Link } from 'react-router-dom'
import SectionView from '@/components/SectionView'

export default function CreateShipmentPage() {
  return (
    <SectionView className="min-h-screen bg-slate-50 pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-2xl px-6 py-12 sm:px-10 sm:py-16 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Shipment Booking Coming Soon
          </h1>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            We are preparing this page. For Ghana → USA moves, included US
            delivery applies in all New York cities and Newark, NJ only; other
            US states are quoted with extra charges — book via{' '}
            <Link to="/contact" className="text-orange-600 font-semibold hover:underline">
              Contact
            </Link>{' '}
            or WhatsApp until online booking is live.
          </p>
        </div>
      </div>
    </SectionView>
  )
}
