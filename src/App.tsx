import NavBar from './components/NavBar';
import SideNav from './components/SideNav';
import ManagePlace from './screens/ManagePlace';
import ManagePrize from './screens/ManagePrize';
import ManageShop from './screens/ManageShop';
import ManageTrip from './screens/ManageTrip';
import ManageUser from './screens/ManageUser';
//router
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  return (
    <>
      <div className="flex "

      >
  <div style={{
    minHeight: "100vh",
        }}>       <SideNav /></div>
 
        <div className="flex flex-col w-full">
          <NavBar />
          <div className="p-5">
            <div className=" bg-white w-full h-full  rounded-md shadow-md p-5"
            style={{
              minHeight: "calc(100vh - 4rem - 3rem)"
            
            }}
            >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ManageTrip />} />
            <Route path="manage-place" element={<ManagePlace />} />
            <Route path="manage-user" element={<ManageUser />} />
            <Route path="manage-shop" element={<ManageShop />} />
            <Route path="manage-prize" element={<ManagePrize />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </BrowserRouter>
            </div>
         </div>
        </div>

      </div>

    </>
  )
}

export default App
