import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetailSurat from "./pages/DetailSurat";
import TafsirSurat from "./pages/TafsirSurat";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/surat/:nomor" element={<DetailSurat />} />
      <Route path="/surat/:nomor/tafsir" element={<TafsirSurat />} />
    </Routes>
  );
}

export default App;