import { Routes, Route } from "react-router-dom";
import { Landing, Contact, Services, Gallery, Menu, Pricing, Offer, ComingSoon } from "./pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ComingSoon />} />
      <Route path="/home" element={<Landing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/diensten" element={<Services />} />
      <Route path="/galerij" element={<Gallery />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/tarief" element={<Pricing />} />
      <Route path="/offerte" element={<Offer />} />
    </Routes>
  );
}
