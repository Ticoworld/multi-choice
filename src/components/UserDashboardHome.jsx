import { BsArrowRight } from "react-icons/bs";
import {IoIosArrowRoundUp,IoIosArrowRoundDown} from 'react-icons/io';
import {  MdOutlineDone, MdOutlineContentCopy  } from "react-icons/md";
import { FiLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import copy from 'clipboard-copy'
import { useState } from "react";
import './dashboard.css';
const UserDashboardHome = ( {userData} ) => {

    const [copied, setCopied] = useState(false);
    const handleCopyToClipboard = () => {
        const textToCopy = 'Your text here';
        copy(textToCopy);
        setCopied(true)

        setTimeout(() => {
            setCopied(false);
          }, 2000);

        console.log('Text copied to clipboard:', textToCopy);
      };

    return <div className="bg-gray-200">
    <div className="lg:px-28 px-10 py-6">
        <div className="">
            <p className="text-gray-500">Welcome!</p>
            <div className="flex justify-start items-center gap-3 py-3">
                <h2 className="font-semibold text-xl uppercase">{userData ? userData.firstname: ''}</h2>
                <Link to="/investments">  
                <div className="flex items-center gap-2 rounded-md bg-gray-50 px-6 py-2 hover:bg-violet-200"><span>Active investment</span><BsArrowRight className="text-sm"/></div></Link>
            </div>
        </div>
        <div className='flex justify-center items-center min-h-screen mt-5'>
        <div className="grid grid-flow-row gap-4 py-10 md:grid-cols-2 xl:grid-cols-3">
            <div className="bg-gray-50 p-7 rounded-md flex-1 w-350 md:w-320">
                <p className="text-gray-500">Invested IRA</p>
                <div className="flex items-center gap-3 justify-start py-2">
                    <p className="text-xs">1.93%</p>
                    <IoIosArrowRoundUp className="text-2xl text-green-700"/>
                </div>
                <p className="text-gray-500 text-sm">IRA Earnings</p>
                <p className="font-semibold">$.000</p>
                <div className="flex gap-4">
                    <p className="text-gray-500">Current Invested IRA</p>
                    <img src="/bar.png" alt="" className="w-28 self-end" />
                </div>
            </div>
            <div className="bg-gray-50 p-7 rounded-md flex-1 w-350 md:w-320">
                <p className="text-gray-500">latest normal investment</p>
                <div className="flex items-center gap-7 justify-start py-2">
                    <div className="text-xl">
                        <span>0.00 USD</span>
                    </div> 
                     <div className="flex items-center gap-4">
                        <p className="text-xs text-red-600">1.93%</p>
                    <IoIosArrowRoundDown className="text-2xl text-red-600"/>
                    </div>
                    
                </div>
                <p className="text-gray-500 text-sm">Intrest Earned</p>
                <p className="font-semibold" >$.000</p>
                <div className="flex gap-4">
                    <div>
                       <p className="text-gray-500">Referral Commission</p>
                       <p className="text-xl">0.00 USD</p> 
                    </div>
                    
                    <img src="/bar2.png" alt="" className="w-32 self-end"/>
                </div>
            </div>
            <div className="bg-gray-50 p-5 rounded-md flex-1 w-350">
                <p className="text-gray-500">Balance in Account</p>
                <div className="flex items-center gap-3 justify-start py-2">
                    <p className="text-2xl py-2">${userData ? userData.funded :`0.00`} USD</p>
                    <IoIosArrowRoundUp className="text-2xl"/>
                </div>
                <p className="text-gray-500 text-sm">Total Withdawals</p>
                <p className="font-semibold">$.000</p>
                <div className="flex gap-0">
                    <div>
                        <p className="text-gray-500 text-sm text-nowrap">Withdrawable Profit After Duration</p>
                        <p className="text-xl">$0.00 USD</p>
                    </div>
                    <img src="/bar3.png" alt="" className="self-start w-24"/>
                </div>
            </div>
        </div>
        </div>
        <div className="py-24">
        <iframe src="https://widget.coinlib.io/widget?type=chart&theme=light&coin_id=859&pref_coin_id=1505" style={{width:"100%",height:"536px",scrolling:"none",marginWidth:"0",marginHeight:"0", frameBorder:"0", border:"0",lineHeight: '14px'}}></iframe>

        </div>
        <div className='flex justify-center items-center min-h-screen mt-5'>
        <div className="flex gap-10 justify-between pb-16 flex-col md:flex-row">
            <div className="p-5 rounded-md bg-gray-50 w-350">
                <div className="flex gap-6">
                    <div>
                        <p className="font-semibold">Refer Us And Earn 10% Of Every Downline Deposit</p>
                        <p className="text-sm text-gray-500">Use the bellow link to invite your friends.</p>
                    </div>
                    <button className="bg-violet-950 text-gray-50 py-2 px-6 rounded-md font-semibold self-start">Invite</button>
                </div>
                <div>
                    <div className="flex justify-between items-center p-2 rounded-md bg-violet-100 border-violet-400 border-solid border mt-10">  
                <div className="flex items-center justify-between gap-2">
                    <div className="border-gray-400 border text-md px-2 py-1 rounded-sm"><FiLink /></div>
                        <div className="text-xs">multichainfinance.com/user/johnnewman</div>  
                </div>   
                        <div className="border-gray-400 border text-md px-2 py-1 rounded-sm cursor-pointer" onClick={handleCopyToClipboard}>
                                {copied ? <MdOutlineDone /> : <MdOutlineContentCopy />}
                        </div>
                </div>
                </div>
                
            </div>
            <div className="p-5 rounded-md bg-gray-50 w-350 ">
                <div className="flex gap-6 justify-between items-center">
                    <p>My Referrals</p>
                    <div>
                        <p className="font-semibold text-xl">0</p>
                        <p className="text-sm text-gray-500">referred users</p>
                    </div>
                    <div>
                        <p className="font-semibold text-xl">0</p>
                        <p className="text-sm text-gray-500">referral Commission</p>
                    </div>
                </div>
                <div className="mt-6">
                    <img src="/bar4.png" alt=""  className="w-full"/>
                </div>
                
            </div>
        </div>
        </div>
    </div>   
  </div>;
};

UserDashboardHome.propTypes = {
    userData: PropTypes.shape({
      firstname: PropTypes.string,
      email: PropTypes.string,
    }),
  };

export default UserDashboardHome;
