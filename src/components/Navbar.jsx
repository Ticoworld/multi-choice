import { Link } from "react-router-dom";
const Navbar = () => {
   
  return (
    <div className="navbar flex justify-between content-center py-3 sticky top-0 z-20 px-28 bg-violet-700 items-center shadow-md">
        <div className="logo">
           <img src="/src/images/5.png" alt="" className="w-16"/>
        </div>
        <div className="flex justify-between items-center">
            <nav>
            <Link className="px-5 text-blue-50">Home</Link>
            <Link className="px-5 text-blue-50">About</Link>
            <Link className="px-5 text-blue-50">Faqs</Link>
            <Link className="px-5 text-blue-50">Our Policy</Link>
            <Link className="px-5 text-blue-50">Buy Bitcoin</Link>
        </nav>
        <Link to='/login'>
            <button className="rounded-full bg-blue-600 px-5 py-2  ml-8 text-blue-100">Login</button>
        </Link>
        </div>
        </div>
    );
};

export default Navbar;
