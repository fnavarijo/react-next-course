import { useRouter } from "next/router";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function DashboardCard({ nombre, fechaInicio, fechaFin, proyectoID }) {
  const router = useRouter();

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          {fechaInicio} - {fechaFin}
        </Card.Text>
        <Button
          variant="primary"
          onClick={() => router.push(`/proyectos/${proyectoID}`)}
        >
          Ver más
        </Button>
        <Button variant="danger">Eliminar</Button>
      </Card.Body>
    </Card>
  );
}

export default DashboardCard;
