import { Link } from "react-router-dom";
import Header from "../components/Header";
const UserDashBoardWithDrawLog = () => {
    return (<div>
        <Header />
      <div className="px-28 py-12 pb-32">
        <div className="flex items-center justify-center flex-col">
            <img src="/view.gif" alt="" className="w-400 py-3"/>
            <p className="text-gray-700">you have not performed any withdrawal yet, click below to deposit and start transacting</p>
            <Link to="/fundwallet">
            <div className="text-violet-100 bg-violet-950 rounded-md text-center w-500 py-2 font-semibold m-auto flex items-center justify-center gap-3 my-7">
        <p>Deposit</p> </div>
        </Link>
        </div>
      </div>
  </div>);
};

export default UserDashBoardWithDrawLog;
