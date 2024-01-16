import { IoIosArrowRoundForward } from "react-icons/io";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useState } from "react";
const UserDashBoardInvest = () => {
    const [withdrawMethods,setWithdrawalMethods] = useState([
        {
            id:1,
            min:100,
            max:2000,
            image:'/btc.png',
            method:'BTC',
            type:'regular plan',
            percent:'9%',
            duration:'3 days'
          },
          {
            id:2,
            min:2100,
            max:5000,
            image:'/bnb.png',
            method:'USDT',
            type:'standard plan',
            percent:'12%',
            duration:'5 days'
          },
          {
            id:3,
            min:5100,
            max:12000,
            image:'/tron.png',
            method:'tether(TRC20)',
            type:'mega plan',
            percent:'15%',
            duration:'7 days'
          },
          {
            id:4,
            min:12100,
            max:20000,
            image:'/tron.png',
            method:'tether(TRC20)',
            type:'premium plan',
            percent:'18%',
            duration:'7 days'
          },
          {
            id:5,
            min:25000,
            max:50000,
            image:'/tron.png',
            method:'tether(TRC20)',
            type:'Agro-tech plan',
            percent:'20%',
            duration:'7 days'
          },
          {
            id:6,
            min:35000,
            max:1000000000000000000,
            image:'/tron.png',
            method:'tether(TRC20)',
            type:'real estate plan',
            percent:'25%',
            duration:'7 days'
          },
      ])
      
    
  return (
  <div className="bg-white">
    <Header />
      <div className="px-28 py-12 pb-32">
      <div className="text-center py-5">
          <p className="text-md font-semibold">Choose An Option</p>
          <h3 className="text-violet-950 font-semibold text-4xl">Investment Plans</h3>
          <p className="text-xs font-medium py-2 text-gray-700">Choose an investment plan to start earning immediately</p>
      </div>
            <div className="grid grid-cols-3 gap-8 py-16">
                {
                    withdrawMethods.map(withdraw => (
                        <div key={withdraw.id}>
                            <div className="h-full rounded-md  shadow p-10">
                                <div className="pb-5">
                                    <h2 className="text-violet-950 font-bold capitalize text-3xl text-center pb-5">{withdraw.type}</h2>
                                    <div className="flex items-center justify-between gap-4 py-1 pt-2">
                                    <p className="font-semibold text-2xl text-violet-950">{withdraw.percent}</p>
                                    <p className="font-semibold text-2xl text-violet-950">{withdraw.duration}</p>
                                    </div>
                                    <div className="flex items-center justify-between gap-4 pb-4 py-1">
                                    <p className="font-md text-gray-600">...</p>
                                    <p className="font-md text-gray-600 text-sm text-center">Duration</p>
                                    </div>
                                </div>
                                <div className="underline2"/>
                                <div className="text-gray-600 text-sm pb-5">
                                    <div className="flex items-center justify-between py-3">
                                        <p>Minimum Deposit</p>
                                        <p>-</p>
                                        <p>${withdraw.min} USD</p>
                                    </div>
                                    <div className="flex items-center justify-between py-2">
                                        <p>Maximum Deposit</p>
                                        <p>-</p>
                                        <p>${withdraw.max} USD</p>
                                    </div>
                                    <div className="flex items-center justify-between py-2">
                                        <p>Capital Return</p>
                                        <p>-</p>
                                        <p>{withdraw.percent}</p>
                                    </div>
                                    <div className="flex items-center justify-between py-2">
                                        <p>Referral Bonus</p>
                                        <p>-</p>
                                        <p>10%</p>
                                    </div>
                                    <div className="flex items-center justify-between py-2">
                                        <p>Duration</p>
                                        <p>-</p>
                                        <p>{withdraw.duration}%</p>
                                    </div>
                                </div>
                                <div className="text-violet-950 bg-violet-300 rounded-md text-center w-full py-2 font-semibold">Choose Plan</div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Link to='/investments'>
            <div className="text-violet-100 bg-violet-950 rounded-md text-center w-60 py-2 font-semibold m-auto flex items-center justify-center gap-3">
        <p>Investment History</p> <div className="text-3xl"><IoIosArrowRoundForward/></div> </div>
        </Link>
      </div>
  </div>
  );
};

export default UserDashBoardInvest;
