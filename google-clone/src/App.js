import "./App.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/search" element={<Search/>}/>
        <Route path="/" element={<Home />} />
      </Routes>

     
    </div>
  );
}

export default App;
