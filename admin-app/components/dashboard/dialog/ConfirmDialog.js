import Button from 'react-bootstrap/Button';

import Dialog from "../../common/Dialog";

export function ConfirmDialog ({ isOpen, onClose, onDelete }) {
  const confirmationButtons = (
    <>
      <Button onClick={onDelete}>Eliminar</Button>
      <Button variant="danger" onClick={onClose}>Cancelar</Button>
    </>
  )
  
  return (
    <Dialog
        title="Eliminar"
        isOpen={isOpen}
        onClose={onClose}
        footer={confirmationButtons}
      >
        ¿Desea eliminar el proyecto?
      </Dialog>
  )
}