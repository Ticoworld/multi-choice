import Header from "../components/Header";
import { FiLink } from "react-icons/fi";
import { MdContentCopy } from "react-icons/md";
const UserDashBoardReferral = () => {
    return (<div>
        <Header />
      <div className="px-28 py-12 pb-32">
        <div className="flex items-center justify-center flex-col">
            <img src="/src/images/eadb74787dda41cc6333341e55293432.gif" alt="" className="w-500 py-3"/>
            <p className="text-gray-700 text-center">you haven't referred any user yet, click below to copy your <br /> referral link to earn 10% of any deposit made by user</p>
            <div className="w-3/5">
                    <div className="flex justify-between items-center p-2 rounded-md bg-violet-100 border-violet-400 border-solid border mt-3 ">  
                <div className="flex items-center justify-between gap-2">
                    <div className="border-gray-400 border text-md px-2 py-1 rounded-sm"><FiLink /></div>
                        <div className="text-sm">multichainfinance.com/user/johnnewman</div>  
                </div>   
                        <div className="border-gray-400 border text-md px-2 py-1 rounded-sm"><MdContentCopy /></div>
                </div>
            </div>
        </div>
      </div>
  </div>);
};

export default UserDashBoardReferral;