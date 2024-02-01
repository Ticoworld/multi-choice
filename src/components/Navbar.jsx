import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react"; 
const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
      };
    return (
    <div className="navbar flex justify-between content-center py-3 sticky top-0 z-20 px-7 bg-violet-700 items-center shadow-md">
        <div className="logo">
           <img src="/5.png" alt="" className="w-16"/>
        </div>
        <div className={`lg:flex lg:static lg:bg-transparent lg:justify-between lg:flex-row lg:auto ${isMobileMenuOpen ? ` justify-between items-center flex-col gap-4 fixed top-12 right-14 bg-violet-200 text-violet-950 rounded-md transition-all`: `hidden`}`}>
            
            <nav className="flex flex-col justify-start items-start lg:flex-row">
            <Link className="px-14 text-violet-950 font-bold my-2 py-2 w-full lg:w-auto hover:text-violet-800 lg:text-violet-50 lg:px-5">Home</Link>
            <div className="underline3 lg:hidden"></div>
            <Link className="px-14 text-violet-950 font-bold my-2 py-2 w-full lg:w-auto hover:text-violet-800 lg:text-violet-50 lg:px-5">About</Link>
            <div className="underline3 lg:hidden"></div>
            <Link className="px-14 text-violet-950 font-bold my-2 py-2 w-full lg:w-auto hover:text-violet-800 lg:text-violet-50 lg:px-5">Faqs</Link>
            <div className="underline3 lg:hidden"></div>
            <Link className="px-14 text-violet-950 font-bold my-2 py-2 w-full lg:w-auto hover:text-violet-800 lg:text-violet-50 lg:px-5">Our Policy</Link>
            <div className="underline3 lg:hidden"></div>
            <Link className="px-14 text-violet-950 font-bold my-2 py-2 w-full lg:w-auto hover:text-violet-800 lg:text-violet-50 lg:px-5">Buy Bitcoin</Link>
            <div className="underline3 lg:hidden"></div> 
        </nav>
        <div className="flex gap-3 my-3 justify-between px-2"> 
        <Link to='/login'> 
            <button className="rounded-full bg-blue-600 px-5 py-2  text-blue-100">Login</button>
        </Link> 
        <Link to='/register'>
              <button className="rounded-full bg-blue-600 px-5 py-2  text-blue-100 lg:hidden"><p>Signup</p></button>
        </Link>
        </div>
        </div>
      <BiMenuAltRight className="text-white font-bold text-2xl lg:hidden cursor-pointer" onClick={toggleMobileMenu} />
        </div>
    );
};

export default Navbar;
