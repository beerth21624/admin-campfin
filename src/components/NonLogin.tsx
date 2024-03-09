import Login from '../assets/login.svg'; // Import the SVG file directly

const NonLogin = () => {
    return (
        <div className=" flex h-full w-full items-center justify-center">
            <div className="flex flex-col items-center">
                <img src={Login} alt="Work in Progress" className="w-48 h-48" /> {/* Use the imported SVG directly */}
                <h1 className="text-xl font-semibold">
                    กรุณาเข้าสู่ระบบ
                </h1>
                <p className="text-ll">
                    กรุณาเข้าสู่ระบบเพื่อใช้งาน
                </p>
            </div>
        </div>
    )
}

export default NonLogin