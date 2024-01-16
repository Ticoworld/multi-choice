import Header from "../components/Header";
const UserDashBoardDeposit = () => {
    return (<div>
        <Header />
      <div className="px-28 py-12 pb-32">
        <div className="flex items-center justify-center flex-col">
            <img src="/src/images/Data_PortabilityPrivacy_BANNER_003.gif" alt="" className="w-500 py-24"/>
            <p className="text-gray-700 text-center">you have not performed any transaction yet, click below <br /> to deposit and start transacting</p>
            <div className="text-violet-100 bg-violet-950 rounded-md text-center w-2/3 py-2 font-semibold m-auto flex items-center justify-center gap-3 my-7">
        <p>Deposit</p> </div>
        </div>
      </div>
  </div>);
};

export default UserDashBoardDeposit;
