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
            console.log(card)
            console.log(index*101);
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
    }, [])

    return (
        <div>
            <div className='pin-start flex mt-40 pb-64 justify-between px-48'>
                <div ref={leftSection} className='left-section pt-48 w-[45%]'>
                    <div className='flex items-center'>
                        <img src={blueStar} alt="star" className='inline' />
                        <span className='text-figr-text-blue pl-2'>Workflow</span>
                    </div>
                    <p className='block mt-2 text-6xl font-bold text-white'>
                        Korem ipsum dolor sit amet
                    </p>
                    <p className='block mt-5 text-lg text-figr-grey'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                    </p>
                </div>
                <div ref={rightSection} className='right-section w-[45%] h-[27rem] overflow-hidden relative mt-32 rounded-lg'>
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