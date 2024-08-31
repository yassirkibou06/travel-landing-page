// Footer.js
import React from 'react';
import logo from '../assets/Images/Logo.png';

const Footer = () => {
    return (
        <footer className="border-t border-gray-100 py-10 mt-24">
            <div className="container mx-auto flex flex-col justify-center items-center lg:justify-between lg:items-start px-8">
                <div className="footer-logo flex-shrink-0">
                    <img src={logo} alt="Travel Agency Logo" className="w-32" />
                </div>
                <div className="flex items-center lg:items-start flex-col space-y-2 uppercase">
                    <h3 className="font-semibold mb-2">Our Office</h3>
                    <p className="text-gray-700 text-sm">123 Travel St.</p>
                    <p className="text-gray-700 text-sm">City, Country 45678</p>
                    <p className="text-gray-700 text-sm">Phone: +123 456 7890</p>
                    <p className="text-gray-700 text-sm">Email: info@travelagency.com</p>
                </div>
                <div className="flex items-center lg:items-start flex-col sapce-y-2 uppercase mt-8 lg:mt-0">
                    <h3 className="font-semibold mb-2">Menu</h3>
                    <ul className="space-y-2 text-center lg:text-start">
                        <li><a href="#home" className="text-sm hover:text-primary transition-colors">Home</a></li>
                        <li><a href="#offres" className="text-sm hover:text-primary transition-colors">Offres</a></li>
                        <li><a href="#services" className="text-sm hover:text-primary transition-colors">Services</a></li>
                        <li><a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
