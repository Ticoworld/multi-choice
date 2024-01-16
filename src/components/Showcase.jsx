
import { Link } from "react-router-dom";
import {RiRocketFill} from 'react-icons/ri'
const Showcase = () => {
  return (
    <div className=" showcase px-28">
        <div className="showcase-content text-blue-100">
          <div className="m-auto">
          <p className="text-5xl font-bold leading-normal pt-11 pb-6 text-blue-50">
              Take Your Investments to To A 
              <br /> 
              Next Level With
               <br />
              <span className="text-blue-500">
                MultiChainFinace
              </span>
              
            </p>
            <p className="text-lg font-medium">
              Trust us to navigate the complexities of the investment market, while you sit back <br /> and watch your wealth flourish. It's time to unlock your financial potential and <br /> embark on a prosperous journey with us.
            </p>
            <Link to='/register'>
              <button className="rounded-xl bg-blue-600 px-6 py-2 flex items-center gap-2 my-6 text-lg"><RiRocketFill/> <p>Signup</p> </button>
            </Link>
            
          </div>   

          
        </div>
    </div>
  )
};

export default Showcase;
