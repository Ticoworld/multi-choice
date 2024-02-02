import { useState } from "react";
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";
const Plan = () => {
    const [withdrawMethods,setWithdrawalMethods] = useState([
        {
          id:1,
          min:'100',
          max:'2,000',
          image:'/btc.png',
          method:'BTC',
          type:'regular plan',
          percent:'9',
          duration:'3 days'
        },
        {
          id:2,
          min:'2,100',
          max:'5,000',
          image:'/bnb.png',
          method:'USDT',
          type:'standard plan',
          percent:'12',
          duration:'5 days'
        },
        {
          id:3,
          min:'5,100',
          max:'12,000',
          image:'/tron.png',
          method:'tether(TRC20)',
          type:'mega plan',
          percent:'15',
          duration:'7 days'
        },
        {
          id:4,
          min:'12,100',
          max:'20,000',
          image:'/tron.png',
          method:'tether(TRC20)',
          type:'premium plan',
          percent:'18',
          duration:'7 days'
        },
        {
          id:5,
          min:'25,000',
          max:'50,000',
          image:'/tron.png',
          method:'tether(TRC20)',
          type:'Agro-tech plan',
          percent:'20',
          duration:'7 days'
        },
        {
          id:6,
          min:'35,000',
          max:'unlimited',
          image:'/tron.png',
          method:'tether(TRC20)',
          type:'real estate plan',
          percent:'25',
          duration:'7 days'
        },
        ])
  return (
    <div className="bg-violet-700">
        <div className=" lg:px-28 px-10 py-12">
        <div className="head flex items-center gap-1" data-aos="fade-up"><div className="line"/><p className="font-bold text-white">OUR PLANS</p> </div> 
                <div className="font-bold md:text-3xl lg:text-4xl text-2xl text-violet-100 leading-normal" data-aos="fade-up">
                    CHOOSE AN INVESTMENT PLAN
                </div>
                <p className="text-violet-100 py-5 text-lg leading-6 font-semibold" data-aos="fade-up">choose an investment plan of your choice, but remember , the bigger the <br /> investment the bigger the return</p>
                <div className='flex justify-center items-center min-h-screen mt-5'>
                <div className="grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 justify-center gap-4">
                    {
                        withdrawMethods.map(withdrawmethod => (
                            <div key={withdrawmethod.id} className="h-full w-80 bg-violet-950 py-5 rounded-md px-5 text-violet-100" data-aos="fade-up">
                                <div>
                                    <div className="text-center pb-5">
                                       <h2 className="uppercase pb-1">{withdrawmethod.type}</h2>
                                        <div><span className="text-6xl">{withdrawmethod.percent}</span><span className=" pl-1 text-2xl">%</span></div>
                                        <div className="l-line"/> 
                                    </div>
                                    <div className="">
                                        <div className="flex items-center py-1">
                                        <FaCheckCircle className="text-green-500 mr-2 text-xl" />
                                            <p>Instant withdrawal</p>
                                        </div>
                                        <div className="flex items-center py-1">
                                        <FaCheckCircle className="text-green-500 mr-2 text-xl" />
                                            <p>{withdrawmethod.duration} duration</p>
                                        </div>
                                        <div className="flex items-center py-1">
                                        <FaCheckCircle className="text-green-500 mr-2 text-xl" />
                                            <p>referral commission - 10%</p>
                                        </div>
                                        <div className="flex items-center py-1">
                                        <FaCheckCircle className="text-green-500 mr-2 text-xl" />
                                            <p>minimum deposit - {withdrawmethod.min}</p>
                                        </div>
                                        <div className="flex items-center py-1">
                                        <FaCheckCircle className="text-green-500 mr-2 text-xl" />
                                        <p>maximum deposit - {withdrawmethod.max}</p>
                                        </div>  
                                    </div>
                                    <Link to='/register'>
                                    <button className="bg-violet-200 text-center w-full py-3 rounded-md mt-3 text-violet-950">Invest Now</button>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
              </div>
        </div>
    </div>
  );
};

export default Plan;
