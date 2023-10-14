import "../styles/PassGen.css";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function PassGen() {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(4);
  const [variables, setVariables] = useState({
    upper: false,
    lower: false,
    num: false,
    special: false,
  });

  const handleCopyBtn = () => {
    navigator.clipboard.writeText(generatedPassword);
    toast("Copiado!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: false,
      type: "success",
    });
  };

  const handleSlider = (e) => {
    setPasswordLength(e.target.value);
    generatePassword();
  };

  const handleChecks = (e) => {
    setVariables({
      ...variables,
      [e.target.id]: e.target.checked,
    });
    generatePassword();
  };

  const generatePassword = () => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    let characters = "";
    let password = "";
    if (variables.upper) characters += uppercase;
    if (variables.lower) characters += lowercase;
    if (variables.num) characters += numbers;
    if (variables.special) characters += specialCharacters;
    for (let i = 0; i < passwordLength - 1; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setGeneratedPassword(password);
  };
  return (
    <>
      <Container>
        <h1>PASSWORD GENERATOR</h1>
        <Row>
          <Col>
            <div className="generated">
              <p>{generatedPassword}</p>
            </div>
          </Col>
          <Col>
          <div>
            <Button className = "copyBtn" onClick={handleCopyBtn}>Copy</Button>
            <ToastContainer />
          </div>
          </Col>
        </Row>
        <br />
        <p>Password length: {passwordLength}</p>
        <input
          type="range"
          min={4}
          max={20}
          defaultValue={4}
          onChange={handleSlider}
        />
        <Form>
          <Form.Group>
            <Form.Check
              type="checkbox"
              label="Uppercase"
              id="upper"
              onClick={handleChecks}
            />
            <Form.Check
              type="checkbox"
              label="Lowercase"
              id="lower"
              onClick={handleChecks}
            />
            <Form.Check
              type="checkbox"
              label="Numbers"
              id="num"
              onClick={handleChecks}
            />
            <Form.Check
              type="checkbox"
              label="Special Characters"
              id="special"
              onClick={handleChecks}
            />
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}
export default PassGen;
