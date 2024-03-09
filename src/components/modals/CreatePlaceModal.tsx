import { Button, Modal, TextInput } from 'flowbite-react';
import FileUpload from '../FileUpload';
import FormInput from '../FormInput';

const CreatePlaceModal = ({
    isOpen,
    onClose,
    onSubmit
}: {
    isOpen: boolean,
    onClose: () => void
    onSubmit: () => void
}) => {
    return (
        <Modal show={isOpen} onClose={onClose}>
            <Modal.Header>
                <h2 className="text-xl font-semibold">เพิ่มทริป</h2>
            </Modal.Header>
            <Modal.Body>
                <form className="flex flex-col gap-4">
                    <FileUpload />
                    <FormInput htmlFor='place-name' label="ชื่อสถานที่">
                        <TextInput id='place-name' placeholder="กรอกชื่อสถานที่" />
                    </FormInput>
                    <FormInput htmlFor='place-description' label="คำอธิบาย">
                        <TextInput id='place-description' placeholder="กรอกคำอธิบาย" />
                    </FormInput>
                    <FormInput htmlFor='place-location' label="สถานที่">
                        <TextInput id='place-location' placeholder="กรอกสถานที่" />
                    </FormInput>
                    <div className='grid grid-cols-2 gap-4 w-full'>
                        <FormInput htmlFor='place-lat' label="ละติจูด">
                            <TextInput id='place-lat' placeholder="กรอกละติจูด" />
                        </FormInput>
                        <FormInput htmlFor='place-long' label="ลองจิจูด">
                            <TextInput id='place-long' placeholder="กรอกลองจิจูด" />
                        </FormInput>
                    
                    </div>
                    
                </form>

            </Modal.Body>
            <Modal.Footer >
                <div className="flex justify-center w-full gap-2">
                    <Button color="gray" onClick={onClose} className='w-28'>ยกเลิก</Button>
                    <Button color="warning" className='w-28'
                        onClick={() => {
                            onSubmit();
                        }}
                    >บันทึก</Button>
                </div>
            </Modal.Footer>


        </Modal>
    )
}

export default CreatePlaceModal