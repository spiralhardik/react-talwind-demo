import React from 'react'
import Background from '../../assets/images/work-background.png'
import HeadingWaves from '../../assets/images/heading-waves.png'
import { FaArrowRightLong } from 'react-icons/fa6'
import MultiDeviceVector from '../../assets/images/multi-device-vector.svg'

const YourWork = () => {
    return (
        <section className='bg-[var(--bg-primary)] relative'>
            <div className='max-w-[var(--breakpoint-desktop)] mx-auto'>
                <div className='text-center max-w-[80%] mx-auto'>
                    <h2 className="text-[clamp(32px,6.08695652vw,72px)] font-bold text-white leading-[1.1]">
                        Your Work, Everywhere {" "}
                        <span
                            className="relative inline-block before:content-[''] before:absolute before:left-0 before:bottom-[-20px] before:w-full before:h-[65px] before:bg-no-repeat before:bg-contain before:-z-10"
                            style={{
                                backgroundImage: `url(${HeadingWaves})`,
                                backgroundRepeat: `no-repeat`,
                                backgroundPositionY: `bottom`
                            }}
                        >
                            Your Are
                        </span>
                    </h2>
                    <p className='mt-[40px] text-white text-[clamp(16px,3.47826087vw,20px)]'>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!.</p>
                    <button className='bg-[var(--btn-bg)] px-[30px] py-[14px] rounded-[8px] text-[18px] text-white inline-flex items-center gap-2.5 mt-[60px] cursor-pointer'>Try Taskey <span><FaArrowRightLong /> </span> </button>
                </div>
                <div className='absolute left-[-20px] top-[-90px]'>
                    <img src={Background} alt="Background" width={608} height={691} className='w-full' />
                </div>
            </div>
        </section>
    )
}

export default YourWork
