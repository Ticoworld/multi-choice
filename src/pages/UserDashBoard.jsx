import Header from "../components/Header";
import UserDashboardHome from "../components/UserDashboardHome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const UserDashBoard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = await fetch(`https://multi-chain-server.vercel.app/api/getData`, {
          headers: {
            'x-access-token': localStorage.getItem('token'),
          },
        });
        const res = await req.json();

        if (res.email) {
          setUserData(res);
          let userEmail = res.email;
          localStorage.setItem('email', userEmail);
        } else {
          console.error('Email not available in response:', res);
        }

        if (res.status === 'error') {
          navigate('/login');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (localStorage.getItem('token')) {
      fetchData();
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <UserDashboardHome userData={userData} />
      )}
    </div>
  );
};

export default UserDashBoard;
