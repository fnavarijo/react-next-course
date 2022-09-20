import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Dialog ({ title, isOpen, onClose, onCreate, children }) {
  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button onClick={onCreate}>Crear</Button>
        <Button variant="danger" onClick={onClose}>Cancelar</Button>
      </Modal.Footer>
    </Modal>
  )

}

export default Dialog;
