import Header from "../components/Header";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
const UserDashBoardDeposit = () => {
  const [depositHistory, setDepositHistory] = useState([])
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`https://multi-chain-server.vercel.app/api/getData`, {
          headers: {
            'x-access-token': localStorage.getItem('token'),
          },
        });
        const data = await response.json();
        if (data.deposit) {
          setDepositHistory(data.deposit);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
  
    getData();
  }, []);
  
  return (
    <div>
      <Header />
      <div className="lg:px-28 px-10 py-12 pb-32">
        <div className="flex items-center justify-center flex-col">
        {
          loading ? (
            <Loader />
          ) : depositHistory !== undefined && depositHistory.length > 0 ? (
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-violet-700 text-white">
                  <th className="border border-gray-300 px-4 py-2">Date</th>
                  <th className="border border-gray-300 px-4 py-2">Amount</th>
                  <th className="border border-gray-300 px-4 py-2">Balance</th>
                </tr>
              </thead>
              <tbody>
                {depositHistory.map(deposit => (
                  <tr key={deposit.id} className="border border-gray-300 text-center">
                    <td className="border border-gray-300 px-4 py-2">{deposit.date}</td>
                    <td className="border border-gray-300 px-4 py-2">{deposit.amount}</td>
                    <td className="border border-gray-300 px-4 py-2">{deposit.balance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <>
              <img src="/Data_PortabilityPrivacy_BANNER_003.gif" alt="" className="w-500 py-24" />
              <p className="text-gray-700 text-center">You have not performed any transactions yet. Click below to deposit and start transacting.</p>
              <Link to="/fundwallet">
                <div className="text-violet-50 bg-violet-800 rounded-md text-center w-2/3 py-2 font-semibold m-auto flex items-center justify-center gap-3 my-7">
                  <p>Deposit</p>
                </div>
              </Link>
            </>
          )}  
        </div>
      </div>
    </div>
  );
  
  
};

export default UserDashBoardDeposit;
