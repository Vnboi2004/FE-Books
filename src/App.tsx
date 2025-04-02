import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/main/Home";
import About from "./pages/main/About";
import Shop from "./pages/main/Shop";
import Articles from "./pages/main/Articles";
import Contact from "./pages/main/Contact";

const App = () => {
  
  
  return (
    <div className="overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/pages" element={<About/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/articles" element={<Articles/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
