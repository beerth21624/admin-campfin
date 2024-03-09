import { jwtDecode } from "jwt-decode";
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import NonLogin from "./components/NonLogin";
import SideNav from './components/SideNav';
import ManagePlace from './screens/ManagePlace';
import ManagePrize from './screens/ManagePrize';
import ManageShop from './screens/ManageShop';
import ManageTrip from './screens/ManageTrip';
import ManageUser from './screens/ManageUser';

import { isLoggedIn } from './utils/checkLogin';

function App() {
  useEffect(() => {
    const handleLogin = () => {
      const location = window.location.pathname;
      const path = location.split("/")[1];
      if (path === "login") {
        const params = new URLSearchParams(window.location.search);
      
        const token = params.get("token");

        try {
          const decoded = jwtDecode(token ||'');
          if (decoded) {
            localStorage.setItem("token", JSON.stringify(token));
          }
          window.location.href = "/";
        } catch (error) {
          console.error('Error decoding token:', error);
          window.location.href = "/";
        }
      }else if(path ==='non-login'){
        localStorage.removeItem("token");
      }else{
        if (!isLoggedIn()) {
          window.location.href = "/non-login";
        }
      }
    };

    handleLogin();
  }, []);





  return (
    <BrowserRouter>
      <div className="flex">
        <div style={{ minHeight: "100vh" }}>
          <SideNav />
        </div>

        <div className="flex flex-col w-full">
          <NavBar />
          <div className="p-5">
            <div className="bg-white w-full h-full rounded-md shadow-md p-5"
              style={{ minHeight: "calc(100vh - 4rem - 3rem)" }}>
              <Routes>
                <Route path="/" element={
           <ManageTrip /> 
                
                } />
                <Route path="non-login" element={<NonLogin />} />
                <Route path="manage-place" element={<ManagePlace />} />
                <Route path="manage-user" element={<ManageUser />} />
                <Route path="manage-shop" element={<ManageShop />} />
                <Route path="manage-prize" element={<ManagePrize />} />
                <Route path="login/*" element={<h1>Login success</h1>} />
                <Route path="*" element={<h1>Not Found</h1>} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
