import AnimateInView from '@/components/AnimateInView'

/**
 * Wraps a section (or other root element) so its content uses the shared scroll view-in animation.
 * Prefer inner `AnimateInView` blocks on long pages (e.g. home) instead of nesting both.
 */
export default function SectionView({
  children,
  className = '',
  variant = 'fade-up',
  delay = 0,
  threshold = 0.12,
  innerClassName = 'w-full',
  as: Root = 'section',
  ...rootProps
}) {
  const Tag = Root
  return (
    <Tag className={className} {...rootProps}>
      <AnimateInView
        variant={variant}
        delay={delay}
        threshold={threshold}
        className={innerClassName}
      >
        {children}
      </AnimateInView>
    </Tag>
  )
}
