import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import HeroImage from '../../assets/images/hero-bg.png';
import HeroVector from '../../assets/images/hero-vector.svg';  

const Hero = () => {
    return (
        <section className='bg-[var(--bg-primary)] py-20 bg-cover bg-no-repeat' style={{backgroundImage: `url(${HeroImage})`}}>
            <div className='max-w-[var(--breakpoint-desktop)] mx-auto flex flex-col md:flex-row px-4 gap-6 items-center'>
                <div className='w-full md:w-1/2'>
                    <h1 className='text-[clamp(35px,6.08695652vw,64px)] text-white font-bold leading-18'>Get More Done with Whitepace</h1>
                    <p className='text-white text-lg pt-[24px]'>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>

                    <button  className='bg-[var(--btn-bg)] px-[20px] py-[18px] rounded-[8px] text-[18px] text-white inline-flex items-center gap-2.5 mt-[60px] cursor-pointer'>Try Whitepace free ? <span><FaArrowRightLong /> </span> </button>
                    </div>
                <div className='w-full md:w-1/2 md:flex md:justify-end'>
                <img src={HeroVector} alt="Productivity workspace illustration" width={600} height={400} className='rounded-md' />
                </div>
            </div>
        </section>
    )
}

export default Hero
