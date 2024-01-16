import {FaGlobeAmericas} from 'react-icons/fa'
import {BsBank} from 'react-icons/bs'
import {FaUsers} from 'react-icons/fa'
import { RiExchangeDollarLine } from 'react-icons/ri'
import {CgArrowsExchangeV} from 'react-icons/cg'
const Info = () => {
  return (
    <div className='bg-violet-950'>
        <div className=" px-28 py-12">
            <div className='grid grid-cols-3 gap-3'>
                <div className="bg-violet-200 h-full grid w-80 rounded-md py-6 px-4 grid-long " data-aos="fade-up">
                    <div className="flex flex-col gap-5 justify-between">
                        <FaGlobeAmericas  className="text-5xl text-violet-950"/>
                        <div>
                            <h2 className="font-bold text-5xl pt-3 text-gray-950">86+</h2>
                            <p className='text-gray-600'>Supported Countries</p>
                        </div>
                    </div>
                    
                </div>
                <div className="bg-violet-200 h-full w-80 rounded-md py-6 px-4" data-aos="fade-up">
                    <div className="flex flex-col gap-5 justify-between">
                        <RiExchangeDollarLine className="text-3xl text-violet-950"/>
                        <div>
                            <h2 className="font-bold text-3xl pt-3 text-gray-950">10K+</h2>
                            <p className='text-gray-600'>Transactions</p>
                        </div>
                    </div>
                </div>
                <div className="bg-violet-200 h-full w-80 rounded-md py-6 px-4" data-aos="fade-up">
                    <div className="flex flex-col gap-5 justify-between">
                        <BsBank className="text-3xl text-violet-950"/>
                        <div>
                            <h2 className="font-bold text-3xl pt-3 text-gray-950">3.5+</h2>
                            <p className='text-gray-600'>Successfull withdrawals</p>
                        </div>
                    </div>
                    
                </div>
                <div className="bg-violet-200 h-full w-80 rounded-md py-6 px-4" data-aos="fade-up">
                    <div className="flex flex-col gap-5 justify-between">
                        <FaUsers className="text-3xl text-violet-950"/>
                        <div>
                            <h2 className="font-bold text-3xl pt-3 text-gray-950">1.3k+</h2>
                            <p className='text-gray-600'>Active Users</p>
                        </div>
                    </div>
                    
                </div>
                <div className="bg-violet-200 h-full w-80 rounded-md py-6 px-4" data-aos="fade-up">
                    <div className="flex flex-col gap-5 justify-between">
                        <CgArrowsExchangeV className="text-3xl text-violet-950"/>
                        <div>
                            <h2 className="font-bold text-3xl pt-3 text-gray-950">6.5+</h2>
                            <p className='text-gray-600'>Successful Deposits</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    </div>
    );
};

export default Info;
