/**
 * URL for a file served from Vite `public/` (root-relative in dev & build).
 * Prefixes `import.meta.env.BASE_URL` so assets work when the app is hosted under a subpath.
 *
 * @param {string} path - Filename or path, e.g. `prohibited-garlic.png` or `/icons.svg`
 * @returns {string}
 */
export function publicAsset(path) {
  const base = import.meta.env.BASE_URL || '/'
  const normalized = path.startsWith('/') ? path : `/${path}`
  if (base === '/') return normalized
  const prefix = base.endsWith('/') ? base.slice(0, -1) : base
  return `${prefix}${normalized}`
}
