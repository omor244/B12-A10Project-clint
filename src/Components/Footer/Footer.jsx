import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

import logo from '../../assets/logo.png.png'
const Footer = () => {

    return (
        <>
            <footer className="footer sm:footer-horizontal bg-[#1f2937] text-base-content p-10">
                <aside>
                    <img className='max-w-64' src={logo} alt="" />
                    <div>
                        <p>Copyright © {new Date().getFullYear()} - EcoTrack — Sustainable Living
                            Community</p>
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title">Home</h6>
                    <a className="link link-hover">  Contact</a>
                    <a className="link link-hover"> About</a>
                    <a className="link link-hover"> Dashboard</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className='flex items-center gap-4 text-2xl'>
                        <a className="link link-hover"><FaFacebook></FaFacebook></a>
                        <a className="link link-hover"><FaXTwitter/></a>
                        <a className="link link-hover"><FaInstagram></FaInstagram></a>
                    </div>
                </nav>
            </footer>

        </>

    );
};

export default Footer;