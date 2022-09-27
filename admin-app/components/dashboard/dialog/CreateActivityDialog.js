import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

import Dialog from "../../common/Dialog";

export function CreateActivityDialog ({ isOpen, onClose, onCreate, fields, setFields }) {
  const actionButtons = (
    <>
      <Button onClick={onCreate}>Guardar</Button>
      <Button variant="danger" onClick={onClose}>Cancelar</Button>
    </>
  )
  
  return (
    <Dialog
        title="Agregar actividad a proyecto"
        isOpen={isOpen}
        onClose={onClose}
        footer={actionButtons}
      >
        <Form>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre de la actividad"
              value={fields.nombre}
              onChange={(e) =>
                setFields((prev) => ({ ...prev, nombre: e.target.value }))
              }
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Costo</Form.Label>
            <Form.Control
              type="number"
              placeholder="Q. 250.00"
              value={fields.costo}
              onChange={(e) =>
                setFields((prev) => ({
                  ...prev,
                  costo: parseFloat(e.target.value),
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
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Descripción"
              value={fields.descripcion}
              onChange={(e) =>
                setFields((prev) => ({
                  ...prev,
                  descripcion: e.target.value,
                }))
              }
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Resonsable</Form.Label>
            <Form.Control
              type="text"
              placeholder="Responsable"
              value={fields.nombreResponsable}
              onChange={(e) =>
                setFields((prev) => ({
                  ...prev,
                  nombreResponsable: e.target.value,
                }))
              }
            />
          </Form.Group>
        </Form>
      </Dialog>
  )
}