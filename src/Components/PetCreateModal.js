import { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap/";
import petStore from "../stores/petStore";

function PetCreateModal() {
  const [show, setShow] = useState(false);

  const [pet, setPet] = useState({
    name: "",
    type: "",
    image: "",
  });

  const handleChange = (event) => {
    setPet({ ...pet, [event.target.name]: event.target.value });
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    petStore.addPet(pet);
    handleClose();
    setPet({ name: "", type: "", image: "" });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="mx-2">
        <Button variant="btn btn-info" onClick={handleShow}>
          add pet
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new pet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handelSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Pet Name</Form.Label>
              <Form.Control
                required
                type="name"
                placeholder="Name"
                name="name"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicType">
              <Form.Select
                required
                name="type"
                placeholder="Tpey"
                onChange={handleChange}
                aria-label="Default select example"
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
                placeholder="image URL"
                name="image"
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="btn btn-info" type="submit">
              Submit
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

export default PetCreateModal;
