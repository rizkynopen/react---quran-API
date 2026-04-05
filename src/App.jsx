import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DetailSurat from "./DetailSurat";

function App() {
  const [surat, setSurat] = useState([]);

  useEffect(() => {
    fetch("https://equran.id/api/v2/surat")
      .then((res) => res.json())
      .then((data) => setSurat(data.data));
  }, []);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="container mt-4">
            <h1 className="text-center mb-4">Daftar Surat</h1>
            <div className="row">
              {surat.map((item) => (
                <div className="col-md-4 mb-3" key={item.nomor}>
                  <div className="card shadow">
                    <div className="card-body">
                      <h5 className="card-title">{item.namaLatin}</h5>
                      <p className="card-text">{item.arti}</p>
                      <Link
                        to={`/surat/${item.nomor}`}
                        className="btn btn-primary"
                      >
                        Lihat Detail
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
      />
      <Route path="/surat/:nomor" element={<DetailSurat />} />
    </Routes>
  );
}

export default App;