import { useSearchParams, Link } from 'react-router-dom'
import { Suspense } from 'react'
import SectionView from '@/components/SectionView'

/**
 * Return landing after Paystack / Stripe redirect.
 */
function SuccessInner() {
  const [searchParams] = useSearchParams()
  const trackingId = searchParams.get('trackingId') || ''
  const note = trackingId
    ? 'If you completed payment, your shipment will show as paid once the webhook runs (usually within seconds). You can track progress below.'
    : 'Thanks — keep your tracking ID from the confirmation email or dashboard.'

  return (
    <SectionView className="min-h-screen bg-slate-50 pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-lg mx-auto bg-white border border-slate-200 rounded-2xl p-8 shadow-sm text-center space-y-4">
        <h1 className="text-2xl font-bold text-slate-900">Payment submitted</h1>
        <p className="text-sm text-slate-600">{note}</p>
        {trackingId && (
          <p className="font-mono text-lg font-bold text-orange-600">{trackingId}</p>
        )}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <Link
            to={trackingId ? `/shipments/track?q=${encodeURIComponent(trackingId)}` : '/shipments/track'}
            className="inline-flex justify-center rounded-xl bg-orange-500 text-white font-semibold px-6 py-3 text-sm hover:bg-orange-600"
          >
            Track shipment
          </Link>
          <Link
            to="/shipments/create"
            className="inline-flex justify-center rounded-xl border border-slate-200 text-slate-800 font-semibold px-6 py-3 text-sm hover:bg-slate-50"
          >
            New shipment
          </Link>
        </div>
      </div>
    </SectionView>
  )
}

export default function ShipmentSuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-32 text-center text-slate-500">Loading…</div>}>
      <SuccessInner />
    </Suspense>
  )
}
