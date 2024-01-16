import { Link } from "react-router-dom";
const Footer = () => {
  return (
        <div className="footer bg-gray-900">
            <div className=" px-28 py-12">
                    <h3 className="text-center text-lg font-semibold text-violet-100">Trusted Partners</h3>
                    <div className="flex justify-between p-3">
                        <img src="/src/images/a-xs-light.png" alt="" />
                        <img src="/src/images/b-xs-light.png" alt="" />
                        <img src="/src/images/c-xs-light.png" alt="" />
                        <img src="/src/images/d-xs-light.png" alt="" />
                        <img src="/src/images/e-xs-light.png" alt="" />
                    </div>
                    <div className="text-violet-300">
                        <div className="nav flex justify-center gap-32 py-3">
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
                        <div className="flex justify-between items-center py-2">
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
