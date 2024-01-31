import Header from "../components/Header";
const UserDashBoardInvestment = () => {
    return (<div>
        <Header />
      <div className="px-28 py-12 pb-32">
        <div className="flex items-center justify-center flex-col">
            <img src="/preview.gif" alt="" className="w-500 py-3"/>
            <p className="text-gray-700 text-center">you have not invested yet, click the button below <br /> to make your first investment </p>
            <div className="text-violet-100 bg-violet-950 rounded-md text-center w-2/3 py-2 font-semibold m-auto flex items-center justify-center gap-3 my-7">
        <p>Invest</p> </div>
        </div>
      </div>
  </div>);
};

export default UserDashBoardInvestment;
