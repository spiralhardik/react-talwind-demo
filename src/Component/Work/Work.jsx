import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import HeadingWaves from '../../assets/images/heading-waves.png'
import WorkImage from '../../assets/images/Work Together Image.png'


const Work = () => {
  return (
    <section>
      <div className='max-w-[var(--breakpoint-desktop)] mx-auto flex flex-col md:flex-row px-4 gap-6 items-center'>

        <div className='w-full md:w-1/2 md:flex md:justify-start'>
          <img src={WorkImage} alt="placeholder" width={700} height={661} className='rounded-md' />
        </div>

        <div className='w-full md:w-1/2'>
          <h2 className="text-[clamp(32px,6.08695652vw,72px)] font-bold text-[var(--text-color)] leading-[1.1] ">
            Work{" "}
            <span
              className="relative inline-block before:content-[''] before:absolute before:left-0 before:bottom-[-20px] before:w-full before:h-[65px] before:bg-no-repeat before:bg-contain before:-z-10"
              style={{
                backgroundImage: `url(${HeadingWaves})`,
                backgroundRepeat: `no-repeat`,
                backgroundPositionY: `bottom`
              }}
            >
              Together
            </span>
          </h2>
          <p className='mt-[40px] text-[var(--text-color)] text-[clamp(16px,3.47826087vw,20px)]'>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
          <button className='bg-[var(--btn-bg)] px-[20px] py-[15px] rounded-[8px] text-[18px] text-white inline-flex items-center gap-2.5 mt-[60px] cursor-pointer'>Try It Now <span><FaArrowRightLong /> </span> </button>
        </div>

      </div>


    </section>
  )
}

export default Work
