// src/modules/CardsGrid.tsx
export type BreakKey = 'xs' | 'ssm' | 'sm' | 'md' | 'lg'
export type SplitLines = Partial<Record<BreakKey, string[]>>

export type Card = {
  tag: string
  img?: string
  rectBgClass?: string
  title: string
  text: string
  tagBgClass?: string
  ctaClass?: string
  mediaW?: number
  mediaH?: number
  titleLines?: SplitLines
  textLines?: SplitLines
  titleClass?: string
  textClass?: string
  heightClass?: string
  imgPosClass?: string
  authorClass?: string;
}

export const DEFAULT_TITLE_CLASS =
  'mt-[8px] text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] lg:text-[22px] lg:leading-[30px]'

export const DEFAULT_TEXT_CLASS =
  'mt-[10px] text-[14px] leading-[22px] md:text-[16px] md:leading-[26px]'

export const DEFAULT_CARD_HEIGHT_CLASS =
  'h-[448px] sm:h-[440px] md:h-[470px] lg:h-[500px] overflow-hidden'

export const CARDS: Card[] = [
  {
    tag: 'CATEGORY | MARKETING',
    rectBgClass: 'bg-brand-gray',
    title: 'Solutions for people like you like people',
    text: 'How can we help your technology and services business develop a revenue engine based on Hubspot?',
    tagBgClass: 'bg-brand-cyan',
    ctaClass: 'bg-brand-cyan border-brand-cyan',
    authorClass: 'text-brand-cyan',
    titleLines: {
      xs: ['Solutions for people like', 'you like people'],
      ssm: ['Solutions for people', 'like you like people'],
      sm: ['Solutions for people like you', 'like people'],
      md: ['Solutions for people like you like', 'people'],
      lg: ['Solutions for people like', 'you like people'],
    },
    textLines: {
      xs: ['How can we help your technology', 'and services business develop a', 'revenue engine based'],
      ssm: ['How can we help your', 'technology and services', 'business develop'],
      sm: ['How can we help your technology and', 'services business develop a revenue', 'engine based'],
      md: ['How can we help your technology and services', 'business develop a revenue engine based'],
      lg: ['How can we help your technology', 'and services business develop a', 'revenue engine based'],
    },
  },
  {
    tag: 'CATEGORY',
    img: '/img/marian-kroell.jpg',
    title: 'Solutions for people like',
    text: 'How can we help your technology and services business develop a revenue engine based',
    tagBgClass: 'bg-brand-cyan',
    ctaClass: 'bg-brand-cyan border-brand-cyan',
    authorClass: 'text-brand-cyan',
    titleLines: {
      xs: ['Solutions for people like', 'you like people'],
      ssm: ['Solutions for people', 'like you like people'],
      sm: ['Solutions for people like you', 'like people'],
      md: ['Solutions for people like you like', 'people'],
      lg: ['Solutions for people like', 'you like people'],
    },
    textLines: {
      xs: ['How can we help your technology', 'and services business develop a', 'revenue engine based'],
      ssm: ['How can we help your', 'technology and services', 'business develop'],
      sm: ['How can we help your technology and', 'services business develop a revenue', 'engine based'],
      md: ['How can we help your technology and services', 'business develop a revenue engine based'],
      lg: ['How can we help your technology', 'and services business develop a', 'revenue engine based'],
    },
  },
  {
    tag: 'CATEGORY | DEVELOPMENT',
    rectBgClass: 'bg-brand-pink',
    title: 'Solutions for people like',
    text: 'How can we help your technology and services business develop a revenue engine based',
    tagBgClass: 'bg-brand-navy',
    ctaClass: 'bg-brand-navy border-brand-navy',
    titleLines: {
      xs: ['Solutions for people like', 'you like people'],
      ssm: ['Solutions for people', 'like you like people'],
      sm: ['Solutions for people like you', 'like people'],
      md: ['Solutions for people like you like', 'people'],
      lg: ['Solutions for people like', 'you like people'],
    },
    textLines: {
      xs: ['How can we help your technology', 'and services business develop a', 'revenue engine based'],
      ssm: ['How can we help your', 'technology and services', 'business develop'],
      sm: ['How can we help your technology and', 'services business develop a revenue', 'engine based'],
      md: ['How can we help your technology and services', 'business develop a revenue engine based'],
      lg: ['How can we help your technology', 'and services business develop a', 'revenue engine based'],
    },
  },
  {
    tag: 'CATEGORY | MARKETING',
    rectBgClass: 'bg-brand-cyan',
    title: 'Solutions for people like',
    text: 'How can we help your technology and services business develop a revenue engine based',
    tagBgClass: 'bg-brand-navy',
    ctaClass: 'bg-brand-navy border-brand-navy',
    titleLines: {
      xs: ['Solutions for people like', 'you like people'],
      ssm: ['Solutions for people', 'like you like people'],
      sm: ['Solutions for people like you', 'like people'],
      md: ['Solutions for people like you like', 'people'],
      lg: ['Solutions for people like', 'you like people'],
    },
    textLines: {
      xs: ['How can we help your technology', 'and services business develop a', 'revenue engine based'],
      ssm: ['How can we help your', 'technology and services', 'business develop'],
      sm: ['How can we help your technology and', 'services business develop a revenue', 'engine based'],
      md: ['How can we help your technology and services', 'business develop a revenue engine based'],
      lg: ['How can we help your technology', 'and services business develop a', 'revenue engine based'],
    },
  },
  {
    tag: 'CATEGORY | MARKETING',
    img: '/img/banner-lens.jpg',
    imgPosClass: 'object-top',
    title: 'Solutions for people like you like people',
    text: 'How can we help your technology and services business develop a revenue engine based',
    tagBgClass: 'bg-brand-cyan',
    ctaClass: 'bg-brand-cyan border-brand-cyan',
    authorClass: 'text-brand-cyan',
    titleLines: {
      xs: ['Solutions for people like', 'you like people'],
      ssm: ['Solutions for people', 'like you like people'],
      sm: ['Solutions for people like you', 'like people'],
      md: ['Solutions for people like you like', 'people'],
      lg: ['Solutions for people like', 'you like people'],
    },
    textLines: {
      xs: ['How can we help your technology', 'and services business develop a', 'revenue engine based'],
      ssm: ['How can we help your', 'technology and services', 'business develop'],
      sm: ['How can we help your technology and', 'services business develop a revenue', 'engine based'],
      md: ['How can we help your technology and services', 'business develop a revenue engine based'],
      lg: ['How can we help your technology', 'and services business develop a', 'revenue engine based'],
    },
  },
  {
    tag: 'CATEGORY',
    rectBgClass: 'bg-brand-gray',
    title: 'Solutions for people like',
    text: 'How can we help your technology and services business develop a revenue engine based',
    tagBgClass: 'bg-brand-navy',
    ctaClass: 'bg-brand-navy border-brand-navy',
    titleLines: {
      xs: ['Solutions for people like', 'you like people'],
      ssm: ['Solutions for people', 'like you like people'],
      sm: ['Solutions for people like you', 'like people'],
      md: ['Solutions for people like you like', 'people'],
      lg: ['Solutions for people like', 'you like people'],
    },
    textLines: {
      xs: ['How can we help your technology', 'and services business develop a', 'revenue engine based'],
      ssm: ['How can we help your', 'technology and services', 'business develop'],
      sm: ['How can we help your technology and', 'services business develop a revenue', 'engine based'],
      md: ['How can we help your technology and services', 'business develop a revenue engine based'],
      lg: ['How can we help your technology', 'and services business develop a', 'revenue engine based'],
    },
  },
]

// — helpers -----------------------------------------------------

export function Lines({ lines, withDots = false }: { lines: string[]; withDots?: boolean }) {
  return (
    <>
      {lines.map((ln, i) => (
        <span key={i}>
          <span className="whitespace-nowrap">
            {i === lines.length - 1 && withDots ? `${ln}…` : ln}
          </span>
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </>
  )
}

/** Бейдж фиксированной высоты — цвет только классом из Tailwind */
export function TagBadge({ text, bgClass = 'bg-brand-navy' }: { text: string; bgClass?: string }) {
  return (
    <div
      className={`absolute top-[12px] h-[36px]
                  inline-flex items-center px-[16px]
                  text-white uppercase text-[13px] leading-[22px] tracking-[1.2px]
                  whitespace-nowrap ${bgClass}`}
    >
      {text}
    </div>
  )
}

export function CtaButton({ ctaClass = 'bg-brand-navy border-brand-navy' }: { ctaClass?: string }) {
  return (
    <a
      href="#"
      className={`inline-flex w-[160px] h-[40px] items-center justify-center border-2
                  text-white text-[13px] leading-[20px] tracking-[0.8px] ${ctaClass}`}
    >
      Call to action
    </a>
  )
}

export type CardItemProps = {
  c: Card
  articleClassName?: string
}

/** Карточка */
export function CardItem({ c, articleClassName = '' }: CardItemProps) {
  const h = c.mediaH ?? 170

  const xsText = c.textLines?.xs ?? [c.text]
  const ssmText = c.textLines?.ssm ?? xsText
  const smText = c.textLines?.sm ?? ssmText
  const mdText = c.textLines?.md ?? smText
  const lgText = c.textLines?.lg ?? mdText

  return (
    <article
      className={`
        relative w-full justify-self-stretch min-w-0 border border-brand-gray bg-white
        ${c.heightClass || DEFAULT_CARD_HEIGHT_CLASS}
        ${articleClassName}
      `}
    >
      <TagBadge text={c.tag} bgClass={c.tagBgClass} />

      <div className="flex h-full flex-col xs:p-[16px] sm:p-[28px] md:p-[30px]">
        {/* Медиа */}
        {c.img ? (
          <img
            src={c.img}
            alt=""
            loading="lazy"
            decoding="async"
            className={`w-full object-cover ${c.imgPosClass ?? 'object-center'}`}
            style={{ height: `${h}px` }}
          />
        ) : (
          <div
            className={`w-full rounded-[2px] ${c.rectBgClass ?? 'bg-brand-gray'}`}
            style={{ height: `${h}px` }}
          />
        )}

        <div className={`mt-[20px] text-[13px] leading-[20px] ${c.authorClass ?? 'text-brand-navy'}`}>Adam Sandler</div>

        <h3 className={c.titleClass || DEFAULT_TITLE_CLASS}>
          <span className="sr-only">{c.title}</span>

          <span aria-hidden className="block ssm:hidden">
            {c.titleLines?.xs ? <Lines lines={c.titleLines.xs} /> : c.title}
          </span>

          <span aria-hidden className="hidden ssm:block sm:hidden">
            {c.titleLines?.ssm ? <Lines lines={c.titleLines.ssm} /> : c.title}
          </span>

          <span aria-hidden className="hidden sm:block md:hidden">
            {c.titleLines?.sm ? <Lines lines={c.titleLines.sm} /> : c.title}
          </span>

          <span aria-hidden className="hidden md:block lg:hidden">
            {c.titleLines?.md ? <Lines lines={c.titleLines.md} /> : c.title}
          </span>

          <span aria-hidden className="hidden lg:block">
            {c.titleLines?.lg ? <Lines lines={c.titleLines.lg} /> : c.title}
          </span>
        </h3>

        <p className={c.textClass || DEFAULT_TEXT_CLASS}>
          <span className="sr-only">{c.text}</span>

          <span aria-hidden className="block ssm:hidden">
            <Lines lines={xsText} />
          </span>

          <span aria-hidden className="hidden ssm:block sm:hidden">
            <Lines lines={ssmText} />
          </span>

          <span aria-hidden className="hidden sm:block md:hidden">
            <Lines lines={smText} withDots />
          </span>

          <span aria-hidden className="hidden md:block lg:hidden">
            <Lines lines={mdText} withDots />
          </span>

          <span aria-hidden className="hidden lg:block">
            <Lines lines={lgText} />
          </span>
        </p>

        <div className="mt-auto pt-[8px]">
          <CtaButton ctaClass={c.ctaClass} />
        </div>
      </div>
    </article>
  )
}

export function CardsGrid() {
  return (
    <section id="cards-grid" className="py-10">
      <div className="mx-auto w-full max-w-[1140px] px-[15px] sm:px-[24px] md:px-[26px] lg:px-0">
        <div
          className="
            grid xs:grid-cols-1 ssm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3
            gap-x-[30px] gap-y-[30px]
            justify-items-stretch items-stretch
          "
        >
          {CARDS.map((c, i) => (
            <CardItem key={i} c={c} />
          ))}
        </div>
      </div>
    </section>
  )
}
