import { useState } from "react";
import { useParams } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Modalcrear({ handleClose, data, show }) {
  console.log(data);
  return (
    <Modal show={show} onHide={handleClose} backdrop="static">
      <Modal.Header>
        <Modal.Title className="text-dark">Confirmacion </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-dark">Se A Agregado Exitosamente</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Link
          variant="primary"
          onClick={handleClose}
          to={`/Tiendas/${data.data.id_categoria}`}
          //to="/Tiendas/627d12e6e399647e760359f2"
          type="button"
          className="btn btn-primary"
        >
          volver inicio
        </Link>
      </Modal.Footer>
    </Modal>
  );
}
export default Modalcrear;
