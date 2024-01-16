import Header from "../components/Header";
import {IoIosArrowRoundForward} from 'react-icons/io'
import { Link } from "react-router-dom";
const UserDashBoardWithdraw = () => {
    return (<div className="bg-white">
    <Header />
    <div className="px-28 py-12 pb-32">
    <div className="text-center py-5">
        <p className="text-md font-semibold">Choose An Option</p>
        <h3 className="text-violet-950 font-semibold text-4xl">withdrawal Methods</h3>
        <p className="text-xs font-medium py-2 text-gray-700">Choose a withdrawal method to withdraw money.</p>
    </div>
    <div className="grid grid-cols-3 gap-8 py-16">
        <div className="h-full rounded-md  shadow p-10">
          <div className="text-center">
            <img src="/src/images/btc.png" alt="" className="w-28 m-auto"/>
            <p className="font-bold text-3xl text-violet-950 py-4 pb-8">BTC</p>
          </div>
          <div className="underline2"/>
          <div className="flex items-center justify-between gap-4 py-2 pt-4">
            <p className="font-md text-gray-600">Limit:</p>
            <p className="font-md text-gray-600">10 - 1000000 USD</p>
          </div>
          <div className="flex items-center justify-between gap-4 pb-7 py-2">
            <p className="font-md text-gray-600">Charge:</p>
            <p className="font-md text-gray-600">0 USD + 0%</p>
          </div>

            <div className="text-violet-950 bg-violet-300 rounded-md text-center w-full py-2 font-bold">Withdraw</div>
        </div>
        <div className="h-full rounded-md  shadow p-10">
          <div className="text-center">
            <img src="/src/images/etherium.png" alt="" className="w-28 m-auto"/>
            <p className="font-bold text-3xl text-violet-950 py-4 pb-8">ETH</p>
          </div>
          <div className="underline2"/>
          <div className="flex items-center justify-between gap-4 py-2 pt-4">
            <p className="font-md text-gray-600">Limit:</p>
            <p className="font-md text-gray-600">10 - 1000000 USD</p>
          </div>
          <div className="flex items-center justify-between gap-4 pb-7 py-2">
            <p className="font-md text-gray-600">Charge:</p>
            <p className="font-md text-gray-600">0 USD + 0%</p>
          </div>

            <div className="text-violet-950 bg-violet-300 rounded-md text-center w-full py-2 font-bold">Withdraw</div>
        </div>
        <div className="h-full rounded-md  shadow p-10">
          <div className="text-center">
            <img src="/src/images/tron.png" alt="" className="w-28 m-auto"/>
            <p className="font-bold text-3xl text-violet-950 py-4 pb-8">TETHER(TRC20)</p>
          </div>
          <div className="underline2"/>
          <div className="flex items-center justify-between gap-4 py-2 pt-4">
            <p className="font-md text-gray-600">Limit:</p>
            <p className="font-md text-gray-600">10 - 1000000 USD</p>
          </div>
          <div className="flex items-center justify-between gap-4 pb-7 py-2">
            <p className="font-md text-gray-600">Charge:</p>
            <p className="font-md text-gray-600">0 USD + 0%</p>
          </div>

            <div className="text-violet-950 bg-violet-300 rounded-md text-center w-full py-2 font-bold">Withdraw</div>
        </div>
    </div>
    <Link to="/withdrawlog">
    <div className="text-violet-100 bg-violet-950 rounded-md text-center w-60 py-2 font-semibold m-auto flex items-center justify-center gap-3">
      <p>Withdrawal History</p> <div className="text-3xl"><IoIosArrowRoundForward/></div> </div>
      </Link>
    </div>
</div>);
};

export default UserDashBoardWithdraw;
