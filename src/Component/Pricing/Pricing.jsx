import React from 'react'
import { FiCheckCircle } from "react-icons/fi";
import HeadingWaves from '../../assets/images/heading-waves.png'

const Pricing = () => {
    return (
        <section>
            <div className='max-w-[var(--breakpoint-desktop)] mx-auto'>
                <div className='text-center max-w-[60%] mx-auto'>
                    <h2 className="text-[clamp(32px,6.08695652vw,72px)] font-bold text-[var(--text-color)] leading-[1.1]">
                        Choose{" "}
                        <span
                            className="relative inline-block before:content-[''] before:absolute before:left-0 before:bottom-[-20px] before:w-full before:h-[65px] before:bg-no-repeat before:bg-contain before:-z-10"
                            style={{
                                backgroundImage: `url(${HeadingWaves})`,
                                backgroundRepeat: `no-repeat`,
                                backgroundPositionY: `bottom`
                            }}
                        >
                            Your Plan
                        </span>
                    </h2>
                    <p className='mt-[40px] text-[var(--text-color)] text-[clamp(16px,3.47826087vw,20px)]'>Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</p>
                </div>

                <div className='grid gap-6 md:grid-cols-3 mt-[60px] items-center px-4'>

                    <div className='border-1 border-[#FFE492] rounded-xl p-[44px]'>
                        <h3 className='text-[var(--text-color)] font-bold text-[clamp(24px,6.26086957vw,36px)]'>Free</h3>
                        <strong className='text-[var(--text-color)] text-[clamp(24px,6.26086957vw,36px)] py-[10px] block'>$0</strong>
                        <p className='text-[clamp(18px,6.26086957vw,21px)]'>Capture ideas and find them quickly</p>

                        <div className='pt-[25px]'>
                            <ul className='flex flex-col gap-7'>
                                <li className='flex items-center gap-5 text-[var(--text-color)]'><FiCheckCircle className='text-[18px]' />Sync unlimited devices</li>
                                <li className='flex items-center gap-5 text-[var(--text-color)]'><FiCheckCircle className='text-[18px]' />10 GB monthly uploads</li>
                                <li className='flex items-center gap-5 text-[var(--text-color)]'><FiCheckCircle className='text-[18px]' />200 MB max. note size</li>
                                <li className='flex items-center gap-5 text-[var(--text-color)]'><FiCheckCircle className='text-[18px]' />Customize Home dashboard and access extra widgets</li>
                                <li className='flex items-center gap-5 text-[var(--text-color)]'><FiCheckCircle className='text-[18px]' />Connect primary Google Calendar account</li>
                                <li className='flex items-center gap-5 text-[var(--text-color)]'><FiCheckCircle className='text-[18px]' />Add due dates, reminders, and notifications to your tasks</li>
                            </ul>
                        </div>
                    </div>

                    <div className='bg-[var(--bg-primary)] rounded-xl px-[44px] py-[90px] transform'>
                        <h3 className='text-white font-bold text-[clamp(24px,6.26086957vw,36px)]'>Personal</h3>
                        <strong className='text-[#FFE492] text-[clamp(24px,6.26086957vw,36px)] py-[10px] block'>$11.99</strong>
                        <p className='text-[clamp(18px,6.26086957vw,21px)] text-white'>Capture ideas and find them quickly</p>

                        <div className='pt-[25px]'>
                            <ul className='flex flex-col gap-7'>
                                <li className='flex items-center gap-5 text-white'><FiCheckCircle className='text-[18px] text-[#FFE492]' />Sync unlimited devices</li>
                                <li className='flex items-center gap-5 text-white'><FiCheckCircle className='text-[18px] text-[#FFE492]' />10 GB monthly uploads</li>
                                <li className='flex items-center gap-5 text-white'><FiCheckCircle className='text-[18px] text-[#FFE492]' />200 MB max. note size</li>
                                <li className='flex items-center gap-5 text-white'><FiCheckCircle className='text-[18px] text-[#FFE492]' />Customize Home dashboard and access extra widgets</li>
                                <li className='flex items-center gap-5 text-white'><FiCheckCircle className='text-[18px] text-[#FFE492]' />Connect primary Google Calendar account</li>
                                <li className='flex items-center gap-5 text-white'><FiCheckCircle className='text-[18px] text-[#FFE492]' />Add due dates, reminders, and notifications to your tasks</li>
                            </ul>
                        </div>
                    </div>

                    <div className='border-1 border-[#FFE492] rounded-xl p-[44px]'>
                        <h3 className='text-[var(--text-color)] font-bold text-[clamp(24px,6.26086957vw,36px)]'>Organization</h3>
                        <strong className='text-[var(--text-color)] text-[clamp(24px,6.26086957vw,36px)] py-[10px] block'>$49.99</strong>
                        <p className='text-[clamp(18px,6.26086957vw,21px)]'>Capture ideas and find them quickly</p>

                        <div className='pt-[25px]'>
                            <ul className='flex flex-col gap-7'>
                                <li className='flex items-center gap-5 text-[var(--text-color)]'><FiCheckCircle className='text-[18px]' />Sync unlimited devices</li>
                                <li className='flex items-center gap-5 text-[var(--text-color)]'><FiCheckCircle className='text-[18px]' />10 GB monthly uploads</li>
                                <li className='flex items-center gap-5 text-[var(--text-color)]'><FiCheckCircle className='text-[18px]' />200 MB max. note size</li>
                                <li className='flex items-center gap-5 text-[var(--text-color)]'><FiCheckCircle className='text-[18px]' />Customize Home dashboard and access extra widgets</li>
                                <li className='flex items-center gap-5 text-[var(--text-color)]'><FiCheckCircle className='text-[18px]' />Connect primary Google Calendar account</li>
                                <li className='flex items-center gap-5 text-[var(--text-color)]'><FiCheckCircle className='text-[18px]' />Add due dates, reminders, and notifications to your tasks</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing
