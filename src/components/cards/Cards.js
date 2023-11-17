import blueStar from '../../assets/images/blue-start.svg';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Cards = ({ className }) => {
    const card1 = useRef(null);
    const card2 = useRef(null);
    const card3 = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (window.innerWidth > 768) {
            gsap.fromTo(
                card1.current,
                {
                    rotateY: 90,
                    opacity: 0.9,
                },
                {
                    rotationY: 0,
                    opacity: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: card1.current,
                        start: '-40% 70%',
                        end: 'bottom bottom',
                        scrub: true,
                    }
                }
            )
            gsap.fromTo(
                card3.current,
                {
                    scale: 0.6,
                    opacity: 0.8,
                },
                {
                    scale: 1,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: card3.current,
                        start: '-80% 70%',
                        end: '170% 100%',
                        scrub: true,
                    }
                }
            )

            gsap.fromTo(
                ['.wrapper'],
                {
                    yPercent: 0,
                },
                {
                    yPercent: -13,
                    scrollTrigger: {
                        trigger: card2.current,
                        start: '30% 70%',
                        end: '170% 100%',
                        scrub: true,
                    }
                }
            )
        }
    }, [])

    return (
        <div className={`${className ? className : ''} pb-10 overflow-hidden`}>
            <div className='px-7 lg:px-0 lg:ml-[18%]'>
                <div className='flex items-center'>
                    <img src={blueStar} alt="star" className='inline' />
                    <span className='text-figr-text-blue pl-2'>Introducing Blocks</span>
                </div>
                <p className='block mt-5 text-7xl font-bold text-white w-full lg:w-[50%]'>A new, easy way to create.</p>
            </div>
            <div className='cards-group flex flex-col lg:flex-row flex-nowrap lg:gap-5 justify-center items-center lg:items-start relative mt-5 lg:mt-0 px-5 lg:px-0'>
                <div className='wrapper flex-shrink-0 relative lg:-top-20 w-full lg:w-64 perspective-1000'>
                    <div ref={card1} className='w-full h-52 bg-figr-grey rounded-xl relative'></div>
                    <div className='mt-5 w-full h-64 bg-figr-lightgrey rounded-xl relative'></div>
                </div>
                <div className='hidden lg:block flex-shrink-0 relative w-full lg:w-64'>
                    <div ref={card2} className='mt-5 w-full h-72 bg-figr-lightgrey rounded-xl top-10'></div>
                    <div className='mt-5 w-full h-16 bg-figr-grey rounded-xl top-10'></div>
                </div>
                <div className='hidden lg:block flex-shrink-0 w-full lg:w-64 h-64 bg-figr-grey rounded-xl relative top-5 lg:top-28'></div>
                <div className='hidden lg:block wrapper flex-shrink-0 relative w-64 top-10'>
                    <div className='mt-7 w-full h-16 bg-figr-grey rounded-xl'></div>
                    <div className='mt-5 w-full h-40 bg-figr-lightgrey rounded-xl'></div>
                </div>
                <div className='hidden lg:block flex-shrink-0 relative w-56 -top-56 perspective-1000'>
                    <div ref={card3} className='w-full h-56 bg-figr-grey rounded-xl relative top-32'></div>
                    <div className='mt-5 w-full h-72 bg-figr-lightgrey rounded-xl relative top-32'></div>
                </div>
                <div className='hidden lg:block wrapper flex-shrink-0 relative w-72'>
                    <div className='mt-5 w-full h-96 bg-figr-lightgrey rounded-xl top-10'></div>
                    <div className='mt-7 w-full h-16 bg-figr-lightgrey rounded-xl top-10'></div>
                </div>
            </div>
        </div>
    )
}

export default Cards