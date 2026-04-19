import { Link } from 'react-router-dom'
import SectionView from '@/components/SectionView'

/**
 * Static site: no backend. This URL is kept only so old links do not 404.
 */
export default function AdminPage() {
  return (
    <SectionView className="min-h-screen bg-slate-50 pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-lg mx-auto bg-white border border-slate-200 rounded-2xl p-8 shadow-sm text-center space-y-4">
        <h1 className="text-xl font-bold text-slate-900">Admin</h1>
        <p className="text-sm text-slate-600">
          This site is deployed as static pages only. Shipment management runs on a
          separate system when available.
        </p>
        <Link
          to="/"
          className="inline-flex justify-center rounded-xl bg-orange-500 text-white font-semibold px-6 py-3 text-sm hover:bg-orange-600"
        >
          Back to home
        </Link>
      </div>
    </SectionView>
  )
}
