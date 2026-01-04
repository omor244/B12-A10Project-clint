import { FaFacebook, FaInstagram, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router'; // Ensure you have react-router-dom installed
import logo from '../../assets/logo.png.png';

const Footer = () => {
    return (
        <footer className="bg-[#1f2937] text-white border-t border-gray-700">
       
            <div className="footer sm:footer-horizontal p-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">

          
                <aside className="space-y-4">
                    <img className='max-w-56' src={logo} alt="EcoTrack Logo" />
                    <div className="space-y-2 opacity-80 font-poppins">
                        <p className="flex items-center gap-2">
                            <FaEnvelope className="text-[#0EA5E9]" />
                            <span>support@ecotrack.com</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <FaPhoneAlt className="text-teal-400" />
                            <span>+880 1234 567890</span>
                        </p>
                    </div>
                </aside>

             
                <nav className="font-poppins">
                    <h6 className="footer-title text-[#0EA5E9] opacity-100 mb-4">Navigation</h6>
                    <div className="flex flex-col gap-2">
                        <Link to="/" className="link link-hover hover:text-[#0EA5E9] transition-colors">Home</Link>
                        <Link to="/challenges" className="link link-hover hover:text-[#0EA5E9] transition-colors">  Challenges </Link>
                        <Link to="/trips" className="link link-hover hover:text-[#0EA5E9] transition-colors">Trips</Link>
                        <Link to="/dashboard" className="link link-hover hover:text-[#0EA5E9] transition-colors">User Dashboard</Link>
                    </div>
                </nav>

          
                <nav className="font-poppins">
                    <h6 className="footer-title text-[#0EA5E9] opacity-100 mb-4">Social Community</h6>
                    <div className='flex items-center gap-5 text-2xl'>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#0EA5E9] hover:-translate-y-1 transition-all">
                            <FaFacebook />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#0EA5E9] hover:-translate-y-1 transition-all">
                            <FaXTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#0EA5E9] hover:-translate-y-1 transition-all">
                            <FaInstagram />
                        </a>
                    </div>
                </nav>
            </div>

          
            <div className="footer footer-center p-6 border-t border-gray-700 bg-[#1a222c] text-sm opacity-70">
                <p className="font-poppins flex items-center">
                    Copyright © {new Date().getFullYear()} - <span className="text-[#0EA5E9] font-semibold">EcoTrack</span> — Sustainable Living Community
                </p>
            </div>
        </footer>
    );
};

export default Footer;