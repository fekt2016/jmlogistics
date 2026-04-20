import { Link } from 'react-router-dom'
import SectionView from '@/components/SectionView'

export default function TrackShipmentPage() {
  return (
    <SectionView className="min-h-screen bg-slate-50 pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-2xl px-6 py-12 sm:px-10 sm:py-16 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Shipment Tracking Coming Soon
          </h1>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            We are preparing this page. For status on Ghana → USA shipments,
            contact us on{' '}
            <Link to="/contact" className="text-orange-600 font-semibold hover:underline">
              Contact
            </Link>{' '}
            or WhatsApp — US delivery is included in NY (all cities) and Newark,
            NJ; other states may incur extra fees.
          </p>
        </div>
      </div>
    </SectionView>
  )
}
