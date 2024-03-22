import { faInstagram, faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-[#263984] text-white">
            <div className="max-w-screen-2xl mx-auto px-4 py-4 L-border">
            <div className="lg:py-10 flex flex-col md:flex-row md:justify-between gap-5">
                <div className="md:w-[40%]">
                    <h2 className="text-3xl font-semibold">About</h2>
                    <p className="py-6 text-gray-300">
                        Clipping Path Action is your trusted virtual photo editing studio. We provide manual, cost-effective, pixel-perfect clipping paths and other photo editing services for photographers, eCommerce, and brands.
                    </p>
                    <div className="text-gray-400 flex gap-5 flex-col md:flex-row">
                        <p> 
                            <FontAwesomeIcon className="text-[#FF5722]" icon={faEnvelope} /> <a href="mailto:info@clippingpathaction.com">info@clippingpathaction.com</a>
                        </p>
                        <p> <FontAwesomeIcon className="text-[#FF5722]" icon={faPhone} /> <a href="tel:+17185771232">+1 718 577 1232</a></p>
                    </div>
                 </div>
                {/* ------------------------------------------------------ */}
                <div className="lg:w-[60%] md:flex justify-around">
                    <div>
                        <h2 className="text-3xl font-semibold">Useful Links</h2>
                        <nav className="py-6 text-gray-300">
                            <ul className="space-y-2">
                                <li className="hover:text-[#FF5722]"><a href="">Terms & Conditions</a></li>
                                <li className="hover:text-[#FF5722]"><a href="">Disclaimer Policy</a></li>
                                <li className="hover:text-[#FF5722]"><a href="">Privacy Policy</a></li>
                                <li className="hover:text-[#FF5722]"><a href="">Refund Policy</a></li>
                            </ul>
                        </nav>
                    </div>
                    {/* ------------------------------------------------------ */}
                    <div>
                        <h2 className="text-3xl font-semibold">Help</h2>
                        <nav className="py-6 text-gray-300">
                            <ul className="space-y-2">
                                <li className="hover:text-[#FF5722]"><a href="">Contact Us</a></li>
                                <li className="hover:text-[#FF5722]"><a href="">About Us</a></li>
                                <li className="hover:text-[#FF5722]"><a href="">Portfolio</a></li>
                                <li className="hover:text-[#FF5722]"><a href="">Blog</a></li>
                            </ul>
                        </nav>
                    </div>
                </div> 
            </div>
            {/* ------------------------------------------------------ */}
            <div className="text-center">
                <div className="text-4xl text-gray-500">
                <a href=""><FontAwesomeIcon className="hover:text-white mr-3" icon={faSquareFacebook} /></a> 
                <a href=""><FontAwesomeIcon className="hover:text-white" icon={faInstagram} /></a>
                </div>

                <div className="text-gray-300">
                    <small>© {currentYear} || All Rights Reserved. Clipping Path Action is a brand of Graphics Action Ltd</small>
                </div>
            </div> 
            {/* ------------------------------------------------------ */}
            </div> 

                 
        </footer>
    );
};

export default Footer;