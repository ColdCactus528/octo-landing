// src/modules/CardsGridBottom.tsx
import { useEffect, useRef, useState } from 'react'
import { CardItem, CARDS, type Card } from '@/modules/CardsGrid'

export function CardsGridBottom() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const GAP = 30

  const getStep = () => {
    const el = trackRef.current
    if (!el) return 0
    const first = el.querySelector('article') as HTMLElement | null
    if (!first) return el.clientWidth
    return first.clientWidth + GAP
  }

  const updateEdges = () => {
    const el = trackRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth - 1
    setCanPrev(el.scrollLeft > 0)
    setCanNext(el.scrollLeft < max)
  }

  useEffect(() => {
    updateEdges()
    const el = trackRef.current
    if (!el) return
    el.addEventListener('scroll', updateEdges, { passive: true })
    const ro = new ResizeObserver(updateEdges)
    ro.observe(el)
    return () => {
      el.removeEventListener('scroll', updateEdges)
      ro.disconnect()
    }
  }, [])

  const goPrev = () => trackRef.current?.scrollBy({ left: -getStep(), behavior: 'smooth' })
  const goNext = () => trackRef.current?.scrollBy({ left:  getStep(), behavior: 'smooth' })

  return (
    <section id="cards-grid-bottom" className="py-12">
      <div className="mx-auto w-full max-w-[1140px] relative px-[15px] sm:px-[24px] md:px-[26px] lg:px-0">
        <div
          ref={trackRef}
          className="
            relative z-0
            flex gap-[30px] overflow-x-auto
            scroll-smooth snap-x snap-mandatory
            [-ms-overflow-style:none] [scrollbar-width:none]
          "
        >
          {CARDS.map((c: Card, i: number) => (
            <CardItem
              key={i}
              c={c}
              articleClassName="
                shrink-0 snap-start
                basis-[100%]                             /* xs: 1 */
                ssm:basis-[calc((100%-30px)/2)]          /* ssm: 2 */
                sm:basis-[calc((100%-30px)/2)]           /* sm: 2 */
                md:basis-[calc((100%-30px)/2)]           /* md: 2 */
                lg:basis-[calc((100%-60px)/3)]           /* lg: 3 */
              "
            />
          ))}
        </div>

        <div
          aria-hidden
          className="
            pointer-events-none absolute z-10 top-0 bottom-0
            left-[15px] right-[15px]
            sm:left-[24px] sm:right-[24px]
            md:left-[26px] md:right-[26px]
            lg:left-0 lg:right-0
          "
        >
          <div
            className={`
              absolute inset-y-0 left-0
              w-6 bg-gradient-to-r from-white to-transparent
              transition-opacity duration-200
              ${canPrev ? 'opacity-100' : 'opacity-0'}
            `}
          />
          <div
            className={`
              absolute inset-y-0 right-0
              w-6 bg-gradient-to-l from-white to-transparent
              transition-opacity duration-200
              ${canNext ? 'opacity-100' : 'opacity-0'}
            `}
          />
        </div>

        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            onClick={goPrev}
            aria-label="Previous"
            disabled={!canPrev}
            className={`
              w-9 h-9 rounded-full border
              flex items-center justify-center transition
              ${canPrev
                ? 'border-brand-cyan text-brand-cyan hover:bg-brand-cyan hover:text-white'
                : 'border-brand-cyan/30 text-brand-cyan/40 cursor-default'}
            `}
            title="Previous"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button
            onClick={goNext}
            aria-label="Next"
            disabled={!canNext}
            className={`
              w-9 h-9 rounded-full border
              flex items-center justify-center transition
              ${canNext
                ? 'border-brand-cyan text-brand-cyan hover:bg-brand-cyan hover:text-white'
                : 'border-brand-cyan/30 text-brand-cyan/40 cursor-default'}
            `}
            title="Next"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
