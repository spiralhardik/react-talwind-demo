import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import HeadingWaves from '../../assets/images/heading-waves.png'
import YourImage from '../../assets/images/your-data.png'
import DataSecurityVector from '../../assets/images/data-security-vector.svg'

const YourData = () => {
    return (
        <section>
            <div className='max-w-[var(--breakpoint-desktop)] mx-auto flex flex-col md:flex-row px-4 gap-6 items-center'>

                <div className='w-full md:w-1/2'>
                    <h2 className="text-[clamp(32px,6.08695652vw,72px)] font-bold text-[var(--text-color)] leading-[1.1] ">
                        100%    {" "}
                        <span
                            className="relative inline-block before:content-[''] before:absolute before:left-0 before:bottom-[-20px] before:w-full before:h-[65px] before:bg-no-repeat before:bg-contain before:-z-10"
                            style={{
                                backgroundImage: `url(${HeadingWaves})`,
                                backgroundRepeat: `no-repeat`,
                                backgroundPositionY: `bottom`
                            }}
                        >
                            Your Data
                        </span>
                    </h2>
                    <p className='mt-[40px] text-[var(--text-color)] text-[clamp(16px,3.47826087vw,20px)]'>The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.</p>
                    <button className='bg-[var(--btn-bg)] px-[20px] py-[15px] rounded-[8px] text-[18px] text-white inline-flex items-center gap-2.5 mt-[60px] cursor-pointer'>Read More<span><FaArrowRightLong /> </span> </button>
                </div>

                <div className='w-full md:w-1/2 md:flex md:justify-end'>
                    <img src={DataSecurityVector} alt="Data security and privacy illustration" width={681} height={381} className='rounded-md' />
                </div>
            </div>
        </section>
    )
}

export default YourData
