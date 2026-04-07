import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
// import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <About />
      {/* <WhyUs /> */}
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
