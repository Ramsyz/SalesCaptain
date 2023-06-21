import Analytics from "./components/Analytics";
import Footer from "./components/Footer";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
import Brands from "./components/Brands";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      {/* <Route path="/signin" element={<SignIn />} /> */}
      <Herosection />
      <Brands />
      <Analytics />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
