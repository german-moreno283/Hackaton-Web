import "../styles/FormUser.css";
import { Form, Container, Button } from "react-bootstrap";
import { useState } from "react";
function FormUser() {
  const [values, setValues] = useState({
    email: "",
    name: "",
    age: 0,
  });

  const [validValues, setValidValues] = useState({
    email: true,
    name: true,
    age: true,
  });
  const handleValueChange = (e) => {
    switch (e.target.id) {
      case "age":
        if (e.target.value > 100) {
          setValidValues({
            ...validValues,
            [e.target.id]: false,
          });
        }
        else{
          setValidValues({
            ...validValues,
            [e.target.id]: true,
          });
        }
        break;
      case "email":
        if (e.target.value.includes("@")) {
          setValidValues({
            ...validValues,
            [e.target.id]: true,
          });
        } else {
          setValidValues({
            ...validValues,
            [e.target.id]: false,
          });
        }
        break;
    }
    setValues({
      ...values,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    alert(
      JSON.stringify({
        email: values.email,
        name: values.name,
        age: values.age,
      })
    );
  };

  return (
    <div>
      <h1>Formulario</h1>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              id="email"
              placeholder="Enter email"
              onChange={handleValueChange}
              value={values.email}
              style={{ borderColor:!validValues.email?"red":"lightgray"}}
            />
          </Form.Group>

          <br />
          <Form.Group controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              id="name"
              placeholder="Enter name"
              onChange={handleValueChange}
              value={values.name}
            />
          </Form.Group>

          <br />
          <Form.Group controlId="formBasicNumber">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              id="age"
              placeholder="Enter Age"
              onChange={handleValueChange}
              value={values.age}
              style={{ borderColor:!validValues.age?"red":"lightgray"}}

            />
          </Form.Group>

          <br />
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
      <br />
      <Container>
        <h2>Request Sent to DB with below request data</h2>
        <h3>Email: {values.email}</h3>
        <h3>Name: {values.name}</h3>
        <h3>Age: {values.age}</h3>
      </Container>
    </div>
  );
}
export default FormUser;
