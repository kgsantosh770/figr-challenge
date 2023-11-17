import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TextHighlighter = () => {
    const textWrapper = useRef(null);
    const text = "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.";

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let words = textWrapper.current.querySelectorAll('.word');

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: textWrapper.current,
                start: "-12% top",
                end: `+=${textWrapper.current.clientHeight - 90}px`,
                pin: true,
                scrub: true,
            }
        })

        words.forEach((word, index) => {
            timeline.to(word, {
                color: 'white',
                delay: 0,
                stagger: 0.05,
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div ref={textWrapper} className="mt-20 px-7 lg:px-0">
            <p className="text-[#202020] text-3xl lg:text-[2.6rem] font-bold lg:w-[70%] mx-auto leading-snug">
                {text.split(' ').map((word, index) => (
                    <span key={index} className="word">{word} </span>
                ))}
            </p>
        </div>
    );
};

export default TextHighlighter;
