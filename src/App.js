import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import BlogPage from "./components/BlogPage";
import ContactPage from "./components/ContactPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/blog" element={<BlogPage />} /> 
          <Route path="/contact" element={<ContactPage />} />
        </Routes>  
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
