import { Link } from "react-router-dom";
import {BiCog, BiExit, BiLock, BiUser} from 'react-icons/bi'
import { FaAngleDown } from "react-icons/fa";
import { HiMiniXMark } from "react-icons/hi2";
import { useState } from "react";
// import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {

  const [userData, setUserData] = useState()
  const [profileInfo, setProfileInfo] = useState(false)
  const userFirstName = userData?.firstname || '';
  const userEmail = userData?.email || '';
  const navigate = useNavigate()


  useEffect(()=>{
      if(localStorage.getItem('token')){
          const getData = async()=>{
              const req = await fetch(`http://localhost:1337/api/getData`,{
                  headers: {
                  'x-access-token': localStorage.getItem('token')
                  }
              })
              const res = await req.json()
              setUserData(res);
              console.log(userData);
              if (res.status === 'error') {
                  navigate('/login')
              }
          }
          getData()
          console.log(getData());
      }
      else{
          navigate('/login')
      }
  },[])
  return (
    <div className=" sticky top-0">
        <div className="flex items-center justify-end px-3 py-4 bg-gray-100"> 
                <Link to='/dashboard' className="px-6">Dashboard</Link>
                <Link to="/fundwallet" className="px-6">Fund Wallet</Link>
                <Link to='/invest' className="px-6">Invest</Link>
                <Link to='/withdraw' className="px-6">Withdraw</Link>
                <Link to='/transactions' className="px-6">Transactions</Link>
                <Link to='/referrals' className="px-6">Referrals</Link>
                <Link to='/irainvest' className="px-6">IRA</Link>
                <div className="rounded-full w-32 flex items-center justify-between shadow py-2 px-1 cursor-pointer gap-3" onClick={()=>{
                  setProfileInfo(true);
                }}>
                <div className="rounded-full bg-gray-300 p-1 text-lg"><BiUser/></div>
                <h3 className="font-semibold">{userFirstName}</h3>
                <div className="text-lg font-normal text-gray-600"><FaAngleDown/></div>
                </div>
        </div>
          <div className={profileInfo ?`profile-modal h-96 rounded-md shadow py-4 right-0 top-2 absolute bg-white w-64` : `w-0 hidden`}>
            <div className="flex items-center justify-start gap-2 px-4 pb-2 cursor-pointer" onClick={()=>{
              setProfileInfo(false)
            }}>
                <HiMiniXMark/>
                <p>Close</p>
            </div>
            <div className="flex items-center justify-start gap-3 bg-gray-300 px-4 py-3">
              <p className="rounded-full text-lg bg-gray-800 text-violet-50 uppercase h-10 w-10 text-center py-1">{userFirstName[0]}</p>
                <div>
                  <p>{userFirstName}</p>
                  <p>{userEmail}</p>
                </div>
            </div>
            <div className="text-gray-600 p-4">
              <p className="text-violet-400">Total Amount</p>
              <p className="text-violet-700 text-xl font-semibold">$0.00 USD</p>
              <p className=" text-sm">Referral Bonus <span>$0.00 USD</span></p>
            </div>
              <div className="underline3"/>
              <Link to='/myprofile'>
                  <div className="flex items-center justify-start gap-2 px-4 py-2 cursor-pointer">
                    <BiCog/>
                    <p>Profile Setting</p>
                </div>
              </Link>
              
              <div className="underline3"/>
              <Link to='/myprofile'>
                <div className="flex items-center justify-start gap-2 px-4 py-2 cursor-pointer">
                  <BiLock/>
                  <p>Change Password</p>
              </div>
              </Link>
              <div className="underline3"/>
              <div className="flex items-center justify-start gap-2 px-4 py-2 cursor-pointer" onClick={()=>{
                  localStorage.removeItem('token');
                  localStorage.removeItem('email');
                  navigate('/login')
                }}>
                <BiExit />
                <p>Logout</p>
              </div>
          </div>
    </div>);
};

export default Header;
