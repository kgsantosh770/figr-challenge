import blueStar from '../../assets/images/blue-start.svg';
import mobileIcon from '../../assets/images/mobile-icon.svg';
import desktopIcon from '../../assets/images/desktop-icon.svg';
import desktopSample from '../../assets/images/desktop-demo.svg';
import { useRef, useEffect } from 'react';

const MobileExperience = () => {

    const cardRef = useRef(null);
    const THRESHOLD = 1;


    useEffect(() => {
        const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
        const card = cardRef.current;
        function handleHover(e) {
            const { clientX, clientY, currentTarget } = e;
            const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

            const horizontal = (clientX - offsetLeft) / clientWidth;
            const vertical = (clientY - offsetTop) / clientHeight;
            const rotateX = (THRESHOLD - horizontal * THRESHOLD).toFixed(2);
            const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

            card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
        }

        function resetStyles(e) {
            card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
        }

        if (!motionMatchMedia.matches) {
            card.addEventListener("mousemove", handleHover);
            card.addEventListener("mouseleave", resetStyles);
        }

        return (() => {
            card.removeEventListener("mousemove", handleHover);
            card.removeEventListener("mouseleave", resetStyles);
        })
    }, [])



    return (
        <div className='flex pb-64 justify-between px-48 overflow-x-hidden'>
            <div className='left-section w-[45%] pt-16'>
                <div className='flex items-center'>
                    <img src={blueStar} alt="star" className='inline' />
                    <span className='text-figr-text-blue pl-2'>Mobile Experience</span>
                </div>
                <p className='block mt-2 text-6xl font-bold text-white'>
                    Korem ipsum dolor sit amet
                </p>
                <p className='block mt-5 text-lg text-figr-grey'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
            </div>
            <div className='right-section w-[45%] relative'>
                <div className='flex justify-center rounded-md overflow-hidden w-max mx-auto mb-5'>
                    <div className='bg-gray-800 px-3 py-3'>
                        <img className="w-6 aspect-square" src={desktopIcon} alt="desktop" />
                    </div>
                    <div className='bg-gray-900 px-3 py-3'>
                        <img className="w-6 aspect-square" src={mobileIcon} alt="mobile" />
                    </div>
                </div>
                <div ref={cardRef} className='w-[40rem]'>
                    <img className='w-full' src={desktopSample} alt='desktop-demo' />
                </div>
            </div>
        </div>
    )
}

export default MobileExperience