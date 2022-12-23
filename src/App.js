import React from "react";
import About from "./components/About";
import Blog from "./components/Blog";
import Book from "./components/Book";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="App scroll-smooth">
      <TopBar />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Menu />
      <Info />
      <Testimonials />
      <Book />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
