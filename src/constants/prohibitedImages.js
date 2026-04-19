import { publicAsset } from '@/utils/publicAsset'

/** Hero / fallback image in `public/` */
export const PROHIBITED_BANNER = publicAsset('prohibited-items.png')

/** Home page — preview strip (matches files in `public/`) */
export const homeProhibitedPreviewImages = [
  { file: 'prohibited-garlic.png', alt: 'Garlic prohibited item' },
  { file: 'prohibited-sachet-garlic.png', alt: 'Sachet garlic prohibited item' },
  { file: 'prohibited-shito.png', alt: 'Shito with meat prohibited item' },
  { file: 'prohibited-benylin.png', alt: 'Benylin codeine prohibited item' },
  { file: 'prohibited-weed.png', alt: 'Marijuana prohibited item' },
].map(({ file, alt }) => ({ src: publicAsset(file), alt }))

/**
 * Full prohibited list — `file` must exist in `public/` or be omitted (uses banner).
 * @type {Array<{ label: string, file?: string }>}
 */
export const prohibitedItemsDetail = [
  { label: 'Garlic', file: 'prohibited-garlic.png' },
  { label: 'Sachet garlic', file: 'prohibited-sachet-garlic.png' },
  { label: 'Garlic powder' },
  { label: 'Shito with meat', file: 'prohibited-shito.png' },
  { label: 'Marijuana / weed', file: 'prohibited-weed.png' },
  { label: 'Ashishi' },
  { label: 'Benylin codeine', file: 'prohibited-benylin.png' },
  { label: 'Alasa fruit', file: 'prohibited-alasa-fruit.png' },
  { label: 'Cow skin (wele)', file: 'prohibited-cow-skin-wele.png' },
  { label: 'Meat', file: 'prohibited-meat.png' },
  { label: 'Fried meat', file: 'prohibited-fried-meat.png' },
  { label: 'Tamarind (samia)' },
  { label: 'Rubutu (liquid)' },
  { label: 'Electronic counter', file: 'prohibited-electronic-counter.png' },
  { label: 'Meat spices', file: 'prohibited-meat-spices.png' },
  { label: 'Ginger', file: 'prohibited-ginger.png' },
]

/**
 * @param {{ label: string, file?: string }} item
 * @returns {string}
 */
export function prohibitedItemSrc(item) {
  return item.file ? publicAsset(item.file) : PROHIBITED_BANNER
}
