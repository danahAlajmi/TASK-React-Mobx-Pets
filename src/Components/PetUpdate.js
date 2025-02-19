import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import petStore from "../stores/petStore";
function PetUpdate({ pet }) {
  const [Thepet, setThepet] = useState({
    id: pet.id,
    name: pet.name,
    type: pet.type,
    image: pet.image,
  });

  const handleChange = (event) => {
    setThepet({ ...Thepet, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    petStore.updatethePet(Thepet);
    handleClose();
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="m-2">
        <Button variant="btn btn-info" onClick={handleShow}>
          Update Pet
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new pet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Pet Name:</Form.Label>
              <Form.Control
                required
                placeholder="name"
                type="text"
                name="name"
                value={Thepet.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicType">
              <Form.Select
                required
                aria-label="Default select example"
                name="type"
                value={Thepet.type}
                onChange={handleChange}
                placeholder="type"
              >
                <option>Type</option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                name="image"
                value={Thepet.image}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary mx-2" type="submit">
              Update
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default PetUpdate;
