import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Aboutpage from "./Aboutpage";
import Reservationpage from "./Reservationpage";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/reservation" element={<Reservationpage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
