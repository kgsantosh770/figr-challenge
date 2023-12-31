import arrowRight from '../../assets/images/arrow-right.svg'
import blocksText from '../../assets/images/blocks-text.png'
import arrowRightSmall from '../../assets/images/arrow-right-small.png'
import galleryIcon from '../../assets/images/gallery-icon.svg'
import moreIcon from '../../assets/images/triple-dot.svg'
import cursorPink from '../../assets/images/cursor-pink.svg'
import cursorBlue from '../../assets/images/cursor-blue.svg'
import dottedBg from '../../assets/images/dotted-bg.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

const BannerCard = () => {
    const bannerBox = useRef(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (window.innerWidth > 768) {
            gsap.to(
                bannerBox.current,
                {
                    rotateX: -70,
                    scrollTrigger: {
                        trigger: bannerBox.current,
                        start: 'top top',
                        end: '170% bottom',
                        scrub: true,
                    }
                },
            )
        }
    }, [])

    return (
        <div className='banner block mx-auto max-w-[1040px] relative cursor-figma-green perspective-1000'>
            <div ref={bannerBox} className='inner-box bg-transparent flex-col-reverse lg:flex-row flex items-center lg:pt-32 lg:pb-28 px-7 lg:pl-7 lg:pr-20 justify-between relative'>
                <div className='w-full lg:w-[43%]'>
                    <a href="#h" className='bg-figr-blue w-max rounded-full py-2 pl-4 pr-3 hover:pr-5 text-white text-xs group hidden lg:flex justify-between items-center transition-all duration-300 cursor-figma-green'>
                        <span>✨ $7.5M seed raised with Accel & Square Peg</span>
                        <img src={arrowRight} alt="arrow" className='inline pl-2 w-6 relative left-0 group-hover:left-2 transition-position duration-300' />
                    </a>
                    <p className='text-white text-6xl font-bold pt-10 lg:pt-14'>Impactful stories. Made effortlessly</p>
                    <p className='text-[#79787B] text-md pt-5 lg:pt-10'>Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                </div>
                <div className='rounded-lg overflow-hidden flex border border-[#292929] w-full lg:w-auto min-h-[20rem] lg:min-h-[auto]'>
                    <div className='px-4 py-8 hidden lg:block'>
                        <img className='w-16 mb-3' src={blocksText} alt="blocks" />
                        <ul>
                            {
                                ['Cards', 'Numbers', 'Trends', 'People', 'Embeds', 'Timeline', 'More'].map((listItem, index) => (
                                    <li key={index} className={`flex items-center py-2 px-1 mr-4 ${index === 0 ? 'bg-item-pattern bg-no-repeat bg-cover' : ''}`}>
                                        <button className='flex items-center gap-4 w-full cursor-figma-green'>
                                            <div className={`inline-block rounded-xl p-2 aspect-square ${index === 0 ? 'bg-[#409FD4]' : 'bg-icon-pattern bg-cover'}`}>
                                                <img className='w-2 h-2 my-auto' src={listItem !== 'More' ? galleryIcon : moreIcon} alt={`${listItem}-icon`} />
                                            </div>
                                            <span className='text-white text-xs'>{listItem}</span>
                                            <img className='w-2 ml-auto' src={arrowRightSmall} alt="arrow" />
                                        </button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='bg-[#606060] w-full lg:w-72'></div>
                </div>
                <img src={dottedBg} alt="banner-bg" className='absolute top-0 left-0 w-full h-full -z-10 hidden lg:block' />
                <img src={cursorPink} alt="cursor-pink" className='absolute top-[28rem] lg:top-[21rem] left-64 lg:left-[22.5rem]' />
                <img src={cursorBlue} alt="cursor-blue" className='absolute bottom-20 lg:bottom-24 left-52' />
            </div>
        </div>
    )
}

export default BannerCard