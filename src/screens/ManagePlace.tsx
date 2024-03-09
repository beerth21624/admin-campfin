import { Button } from "flowbite-react";
import { useEffect, useMemo, useState } from "react";
import Swal from "sweetalert2";
import CustomTable from "../components/CustomTable";
import CreatePlaceModal from "../components/modals/CreatePlaceModal";

import { PlaceService } from "../service";
interface Option {
  sortField?: string;
  sortType?: string;
  search?: string;
}

interface DataItem {
  name: string;
  image: string;
  description: string;
  address: string;
  contact: string;
  location: string;
  latitude: number;
  longitude: number;
  createdAt: string;
  updatedAt: string;
  action?: string | JSX.Element;
}

interface Response {
  data : {
  totalItems: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
  option: Option;
  datas: DataItem[];
  }
}

const ManagePlace = () => {
  const [places, setPlaces] = useState<DataItem[]>([]);
  const [isCreatePlaceModalOpen, setIsCreatePlaceModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    PlaceService.getPlace({
      perPages: 10,
      currentPage: 1,
    }).then((res: Response) => {
      setLoading(false);
      if (res?.data?.datas) setPlaces(res.data.datas);
    }).catch(() => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error'
      })
      setLoading(false);
    }
    )
  }, []);


  useEffect(() => {
    if (loading) {
      Swal.fire({
        title: "กำลังโหลดข้อมูล",
        html: "กรุณารอสักครู่ ...",
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
    } else {
      Swal.close();
    }
  }, [loading]);


  //format date to thai
function formatDate(date: string) {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

  

  const columns = [
    { field: "name", name: "ชื่อ" },
    { field: "image", name: "รูปภาพ" },
    { field: "address", name: "ที่อยู่" },
    { field: "contact", name: "ช่องทางติดต่อ" },
    { field: "location", name: "สถานที่" },
    { field: "createdAt", name: "วันที่สร้าง" },
    { field: "updatedAt", name: "วันที่อัปเดตล่าสุด" },
    { field: "action", name: "" }
  ];


  const data = useMemo(() => {
    return places.map((place: DataItem) => {
      return {
        name: place.name,
        image:<img src={place.image} alt={place.name} className='w-10 h-10 rounded-full'/>,
        address: place.address,
        contact: place.contact,
        location: place.location,
        createdAt: formatDate(place.createdAt),
        updatedAt: formatDate(place.updatedAt),
         action: <div className='flex flex-row'>
          <Button color='success' className='mr-2' size='xs'>
            ดูรายละเอียด
          </Button>

          <Button color='dark' className='mr-2' size='xs'
            onClick={() => {
              Swal.fire({
                icon: 'success',
                title: 'Edit',
                text: 'Edit trip success'
              })


            }}
          >แก้ไข</Button>
          <Button color='failure' size='xs'
            onClick={() => {
              Swal.fire({
                title: 'ลบทริป?',
                text: "คุณแน่ใจหรือไม่ที่จะลบทริปนี้",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'ใช่',
                cancelButtonText: 'ไม่',
                confirmButtonColor: '#ECB100',
                cancelButtonColor: '#676767',
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    icon: 'success',
                    title: 'ลบสำเร็จ',
                    text: 'ลบทริปสำเร็จ'
                  })
                }
              }
              );


            }}
          >
            ลบ
          </Button>
        </div>
      };
    });
  }, [places]);



  const handleSubmit = () => {
    Swal.fire({
      icon: "success",
      title: "สำเร็จ!",
      text: "เพิ่มสถานที่สำเร็จ",
      showConfirmButton: false,
      timer: 1500,
    });
    setIsCreatePlaceModalOpen(false);
  };

  return (
    <div className="w-full flex flex-col h-full ">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-2xl font-semibold">จัดการสถานที่</h1>
        <Button color="warning" onClick={() => setIsCreatePlaceModalOpen(true)}>
          เพิ่มสถานที่
        </Button>
      </div>
      <hr className="my-5 border-b-2" />
      <CustomTable columns={columns} data={data} />
      {/* <div className='flex flex-col items-center justify-center h-full'>
        <Nodata />
      </div> */}
      <CreatePlaceModal
        isOpen={isCreatePlaceModalOpen}
        onClose={() => setIsCreatePlaceModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default ManagePlace;
