import Header from "../components/Header";
import {IoIosArrowRoundForward} from 'react-icons/io'
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";
import { HiArrowLongRight, HiXMark } from "react-icons/hi2";
import WithdrawPreview from "../components/WithdrawPreview";
const UserDashBoardWithdraw = () => {
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [withrawPrev, setWithdrawPrev] = useState(false);
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

      const openModal = (imageSrc, method) => {
        setModalContent({ imageSrc, method });
        setIsModalOpen(true);
        
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
        setDepositAmount('')
      };

      const toggle = () => {
        setIsModalOpen(true);
        setWithdrawPrev(false);
        console.log('clicked');
      }

      const [withdrawMethods, setWithdrawalMethods] = useState([
        {
          id: 1,
          min: 100,
          max: 1000,
          image: '/btc.png',
          method: 'BTC',
          wallet: 'bc1q6fd3nlam0hs743pwlstvssm0n54vyxwea3ff9j',
        },
        {
          id: 2,
          min: 100,
          max: 1000,
          image: '/etherium.png',
          method: 'ETH',
          wallet: '0x113325A424909E236219c9b7a18ce4B97Db97141',
        },
        {
          id: 3,
          min: 100,
          max: 1000,
          image: '/tron.png',
          method: 'tether(TRC20) ',
          wallet: 'TDiyQqukKfTZKvdoAznSrbbuAqQww79bcM',
        },
      ]);
    
    return (
    <div className="bg-white">
    <Header />
    <div className="lg:px-28 px-10 py-12 pb-32">
    <div className="text-center py-5">
        <p className="text-md font-semibold">Choose An Option</p>
        <h3 className="text-violet-950 font-semibold text-4xl">withdrawal Methods</h3>
        <p className="text-xs font-medium py-2 text-gray-700">Choose a withdrawal method to withdraw money.</p>
    </div>
    <div className='flex justify-center items-center min-h-screen mt-5'>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16">
    {withdrawMethods.map(withdraw => (
            <div key={withdraw.id}>
              <div className="h-full rounded-md shadow p-10">
                <div className="text-center">
                  <img src={withdraw.image} alt="" className="w-28 m-auto" />
                  <p className="font-bold text-3xl text-violet-950 py-4 pb-8">{withdraw.method}</p>
                </div>
                <div className="underline2" />
                <div className="flex items-center justify-between gap-4 py-2 pt-4">
                  <p className="font-md text-gray-600">Minimum:</p>
                  <p className="font-md text-gray-600">{withdraw.min}</p>
                </div>
                <div className="flex items-center justify-between gap-4 pb-7 py-2">
                  <p className="font-md text-gray-600">Charge:</p>
                  <p className="font-md text-gray-600">0 USD + 0%</p>
                </div>
                <div
                  className="text-violet-950 bg-violet-300 rounded-md text-center w-full py-2 font-bold cursor-pointer"
                  onClick={() => openModal(withdraw.image, withdraw.method)}
                >
                  Withraw
                </div>
              </div>
            </div>
          ))}  
    </div>
    </div>
    <Link to="/withdrawlog">
    <div className="text-violet-100 bg-violet-950 rounded-md text-center w-60 py-2 font-semibold m-auto flex items-center justify-center gap-3">
      <p>Withdrawal History</p> <div className="text-3xl"><IoIosArrowRoundForward/></div> </div>
      </Link>
    </div>
    {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center modal-container">
          <div className="modal shadow-md bg-white w-350 p-4 rounded-md">
            <div className="modal-content">
              <div className="flex items-center justify-between pb-3">
                <div>
                  <p className="font-bold text-xl text-violet-950">WITHRAW VIA {modalContent.method}</p>
                  <p className="text-sm text-violet-700 py-1">Minimum withrawal : 10 USD</p>
                </div>
                <img src={modalContent.imageSrc} alt="" className="w-10 m-auto" />
                <div className="text-indigo-950 font-bold text-3xl cursor-pointer" onClick={closeModal}><HiXMark /></div>
              </div>
              <div className="underline3" />
              <div className="flex justify-between items-center py-10 w-320"> 
                <form className="flex-grow">
                  <input               
                    type="tel" 
                    placeholder='0.00'
                    value={depositAmount}
                    onChange={(e)=>{
                    setDepositAmount((e.target.value))
                  }}
                   className="sm outline outline-1 outline-gray-400 w-full py-2 rounded-sm text-md px-3" />
                </form>
                <p className="bg-gray-400 font-bold usd" style={{ width: '40px' }}>USD</p>
              </div>
              <div className="underline3" />
              <div className="flex items-center justify-end pt-7">
                <div className="flex gap-4">
                  <button className="noselect" onClick={closeModal}>
                    <span className="text">Close</span><span className="icon"><HiXMark className="svg" /></span></button>
                  <button className="noselect arrow-right" onClick={()=>{
                    if(depositAmount >= 10){
                      setWithdrawPrev(true)
                      setIsModalOpen(false)  
                    }
                    else if(depositAmount === isNaN){
                      Toast.fire({
                        icon: 'warning',
                        title: 'only numbers are accepted'
                      })
                    }
                    else{
                      Toast.fire({
                        icon: 'warning',
                        title: 'Deposit Amount too low'
                      })
                    }
                  }}>
                    <span className="text">Next</span><span className="icon"><HiArrowLongRight className="svg" /></span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {
        withrawPrev && <WithdrawPreview toggle={toggle}/>
      }

    
</div>
);
};

export default UserDashBoardWithdraw;
