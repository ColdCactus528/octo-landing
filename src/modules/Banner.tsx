// src/modules/Banner.tsx
export function Banner() {
  return (
    <section id="banner" className="relative">
      <div className="relative h-[274px] ssm:h-[236px] sm:h-[276px] md:h-[340px] lg:h-[396px] overflow-hidden">
        <div
          className="
            absolute inset-0
            bg-no-repeat bg-left-top
            [background-size:1920px_auto]
            bg-[url('/img/marian-kroell.jpg')]
          "
        />

        <div className="absolute inset-0 bg-brand-bg/60" />

        <div
          className="
            absolute left-1/2 -translate-x-1/2
            top-[60px] sm:top-[80px] md:top-[100px] lg:top-[120px]
            w-[min(92%,290px)] ssm:w-[min(90%,450px)] sm:w-[min(90%,470px)] md:w-[min(90%,617px)] lg:w-[min(90%,750px)]
            text-center
          "
        >
          <h1
            className="
              text-white font-bold
              text-[46px] leading-[48px]
              md:text-[54px] md:leading-[60px]
              lg:text-[62px] lg:leading-[68px]
              tracking-[1px] md:tracking-[1.2px] lg:tracking-[1.4px]
            "
          >
            Solutions for people{" "}
            <br className="hidden sm:block" />
            like you
          </h1>
        </div>
      </div>
    </section>
  )
}
