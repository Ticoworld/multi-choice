import { Link } from "react-router-dom";
const Footer = () => {
  return (
        <div className="footer bg-gray-900">
            <div className=" lg:px-28 px-10 py-12">
                    <h3 className="text-center text-lg font-semibold text-violet-100">Trusted Partners</h3>
                    <div className="grid grid-cols-3 md:grid-cols-5 p-3">
                        <img src="/a-xs-light.png" alt="1" />
                        <img src="/b-xs-light.png" alt="2" />
                        <img src="/c-xs-light.png" alt="3" />
                        <img src="/d-xs-light.png" alt="4" />
                        <img src="/e-xs-light.png" alt="5" />
                    </div>
                    <div className="text-violet-300">
                        <div className="nav flex justify-center lg:gap-32 py-3 flex-col lg:flex-row text-sm">
                            <div className="flex flex-col">
                                <Link>Home</Link>
                                <Link>About</Link>
                                <Link>Roadmap</Link>
                            </div>
                            <div className="flex flex-col">
                                <Link>Faqs</Link>
                                <Link>Why Choose Us</Link>
                                <Link>Buy Bitcoin</Link>
                            </div>
                        </div>
                        <div className="flex justify-between items-center py-2 flex-col-reverse text-sm md:flex-row">
                            <p>&copy; copyright 2024</p>
                            <div className="">
                                <Link className="pr-6">Privacy Policy</Link>
                                <Link>Terms and Condition</Link>
                            </div>
                        </div>
                    </div>
            </div> 
        </div>
        );
};

export default Footer;
