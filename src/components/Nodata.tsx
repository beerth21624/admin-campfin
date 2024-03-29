import NodataSvg from '../assets/noData.svg'; // Import the SVG file directly

const Nodata = () => {
    return (
        <div className=" flex h-full w-full items-center justify-center">
            <div className="flex flex-col items-center">
                <img src={NodataSvg} alt="Work in Progress" className="w-36 h-36" /> {/* Use the imported SVG directly */}
                <h1 className="text-xl font-semibold">ไม่พบข้อมูล</h1>
                <p className="text-ll">ไม่พบข้อมูลที่ คุณต้องการ</p>
            </div>
        </div>
    )
}

export default Nodata