import "./App.css";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Specials from "./sections/Specials";
import Testimonials from "./sections/Testimonials";
import About from "./sections/About";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Specials />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
