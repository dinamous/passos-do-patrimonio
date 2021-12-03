import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Preloader from "./components/Preloader";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="App">
      {/* <Preloader/>
      <Main/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="app" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
