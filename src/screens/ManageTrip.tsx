import { Button } from 'flowbite-react';
import Nodata from '../components/Nodata';


const ManageTrip = () => {
  return (
    <div className='w-full flex flex-col h-full '>
      <div className='flex flex-row justify-between items-center'>
        <h1 className='text-2xl font-semibold'>
          จัดการทริป
        </h1>
        <Button color="warning">
          เพิ่มทริป
        </Button>
      </div>
      <hr className='my-5 border-b-2' />
      <div className='flex flex-col items-center justify-center h-full'>
        <Nodata />
        </div>
    </div>
  )
}

export default ManageTrip