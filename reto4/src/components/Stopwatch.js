import { Container, Button, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import "../styles/Stopwatch.css";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isOn, setIsOn] = useState(false);
  useEffect(() => {
    let interval;
    if (isOn) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else if (!isOn && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isOn, time]);
  const minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
  const seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2);

  const start = () => {
    setIsOn(true);
  };
  const stop = () => {
    setIsOn(false);
  };
  const reset = () => {
    setTime(0);
  };
  return (
    <>
      <Container>
        <h1>Timer</h1>
        <h2>{minutes} mins : {seconds} secs</h2>
        <Row className="botones">
          <Col>
            <Button style={{backgroundColor:"green"}} onClick={start}>Start</Button>
          </Col>
          <Col>
            <Button style={{backgroundColor:"red"}} onClick={stop}>Stop</Button>
          </Col>
          <Col>
            <Button style={{backgroundColor:"yellow"}} onClick={reset}>Reset</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Stopwatch;
