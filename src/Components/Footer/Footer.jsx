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
                    <a className="link link-hover"> Dashboard</a>
                    <a className="link link-hover"> About</a>
                    <a className="link link-hover">  Devices</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
          
        </>

    );
};

export default Footer;