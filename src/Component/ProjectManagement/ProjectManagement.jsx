import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import HeadingWaves from '../../assets/images/heading-waves.png'
import Background from '../../assets/images/background.png'
import ProjectVector from '../../assets/images/project-management-vector.svg'

const ProjectManagement = () => {
  return (
    <section>
      <div className='max-w-[var(--breakpoint-desktop)] mx-auto flex flex-col md:flex-row px-4 gap-6 items-center'>

        <div className='w-full md:w-1/2 relative z-30'>
          <h2 className="text-[clamp(32px,6.08695652vw,72px)] font-bold text-[var(--text-color)] leading-[1.1] max-w-[500px]">
            Project{" "}
            <span
              className="relative inline-block before:content-[''] before:absolute before:left-0 before:bottom-[-20px] before:w-full before:h-[65px] before:bg-no-repeat before:bg-contain before:-z-10"
              style={{
                backgroundImage: `url(${HeadingWaves})`,
                backgroundRepeat: `no-repeat`,
                backgroundPositionY: `bottom`
              }}
            >
              Managements
            </span>
          </h2>
          <p className='mt-[40px] text-[var(--text-color)] text-[clamp(16px,3.47826087vw,20px)]'>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
          <button className='bg-[var(--btn-bg)] px-[20px] py-[15px] rounded-[8px] text-[18px] text-white inline-flex items-center gap-2.5 mt-[60px] cursor-pointer'>Get Started <span><FaArrowRightLong /> </span> </button>
        </div>

        <div className='w-full md:w-1/2 md:flex md:justify-end'>
          <img src={ProjectVector} alt="Project management kanban board illustration" width={600} height={400} className='rounded-md' />
        </div>
        <div className='absolute left-[-80px]'>
          <img src={Background} alt="Background" width={608} height={448} />
        </div>
      </div>
    </section>
  )
}

export default ProjectManagement
