// src/modules/PromoBanner.tsx
import React from 'react';

export function PromoBanner() {
  return (
    <section id="promo" className="w-full">
      <div className="w-full xs:h-[656px] ssm:h-[689px] sm:h-[772px] md:h-[492px] lg:h-[580px] md:flex md:items-start md:overflow-hidden bg-brand-bg">
        <div
          className="
            container
            px-[16px] sm:px-[86px] md:px-[16px]
            pt-[32px] xs:pt-[50px] ssm:pt-[60px] sm:pt-[70px] md:pt-0
            pb-[32px] xs:pb-[50px] ssm:pb-[60px] sm:pb-[70px] md:pb-0
            lg:ml-[390px]
            flex flex-col md:flex-row
            items-start md:items-start
            justify-start
            gap-[24px] md:gap-0
          "
        >
          <div
            className="
              w-full sm:w-[595px] sm:h-[228px] md:w-[555px]
              text-center md:text-left
              lg:mt-[126px] md:mt-[103px]
            "
          >
            <h2
              className="
                font-bold tracking-[1px]
                text-[42px] leading-[46px]
                xs:text-[46px] xs:leading-[48px]
                ssm:text-[46px] ssm:leading-[48px]
                sm:text-[46px] sm:leading-[48px]
                md:text-[54px] md:leading-[60px]
                mb-[12px] min-[576px]:mb-[16px]
                text-brand-cyan
              "
            >
              <span className="sr-only">Solutions for people like you</span>

              <span aria-hidden className="block ssm:hidden">
                <span className="whitespace-nowrap">Solutions </span>
                <br />
                <span className="whitespace-nowrap">for people</span>
                <br />
                <span className="whitespace-nowrap">like&nbsp;you</span>
              </span>

              <span aria-hidden className="hidden ssm:block sm:hidden">
                <span className="whitespace-nowrap">Solutions for</span>
                <br />
                <span className="whitespace-nowrap">people&nbsp;like you</span>
              </span>

              <span aria-hidden className="hidden sm:block md:hidden">
                <span className="whitespace-nowrap">Solutions for people like</span>
                <br />
                <span className="whitespace-nowrap">&nbsp;you</span>
              </span>

              <span aria-hidden className="hidden md:block">
                <span className="whitespace-nowrap">Solutions for</span>
                <br />
                <span className="whitespace-nowrap">people&nbsp;like&nbsp;you</span>
              </span>
            </h2>

            <p
              className="
                mx-auto md:mx-0 max-w-[595px]
                text-white/85 font-normal tracking-[1px]
                text-[16px] leading-[24px]
                xs:text-[18px] xs:leading-[26px]
                ssm:text-[18px] ssm:leading-[26px]
                sm:text-[18px] sm:leading-[26px]
                md:text-[20px] md:leading-[28px]
                mb-[16px] sm:mb-[20px] md:mb-[20px]
              "
            >
              <span className="sr-only">
                How can we help your technology and services business develop a revenue engine based on Hubspot?
              </span>

              <span aria-hidden className="block ssm:hidden">
                <span className="whitespace-nowrap">How can we help your</span>
                <br />
                <span className="whitespace-nowrap">technology and services</span>
                <br />
                <span className="whitespace-nowrap">business develop a revenue</span>
                <br />
                <span className="whitespace-nowrap">&nbsp;engine based on Hubspot?</span>
              </span>

              <span aria-hidden className="hidden ssm:block sm:hidden">
                <span className="whitespace-nowrap">How can we help your technology and services</span>
                <br />
                <span className="whitespace-nowrap">business develop a revenue&nbsp;engine based on </span>
                <br />
                <span className="whitespace-nowrap">Hubspot?</span>
              </span>

              <span aria-hidden className="hidden sm:block md:hidden">
                <span className="whitespace-nowrap">How can we help your technology and services business</span>
                <br />
                <span className="whitespace-nowrap"> develop a revenue&nbsp;engine based on Hubspot?</span>
              </span>

              <span aria-hidden className="hidden md:block lg:hidden">
                <span className="whitespace-nowrap">How can we help your technology and</span>
                <br />
                <span className="whitespace-nowrap"> services business develop a revenue</span>
                <br />
                <span className="whitespace-nowrap">engine based on Hubspot?</span>
              </span>

              <span aria-hidden className="hidden lg:block">
                <span className="whitespace-nowrap">How can we help your technology and services </span>
                <br />
                <span className="whitespace-nowrap">business develop a revenue engine based on </span>
                <br />
                <span className="whitespace-nowrap">Hubspot?</span>
              </span>
            </p>

            <div
              className="
                flex flex-col ssm:flex-row
                justify-start xs:items-center ssm:justify-center md:justify-start
                gap-[12px]
                ssm:pt-[14px]
                xs:pt-[16px]
                w-full
              "
            >
              <a
                href="#"
                className="
                  inline-flex items-center justify-center
                  h-[36px] md:h-[40px]
                  w-full xs:w-[290px] ssm:w-[140px] md:w-[160px]
                  text-[12px] leading-[18px] tracking-[0.8px]
                  border-2 border-brand-cyan bg-brand-cyan text-white
                  hover:brightness-110
                "
              >
                Call to action
              </a>

              <a
                href="#"
                className="
                  inline-flex items-center justify-center bg-transparent
                  xs:mt-[5px] ssm:mt-[0px] ssm:ml-[5px]
                  h-[36px] md:h-[40px]
                  w-full xs:w-[290px] ssm:w-[140px] md:w-[160px]
                  text-[12px] leading-[18px] tracking-[0.8px]
                  border-2 border-brand-cyan text-brand-cyan
                  hover:bg-brand-cyan hover:text-white
                "
              >
                Call to action
              </a>
            </div>
          </div>

          <div
            className="
              pb-[0px] md:pb-0 
              ssm:mt-[16px]
              xs:mt-[6px]
              lg:ml-[127px]
              lg:mt-[100px] md:mt-[80px]
              flex-none shrink-0 overflow-hidden rounded-[2px]
              bg-no-repeat bg-cover
              xs:self-center

              /* размеры по брейкам */
              w-[290px]  h-[146px]            
              ssm:w-[450px] ssm:h-[275px]     
              sm:w-[596px] sm:h-[364px]       
              md:w-[455px] md:h-[332px]       
              lg:w-[458px] lg:h-[380px]       

              /* фокус кадра по брейкам */
              bg-[position:50%_8%]
              ssm:bg-[position:50%_5%]
              sm:bg-[position:10%_7%]
              md:bg-[position:-5%_7%]
              lg:bg-[position:-5%_5%]

              ssm:bg-[length:100%]
              sm:bg-[length:105%]
              md:bg-[length:165%]
              lg:bg-[length:150%]
            "
            role="img"
            aria-label="Camera lenses"
            style={{ backgroundImage: "url('/img/banner-lens.jpg')" }}
          />
        </div>
      </div>
    </section>
  )
}
