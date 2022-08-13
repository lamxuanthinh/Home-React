import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages";
import FormData from "./components/FormData";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dangki" element={<FormData />} />
      </Routes>
    </div>
  );
}

export default App;
