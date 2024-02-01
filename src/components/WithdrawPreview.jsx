import { BsArrowLeftCircle } from "react-icons/bs";

const WithdrawPreview = ({toggle}) => {
  return (
        <div>
            <div className="fixed top-0 left-0 w-full h-full bg-white">
                    <BsArrowLeftCircle className="text-3xl mx-3 my-5" onClick={toggle}/>
                    <div className="text-center ">
                        <h2 className="uppercase font-bold text-2xl text-violet-600 py-3">Withrawal Preview</h2>
                        <p className="text-sm">Review Withdrawal details</p>
                    </div>
                <div className="flex space-between lg:px-28 px-10 gap-24 my-5" >
                    <div className="shadow-md px-3 py-4 w-72">
                        <div className="border px-2 py-2 my-2">
                            Current Balance:
                        </div>
                        <div className="border px-2 py-2 my-2">
                            Request Balance:
                        </div>
                        <div className="border px-2 py-2 my-2">
                            Withdrawal Charge:
                        </div>
                        <div className="border px-2 py-2 my-2">
                            After Charge:
                        </div>
                        <div className="border px-2 py-2 my-2">
                            Conversion Rate :
                        </div>
                        <div className="border px-2 py-2 my-2">
                            You Will Get :
                        </div>
                        <div className="border px-2 py-2 my-2">
                             Balance Will Be:
                        </div>
                    </div>
                    <div className="shadow-md px-3 py-6 w-3/5 h-full">
                        <p className="text-gray-700 py-4">Please Enter You ETH Wallet Address Below</p>
                        <p className="text-sm text-gray-500 pb-3">Wallet Address</p>
                        <form action="">
                            <input type="text" 
                            placeholder="wallet address"
                            className="w-full outline outline-1 outline-gray-500 px-4 py-3 rounded-sm" />
                            <div className="text-center">
                                <button className="bg-violet-900 text-white w-full px-3 py-3 rounded-sm my-8" >Confirm</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>  
    </div>
    );
};

export default WithdrawPreview;
