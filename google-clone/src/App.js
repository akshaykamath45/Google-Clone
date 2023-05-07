import "./App.css";
import Home from "./pages/Home";
import Search from "./components/Search";
import { Routes, Route, Link } from "react-router-dom";
import  SearchPage  from "./pages/SearchPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="/" element={<Home />} />
      </Routes>

     
    </div>
  );
}

export default App;
