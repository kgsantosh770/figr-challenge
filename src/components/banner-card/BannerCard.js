import arrowRight from '../../assets/images/arrow-right.svg'
import blocksText from '../../assets/images/blocks-text.png'
import arrowRightSmall from '../../assets/images/arrow-right-small.png'
import galleryIcon from '../../assets/images/gallery-icon.svg'
import moreIcon from '../../assets/images/triple-dot.svg'
import cursorPink from '../../assets/images/cursor-pink.svg'
import cursorBlue from '../../assets/images/cursor-blue.svg'

const BannerCard = () => {
    return (
        <div className='block mt-2 mx-auto bg-dotted-pattern bg-[length:100%_100%] bg-no-repeat max-w-[1040px] relative cursor-figma-green'>
            <div className='inner-box flex items-center pt-32 pb-28 pl-7 pr-20 justify-between'>
                <div className='w-[43%]'>
                    <a href="#h" className='bg-figr-blue w-max rounded-full py-2 pl-4 pr-3 hover:pr-5 text-white text-xs group flex justify-between items-center transition-all duration-300 cursor-figma-green'>
                        <span>✨ $7.5M seed raised with Accel & Square Peg</span>
                        <img src={arrowRight} alt="arrow" className='inline pl-2 w-6 relative left-0 group-hover:left-2 transition-position duration-300' />
                    </a>
                    <p className='text-white text-6xl font-bold pt-10'>Impactful stories. Made effortlessly</p>
                    <p className='text-[#79787B] text-md pt-5'>Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                </div>
                <div className='rounded-lg overflow-hidden flex border border-[#292929]'>
                    <div className='px-4 py-8'>
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
                    <div className='bg-[#606060] w-72'></div>
                </div>
            </div>
            <img src={cursorPink} alt="cursor-pink" className='absolute top-[21rem] left-[22.5rem]'/>
            <img src={cursorBlue} alt="cursor-blue" className='absolute bottom-28 left-52'/>
        </div>
    )
}

export default BannerCard