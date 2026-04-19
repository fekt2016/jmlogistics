import { Link } from 'react-router-dom'
import SectionView from '@/components/SectionView'

export default function NotFoundPage() {
  return (
    <SectionView
      as="div"
      className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-20 text-center"
    >
      <p className="text-sm font-semibold text-orange-600 uppercase tracking-wide">404</p>
      <h1 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-3 text-slate-600 max-w-md text-sm">
        That address does not exist or has moved. Use the menu or go back home.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center rounded-xl bg-orange-500 text-white font-semibold px-6 py-3 text-sm hover:bg-orange-600"
      >
        Back to home
      </Link>
    </SectionView>
  )
}
