import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

import Dialog from "../../common/Dialog";

export function ProjectDialog ({ isOpen, onClose, onCreate, fields, setFields }) {
  const actionButtons = (
    <>
      <Button onClick={onCreate}>Crear</Button>
      <Button variant="danger" onClick={onClose}>Cancelar</Button>
    </>
  )
  
  return (
    <Dialog
        title="Crear proyecto"
        isOpen={isOpen}
        onClose={onClose}
        footer={actionButtons}
      >
        <Form>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre del proyecto"
              value={fields.nombre}
              onChange={(e) =>
                setFields((prev) => ({ ...prev, nombre: e.target.value }))
              }
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Presupuesto</Form.Label>
            <Form.Control
              type="number"
              placeholder="Q. 250.00"
              value={fields.presupuesto}
              onChange={(e) =>
                setFields((prev) => ({
                  ...prev,
                  presupuesto: parseFloat(e.target.value),
                }))
              }
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Fecha Inicio</Form.Label>
            <Form.Control
              type="text"
              placeholder="20/2/2022"
              value={fields.fechaInicio}
              onChange={(e) =>
                setFields((prev) => ({
                  ...prev,
                  fechaInicio: e.target.value,
                }))
              }
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Fecha Final</Form.Label>
            <Form.Control
              type="text"
              placeholder="20/2/2022"
              value={fields.fechaFin}
              onChange={(e) =>
                setFields((prev) => ({
                  ...prev,
                  fechaFin: e.target.value,
                }))
              }
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Alcance</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Alcance"
              value={fields.alcance}
              onChange={(e) =>
                setFields((prev) => ({
                  ...prev,
                  alcance: e.target.value,
                }))
              }
            />
          </Form.Group>
        </Form>
      </Dialog>
  )
}