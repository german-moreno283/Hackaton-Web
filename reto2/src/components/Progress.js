import { Container } from "react-bootstrap";
import { useState } from "react";
import "../styles/Progress.css";
function Progress() {
  const [percentage, setPercentage] = useState(0);
  const handlePercentage = (e) => {
    setPercentage(e.target.value);
    if (e.target.value < 0) setPercentage(0);
    
    if(e.target.value>100){
      setPercentage(100);
    }
  };
  return (
    <>
      <Container className="mt-5 ms-5 ps-5 pt-5">
        <h1>Progress Bar</h1>
        <span>Input Percentage: </span>
        <br/>
          <div style={{width:`${percentage}%`, backgroundColor:"coral", borderRadius:"50px"}}>
          <span style={{ borderRadius:{percentage}}}>{percentage}%</span>
          </div>
        <br/>
        <input className="pInput" value={percentage} type="number" onChange={handlePercentage}/>
      </Container>
    </>
  );
}
export default Progress;
