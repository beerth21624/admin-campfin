import type { CustomFlowbiteTheme } from "flowbite-react";
import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiColorSwatch,
  HiLocationMarker,
  HiShoppingCart,
  HiStar,
  HiUser
} from "react-icons/hi";
import Swal from "sweetalert2";

import { isLoggedIn } from "../utils/checkLogin";



const theme: CustomFlowbiteTheme["sidebar"] = {
  root: {
    inner:
      "h-full overflow-y-auto overflow-x-hidden  bg-[#242424] py-4 px-3 dark:bg-gray-800",
  },
  item: {
    base: "flex items-center gap-4 py-2 px-3 rounded-md text-gray-400 hover:text-white  dark:hover:bg-gray-700",
    active: "bg-[#ECB100] text-white dark:bg-gray-700",
    label: "bg-[#ECB100] dark:bg-gray-700 text-white dark:text-white",
    icon: {
      base: "text-xl",
      active: "text-xl",
    },
  },
};

const SideNav = () => {
  const location = window.location.pathname;
  const path = location.split("/")[1];


  const loginWithGoogle = async() => {
    try {
      window.open(process.env.BASE_URL+'/auth/google', "_self"); 
    }catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  }

  return (
    <Sidebar aria-keyshortcuts="" theme={theme}>
      <div className="flex items-center gap-2 mb-5">
        <img
          src="images/campfinLogo.png"
          alt="campfin logo"
          className="w-10 h-10"
        />
        <span className="text-2xl font-bold text-white">Campfin</span>
        <span className="text-2xl font-bold text-[#ECB100]">Admin</span>
      </div>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {/* //logo */}
          {isLoggedIn() ? (
            <>
          <Sidebar.Item href="/" icon={HiColorSwatch}
            active={path === "" ? true : false}
          >
            จัดการทริป
          </Sidebar.Item>
          <Sidebar.Item href="/manage-place" icon={HiLocationMarker}
            active={path === "manage-place" ? true : false}
          >
            จัดการสถานที่
          </Sidebar.Item>
          <Sidebar.Item href="/manage-prize" icon={HiStar}
            active={path === "manage-prize" ? true : false}
          >
            จัดการเหรียญตรา
          </Sidebar.Item>

          <Sidebar.Item href="/manage-user" icon={HiUser} label="New" labelColor="dark"
            active={path === "manage-user" ? true : false}
          >
            จัดการผู้ใช้
          </Sidebar.Item>

          <Sidebar.Item href="/manage-shop" icon={HiShoppingCart}
            active={path === "manage-shop" ? true : false}
          >
            จัดการสินค้า
          </Sidebar.Item>
          {/* //login */}
          <Sidebar.Item href="#" icon={HiArrowSmRight}
            onClick={() => {
           //confirm
           Swal.fire({
            title: 'ออกจากระบบ',
             text: "คุณต้องการออกจากระบบหรือไม่?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ECB100',
            cancelButtonColor: '#676767',
            confirmButtonText: 'ใช่',
            cancelButtonText: 'ยกเลิก'
          }).then((result) => {
            if (result.isConfirmed) {
              localStorage.removeItem("token");
              window.location.href = "/non-login";
            }
          }
          );

            }}
          
          >
            Sign Out
          </Sidebar.Item>

            </>
          ) : (
            <>
          <Sidebar.Item href="#" icon={HiArrowSmRight}
            onClick={loginWithGoogle}
          >
            Sign In
          </Sidebar.Item>
            </>
          )}
     
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideNav;
