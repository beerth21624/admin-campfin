import { Button, Modal } from 'flowbite-react';

const CreateTripModal = ({
    isOpen,
    onClose
    }: {
    isOpen: boolean,
    onClose: () => void
}) => {
  return (
      <Modal show={isOpen} onClose={onClose}>
          <Modal.Header>
            <h2 className="text-xl font-semibold">เพิ่มทริป</h2>
          </Modal.Header>
          <Modal.Body>
        </Modal.Body>
        <Modal.Footer>
          <Button color="danger" onClick={onClose}>ยกเลิก</Button>
          <Button color="success">บันทึก</Button>
        </Modal.Footer>


 </Modal>
  )
}

export default CreateTripModal