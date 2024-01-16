
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import UserDashBoard from "./pages/UserDashBoard";
import Signup from "./pages/Signup";
import UserDashBoardFundWallet from "./pages/UserDashBoardFundWallet";
import UserDashBoardInvest from "./pages/UserDashBoardInvest";
import UserDashBoardWithdraw from "./pages/UserDashBoardWithdraw";
import UserDashBoardTransactions from "./pages/UserDashBoardTransactions";
import UserDashBoardReferral from "./pages/UserDashBoardReferral";
import UserDashBoardIra from "./pages/UserDashBoardIra";
import UserDashBoardInvestment from "./pages/UserDashBoardInvestment";
import UserDashBoardDeposit from "./pages/UserDashBoardDeposit";
import UserDashBoardWithDrawLog from "./pages/UserDashBoardWithDrawLog";
import UserDashBoardMyProfile from "./pages/UserDashBoardMyProfile";
import Login from "./pages/Login";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/register" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<UserDashBoard/>}/>
          <Route path="/fundwallet" element={<UserDashBoardFundWallet/>}/>
          <Route path="/invest" element={<UserDashBoardInvest/>}/>
          <Route path="/withdraw" element={<UserDashBoardWithdraw/>}/>
          <Route path="/transactions" element={<UserDashBoardTransactions/>}/>
          <Route path="/referrals" element={<UserDashBoardReferral/>}/>
          <Route path="/irainvest" element={<UserDashBoardIra/>}/>
          <Route path="/investments" element={<UserDashBoardInvestment/>}/>
          <Route path="/deposit" element={<UserDashBoardDeposit/>}/>
          <Route path="/withdrawlog" element={<UserDashBoardWithDrawLog/>}/>
          <Route path="/myprofile" element={<UserDashBoardMyProfile/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
