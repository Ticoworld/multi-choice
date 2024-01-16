import Header from "../components/Header";
import { Link } from "react-router-dom";
const UserDashBoardTransactions = () => {
  return (<div>
        <Header />
      <div className="px-28 py-12 pb-32">
        <div className="flex items-center justify-center flex-col">
            <img src="/src/images/Data_PortabilityPrivacy_BANNER_003.gif" alt="" className="w-500 py-24"/>
            <p className="text-gray-700">you have not performed any transaction yet</p>
            <Link to="/fundwallet">
            <div className="text-violet-100 bg-violet-950 rounded-md text-center w-500 py-2 font-semibold m-auto flex items-center justify-center gap-3 my-7">
        <p>Deposit</p></div>
        </Link>
        </div>
      </div>
  </div>);
};

export default UserDashBoardTransactions;
