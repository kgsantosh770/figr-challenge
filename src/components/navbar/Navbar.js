import logo from '../../assets/images/logo.svg';
import mobileLogo from '../../assets/images/mobile-logo.svg';

const Navbar = () => {
    return (
        <nav className="flex justify-between align-middle py-4 lg:py-8 pl-4 pr-8 text-white">
            <img src={window.innerWidth < 768 ? mobileLogo : logo} alt="logo" />
            <ul className='gap-6 hidden lg:flex'>
                <li className='self-center underline underline-offset-8'><a href='#product'>Product</a></li>
                <li className='self-center hover:underline hover:underline-offset-8'><a href='#story'>Our Story</a></li>
                <li className='self-center hover:underline hover:underline-offset-8'><a href='#careers'>Careers</a></li>
            </ul>
            <button className="bg-white text-black rounded-xl px-4 font-semibold hidden lg:block">
                Join Beta
            </button>
            <button className='block lg:hidden'>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2.5" cy="2.5" r="2.5" fill="white"></circle>
                    <circle cx="15.5" cy="2.5" r="2.5" fill="white"></circle>
                    <circle cx="15.5" cy="15.5" r="2.5" fill="white"></circle>
                    <circle cx="2.5" cy="15.5" r="2.5" fill="white"></circle>
                </svg>
            </button>
        </nav>
    )
}

export default Navbar