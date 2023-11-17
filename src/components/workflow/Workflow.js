import blueStar from '../../assets/images/blue-start.svg';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Workflow = () => {

    const leftSection = useRef(null);
    const rightSection = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const cards = gsap.utils.toArray(".right-section .card:not(:first-child)")
        const allCards = gsap.utils.toArray(".right-section .card")
        allCards.forEach((card, index) => {
            gsap.set(card, { yPercent: index * 101 })
        })

        gsap.to([leftSection.current, rightSection.current], {
            ease: "none",
            scrollTrigger: {
                trigger: '.pin-start',
                endTrigger: rightSection.current,
                start: "2% top",
                end: () => `+=${rightSection.current.clientHeight * allCards.length}px`,
                pin: true,
            }
        });

        cards.forEach((card, index) => {
            let animation = gsap.timeline()
                .to(card, { yPercent: 0 })
                .set(allCards[index], { autoAlpha: 0 })
            ScrollTrigger.create({
                trigger: card,
                start: "top 50%",
                end: "bottom 50%",
                animation: animation,
                scrub: true,
            })
        })


        return (() => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        })
    }, [])

    return (
        <div>
            <div className='pin-start flex flex-col lg:flex-row mt-32 lg:mt-40 pb-10 lg:pb-64 justify-between px-7 lg:px-48'>
                <div ref={leftSection} className='left-section lg:pt-48 w-full lg:w-[45%]'>
                    <div className='flex items-center'>
                        <img src={blueStar} alt="star" className='inline' />
                        <span className='text-figr-text-blue pl-2'>Workflow</span>
                    </div>
                    <p className='block mt-2 text-4xl lg:text-6xl font-bold text-white'>
                        Korem ipsum dolor sit amet
                    </p>
                    <p className='block mt-5 text-md lg:text-lg text-figr-grey'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                    </p>
                </div>
                <div ref={rightSection} className='right-section w-full lg:w-[45%] h-96 lg:h-[27rem] overflow-hidden relative mt-10 lg:mt-32 rounded-lg'>
                    <div className='card absolute h-full w-full bg-figr-grey'></div>
                    <div className='card absolute h-full w-full bg-red-500'></div>
                    <div className='card absolute h-full w-full bg-green-500'></div>
                    <div className='card absolute h-full w-full bg-purple-500'></div>
                    <div className='card absolute h-full w-full bg-green-500'></div>
                    <div className='card absolute h-full w-full bg-purple-500'></div>
                </div>
            </div>
        </div>
    )
}

export default Workflow