import { Button } from 'flowbite-react';
import CustomTable from '../components/CustomTable';


const ManagePlace = () => {
  const columns = [
    { field: "productName", name: "Product name" },
    { field: "color", name: "Color" },
    { field: "category", name: "Category" },
    { field: "price", name: "Price" }
  ];

  const data = [
    { productName: "Apple MacBook Pro 17\"", color: "Silver", category: "Laptop", price: "$2999" },
    { productName: "Microsoft Surface Pro", color: "White", category: "Laptop PC", price: "$1999" },
    { productName: "Magic Mouse 2", color: "Black", category: "Accessories", price: "$99" }
  ];
  return (
    <div className='w-full flex flex-col h-full '>
      <div className='flex flex-row justify-between items-center'>
        <h1 className='text-2xl font-semibold'>
          จัดการสถานที่
        </h1>
        <Button color="warning">
          เพิ่มสถานที่
        </Button>
      </div>
      <hr className='my-5 border-b-2' />
      <CustomTable columns={columns} data={data} />
      {/* <div className='flex flex-col items-center justify-center h-full'>
        <Nodata />
      </div> */}
    </div>
  )
}

export default ManagePlace