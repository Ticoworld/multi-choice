import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader'; // Import the Loader component

const UserDashBoardTransactions = () => {
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://multi-chain-server.vercel.app/api/getData', {
          headers: {
            'x-access-token': localStorage.getItem('token'),
          },
        });
        const data = await response.json();

        if (data.transaction) {
          setTransactionHistory(data.transaction);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Set loading to false when done fetching
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div className="px-28 py-12 pb-32">
        <div className="flex items-center justify-center flex-col">

          {loading ? (
            <Loader /> // Display Loader when data is being fetched
          ) : transactionHistory !== undefined && transactionHistory.length > 0 ? (
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-violet-700 text-white">
                  <th className="border border-gray-300 px-4 py-2">Type</th>
                  <th className="border border-gray-300 px-4 py-2">Amount</th>
                  <th className="border border-gray-300 px-4 py-2">Date</th>
                  <th className="border border-gray-300 px-4 py-2">Balance</th>
                </tr>
              </thead>
              <tbody>
                {transactionHistory.map(transaction => (
                  <tr key={transaction.id} className="border border-gray-300 text-center">
                    <td className="border border-gray-300 px-4 py-2">{transaction.type}</td>
                    <td className="border border-gray-300 px-4 py-2">${transaction.amount}</td>
                    <td className="border border-gray-300 px-4 py-2">{transaction.date}</td>
                    <td className="border border-gray-300 px-4 py-2">${transaction.balance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center">
              <img src="/Data_PortabilityPrivacy_BANNER_003.gif" alt="" className="w-500 py-24" />
              <p className="text-gray-700 text-center">You have not performed any transactions yet.</p>
              <Link to="/fundwallet">
                <div className="text-violet-50 bg-violet-800 rounded-md text-center w-2/3 py-2 font-semibold m-auto flex items-center justify-center gap-3 my-7">
                  <p>Deposit</p>
                </div>
              </Link>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default UserDashBoardTransactions;

