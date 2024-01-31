import { IoIosArrowRoundForward } from "react-icons/io";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import { HiArrowRight, HiXMark } from "react-icons/hi2";
const UserDashBoardInvest = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [CheckOutModal, setCheckOutModal] = useState(false);
    const [depositAmount, setDepositAmount] = useState('');
    const [modalContent, setModalContent] = useState({});
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });

      const openModal = (max, min, type) => {
        setModalContent({ max, min , type});
        setIsModalOpen(true);
        
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
        setDepositAmount('')
      };

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
                                <div className="text-violet-950 bg-violet-300 rounded-md text-center w-full py-2 font-semibold"
                                onClick={() => openModal(withdraw.max, withdraw.min, withdraw.type)}
                                >Choose Plan</div>
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

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center modal-container">
          <div className="modal shadow-md bg-white w-2/5 p-4 rounded-md">
            <div className="modal-content">
              <div className="flex items-center justify-between pb-3">
                <div>
                  <p className="font-bold text-xl text-violet-950">Plan Selected: {modalContent.type}</p>
                  <p className="text-sm text-violet-700 py-1">Min: {modalContent.min} - Max: {modalContent.max}</p>
                </div>
                <img src={modalContent.imageSrc} alt="" className="w-10 m-auto" />
                <div className="text-indigo-950 font-bold text-3xl cursor-pointer" onClick={closeModal}><HiXMark /></div>
              </div>
              <div className="underline3" />
              <div className="flex justify-between items-center py-10">
                <form>
                  <input               
                    type="tel" 
                    placeholder='0.00'
                    value={depositAmount}
                    onChange={(e)=>{
                    setDepositAmount((e.target.value))
                  }}
                   className="sm outline outline-1 outline-gray-400 w-470 py-2 rounded-sm text-md px-3" />
                </form>
                <p className="bg-gray-400 font-bold usd">USD</p>
              </div>
              <div className="underline3" />
              <div className="flex items-center justify-end pt-7">
                <div className="flex gap-4">
                  <button className="noselect" onClick={closeModal}>
                    <span className="text">Close</span><span className="icon"><HiXMark className="svg" /></span></button>
                  <button className="noselect arrow-right" onClick={()=>{
                    
                  }}>
                    <span className="text">Next</span><span className="icon"><HiArrowRight className="svg" /></span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
  </div>
  );
};

export default UserDashBoardInvest;
