import { useLocation } from "react-router-dom";
import { BiMapAlt, BiMenu, BiPhoneCall, BiX } from "react-icons/bi";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { navigation } from "../constants/main";
import { useState, useEffect } from "react";
import logo from '../assets/Images/Logo.png';

const Header = () => {
    const pathname = useLocation();
    const [openNavigation, setOpenNavigation] = useState(false);
    const [showShadow, setShowShadow] = useState(false);

    const toggleNavigation = () => {
        setOpenNavigation(!openNavigation);
    };

    const handleClick = () => {
        if (openNavigation) {
            setOpenNavigation(false);
        }
    };

    // Handle scroll event to toggle shadow
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setShowShadow(true);
            } else {
                setShowShadow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`fixed z-[999] top-0 left-0 w-full h-[8rem] bg-white shadow-gray-100 transition-shadow ${showShadow ? 'shadow-sm' : 'shadow-none'}`}
        >
            <div className="hidden md:flex py-2 px-4 md:px-8 items-center justify-between border-b border-gray-100 text-gray-500">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <BiPhoneCall />
                        <p className="font-medium text-sm">+1 234 567 890</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <BiMapAlt />
                        <p className="font-medium text-sm">123 Main St, Anytown USA</p>
                    </div>
                </div>
                {/* Right Side */}
                <div className="flex items-center space-x-4">
                    <FaFacebook />
                    <FaXTwitter />
                    <FaInstagram />
                </div>
            </div>
            <div className={`bg-white flex items-center ${openNavigation ? "justify-center" : "justify-between"} px-2 md:px-8 max-lg:py-2`}>
                <a className={`${openNavigation ? "hidden" : "block"} w-[12rem] z-0`} href="#hero">
                    <img src={logo} width={90} height={90} alt="Logo" className="object-cover" />
                </a>

                <nav
                    className={`${openNavigation ? "flex pt-10" : "hidden"} lg:static lg:flex lg:mx-auto lg:bg-transparent`}
                >
                    <div className="z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                        {navigation.map((item) => (
                            <a
                                key={item.id}
                                href={item.url}
                                onClick={handleClick}
                                className={`block text-2xl uppercase transition-colors hover:text-primary ${item.onlyMobile ? "lg:hidden" : ""} px-8 py-8 md:py-4 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash ? "z-2 lg:text-primary" : "text-black"} lg:leading-5 lg:hover:text-primary xl:px-10`}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                </nav>

                <a
                    href="#signup"
                    className="button hidden mr-4 text-sm border border-primary hover:bg-primary hover:text-white rounded-3xl font-semibold px-8 py-2 transition-colors lg:block"
                >
                    Contact
                </a>
                {/* For Mobile */}
                <button
                    className={`${openNavigation ? "absolute top-6 right-6" : "block"} lg:hidden`}
                    onClick={toggleNavigation}
                >
                    {openNavigation ? <BiX size={32} /> : <BiMenu size={32} />}
                </button>
            </div>
        </div>
    );
};

export default Header;
