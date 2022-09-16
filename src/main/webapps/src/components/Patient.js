import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Form, Card, Button } from "react-bootstrap";
import { Navigate, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Student(props) {
  const [id, setpatientId] = useState(null);
  const [name, setname] = useState(null);
  const [address, setaddress] = useState(null);
  const [age, setage] = useState(null);

  const { patientId } = useParams(); // Get the Path Parameter from the URL
  const navigate = useNavigate();

  useEffect(() => {
    if (patientId) {
      axios
        .get("http://localhost:8080/patient/" +patientId)
        .then((response) => {
          if (response.data != null) {
            setpatientId(response.data.id);
            setname(response.data.name);
            setaddress(response.data.address);
             setage(response.data.age);
          }
        })
        .catch((error) => props.showAlert("danger", "Error"));
    }
  }, []);

  let patient = {
    id: id,
    name: name,
    address: address,
    age: age,
  };

  let textChanged = (event) => {
    if (event.target.name === "id") {
      setpatientId(event.target.value);
    } else if (event.target.name === "name") {
      setname(event.target.value);
    } else if (event.target.name === "address") {
      setaddress(event.target.value);
    }
    else if (event.target.name === "age") {
          setage(event.target.value);
        }
  };

  let savePatient = (event) => {
    event.preventDefault();

      axios
        .post("http://localhost:8080/patient", patient)
        .then((response) => {
          if (response.data != null) {
            props.showAlert("success", "Record added successfully");
          }
        })
        .catch((error) => props.showAlert("danger", "Error"));
  };

  let updatePatient= (event) => {
    event.preventDefault();
    axios.put("http://localhost:8080/patient/" + patientId, patient).then((response) => {
      if (response.data != null) {
        props.showAlert("success", "Record updated successfully");
        navigate("/listPatients"); // Navigate to Students List Components
      }
    });
  };

  return (
    <div className="my-3">
      <Container>
        <Card>
          <Form onSubmit={patientId != null ? updatePatient : savePatient}>
            <Card.Header>
              <strong>{patientId!=null? "Update Patient Information":"Add Patient Information"}</strong>
            </Card.Header>
            <Card.Body>
              <Form.Group className="mb-3">
                <Form.Label>Id</Form.Label>
                <Form.Control
                  name="id"
                  value={id}
                  type="text"
                  placeholder="Enter id"
                  onChange={textChanged}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  value={name}
                  type="text"
                  placeholder="Enter name"
                  onChange={textChanged}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  name="address"
                  value={address}
                  type="text"
                  placeholder="Enter address"
                  onChange={textChanged}
                />
              </Form.Group>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary" type="submit">
                {patientId != null ? "Update" : "Submit"}
              </Button>
            </Card.Footer>
          </Form>
        </Card>
      </Container>
    </div>
  );
}