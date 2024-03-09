import { Button } from 'flowbite-react';
import { useEffect, useMemo, useState } from 'react';
import CustomTable from '../components/CustomTable';


import Swal from 'sweetalert2';
import { TripService } from '../service';

interface Trip {
  title: string;
  participants: string[];
  maxParticipant: number;
  isPublic: boolean;
  status: string;
  Camp: {
    name: string;
  }
  User: {
    firstName: string;
  }
 
}
const ManageTrip = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    TripService.getTrip({
      perPages: 10,
      currentPage: 1,
   
    }
    ).then((res) => {
      if (res?.data?.datas) setTrips(res.data.datas);
      setLoading(false);
    }).catch(() => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error'
      })
      setLoading(false);
    })
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

  const columns = [
    { field: "title", name: "ชื่อทริป" },
    {field:"author", name:"ผู้สร้าง"},
    { field: "participant", name: "ผู้เข้าร่วม" },
    { field: "maxParticipant", name: "จำนวนผู้เข้าร่วมสูงสุด" },
    { field: "status", name: "สถานะ" },
    { field: "isPublic", name: "public" },
    { field: "place", name: "สถานที่" },
    { field: "action", name: "" }
  ];

  function generateDataForTable(trips: Trip[]) {
  return trips.map((trip: Trip) => {
    return {
      title: trip.title,
      author: trip?.User.firstName || '',
      participant: trip?.participants.length,
      maxParticipant: trip.maxParticipant,
      status: trip.status,
      isPublic: trip.isPublic ? <div className='w-3 h-3 bg-green-400 rounded-full'></div> : <div className='w-3 h-3 bg-red-400 rounded-full'></div>,
      place: trip?.Camp?.name,
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
}

const data = useMemo(() => generateDataForTable(trips), [trips]);



  return (
    <div className='w-full flex flex-col h-full '>
      <div className='flex flex-row justify-between items-center'>
        <h1 className='text-2xl font-semibold'>
          จัดการทริป
        </h1>
        {/* <Button color="warning">
          <HiPlus className='mr-2' />
          เพิ่มทริป
        </Button> */}
      </div>
      <hr className='my-5 border-b-2' />
      <CustomTable
        columns={columns}
        data={data}

      />
      {/* <div className='flex flex-col items-center justify-center h-full'>
        <Nodata />
        </div> */}
    </div>
  )
}

export default ManageTrip