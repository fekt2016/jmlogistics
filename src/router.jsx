import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import FaqPage from './pages/FaqPage.jsx'
import ProhibitedItemsPage from './pages/ProhibitedItemsPage.jsx'
import ShipmentCreatePage from './pages/ShipmentCreatePage.jsx'
import ShipmentTrackPage from './pages/ShipmentTrackPage.jsx'
import ShipmentSuccessPage from './pages/ShipmentSuccessPage.jsx'
import AdminPage from './pages/AdminPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'about', element: <AboutPage /> },
        { path: 'services', element: <ServicesPage /> },
        { path: 'contact', element: <ContactPage /> },
        { path: 'faq', element: <FaqPage /> },
        { path: 'prohibited-items', element: <ProhibitedItemsPage /> },
        { path: 'shipments/create', element: <ShipmentCreatePage /> },
        { path: 'shipments/track', element: <ShipmentTrackPage /> },
        { path: 'shipments/success', element: <ShipmentSuccessPage /> },
        { path: 'admin', element: <AdminPage /> },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL.replace(/\/$/, '') || undefined,
  },
)
