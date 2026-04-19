/** Default document titles by pathname (longest prefix match for nested routes). */
export const routeTitles = {
  '/': 'JM Logistics — Reliable Delivery Solutions',
  '/about': 'About Us — JM Logistics',
  '/services': 'Services — JM Logistics',
  '/contact': 'Contact — JM Logistics',
  '/faq': 'FAQ — JM Logistics',
  '/prohibited-items': 'Prohibited Items — JM Logistics',
  '/shipments/create': 'Create shipment — JM Logistics',
  '/shipments/track': 'Track shipment — JM Logistics',
  '/shipments/success': 'Payment submitted — JM Logistics',
  '/admin': 'Admin — JM Logistics',
}

export function titleForPath(pathname) {
  if (routeTitles[pathname]) return routeTitles[pathname]
  const keys = Object.keys(routeTitles).filter((k) => k !== '/').sort((a, b) => b.length - a.length)
  for (const k of keys) {
    if (pathname === k || pathname.startsWith(`${k}/`)) return routeTitles[k]
  }
  if (pathname !== '/') {
    return 'Page not found — JM Logistics'
  }
  return routeTitles['/']
}
