import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
// import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Servicespage from "./components/Servicespage";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <div className="h-screen flex flex-col">
        {" "}
        {/* Add h-screen for full height */}
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Servicespage />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
