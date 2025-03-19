import BaseLayout from "./Components/BaseLayout";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/HomePage.jsx";
import Contact from "./Components/ContactPage.jsx";
import About from "./Components/About.jsx";


function App() {
 

  return (
    <>
      
      <Routes>
      <Route path="/" element={<BaseLayout />}>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      </Route>
      </Routes>
      
      
    </>
  
  )
  
}

export default App;
