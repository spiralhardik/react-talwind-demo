import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import HeadingWaves from '../../assets/images/heading-waves.png'
import ExtensionVector from '../../assets/images/extension-vector.svg'

const Extension = () => {
  return (
    <section className='bg-[var(--bg-primary)]'>
      <div className='max-w-[var(--breakpoint-desktop)] mx-auto flex flex-col md:flex-row px-4 gap-6 items-center'>
        <div className='w-full md:w-1/2'>
          <h2 className="text-[clamp(32px,6.08695652vw,72px)] font-bold text-white leading-[1.1] max-w-[500px]">
            Use{" "}
            <span
              className="relative inline-block before:content-[''] before:absolute before:left-0 before:bottom-[-20px] before:w-full before:h-[65px] before:bg-no-repeat before:bg-contain before:-z-10"
              style={{
                backgroundImage: `url(${HeadingWaves})`,
                backgroundRepeat: `no-repeat`,
                backgroundPositionY: `bottom`
              }}
            >
              Extension
            </span>
          </h2>
          <p className='mt-[40px] text-white text-[clamp(16px,3.47826087vw,20px)]'>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
          <button className='bg-[var(--btn-bg)] px-[30px] py-[14px] rounded-[8px] text-[18px] text-white inline-flex items-center gap-2.5 mt-[60px] cursor-pointer'>Let's Go <span><FaArrowRightLong /> </span> </button>
        </div>

        <div className='w-full md:w-1/2 md:flex md:justify-end'>
          <img src={ExtensionVector} alt="Browser extensions and integrations illustration" width={600} height={400} className='rounded-md' />
        </div>
      </div>
    </section>
  )
}

export default Extension
