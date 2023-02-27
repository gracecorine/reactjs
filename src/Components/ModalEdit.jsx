import { Modal } from 'react-bootstrap';
import FormComp from './Form';

function StaticExample({show, handleClose, product, dispatch}) {

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <FormComp product={product} act="edit" dispatch={dispatch} handleClose={handleClose} />
      </Modal.Body>
    </Modal>
  );
}

export default StaticExample;