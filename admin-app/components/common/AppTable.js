import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export function AppTable({ headers = [], body = [], hasOptions }) {
  return (
    <Table striped bordered>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
          { hasOptions && <th>Opciones</th> }
        </tr>
      </thead>
      <tbody>
        {body.map((entry, index) => (
          <tr key={index}>
            {entry.map((property, propertyIndex) => (
              <td key={propertyIndex}>{property}</td>
            ))}
            { hasOptions && <td><Button>Editar</Button></td> }
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
