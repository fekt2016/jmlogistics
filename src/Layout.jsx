import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { titleForPath } from './routeMeta.js'

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    document.title = titleForPath(pathname)
  }, [pathname])

  return (
    <>
      <Navbar />
      <main>
        <div key={pathname} className="page-view-in">
          <Outlet />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
