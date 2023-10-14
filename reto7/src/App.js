import Home from "./components/MainPage";
import Characters from "./components/Characters";
import NavMain from "./components/NavMain";
import {BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
    <div>
      <NavMain/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path = "/characters" element={<Characters/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
