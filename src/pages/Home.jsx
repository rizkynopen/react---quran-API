import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardSurat from "../components/CardSurat";

function Home() {
  const [surat, setSurat] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://equran.id/api/v2/surat")
      .then((res) => res.json())
      .then((data) => setSurat(data.data));
  }, []);

  const filteredSurat = surat.filter((item) =>
    item.namaLatin.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h1 className="text-center fw-bold mb-2">
            📖 Daftar Surat Al-Qur’an
          </h1>
          <p className="text-center text-muted mb-4">
            Pilih surat untuk melihat detail dan mendengarkan audio
          </p>
        </div>
        <Link to="/profile" className="btn btn-outline-primary">
          Profil Diri
        </Link>
      </div>

      {/* INPUT SEARCH */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Cari surat..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="row">
        {/* pakai filteredSurat */}
        {filteredSurat.length > 0 ? (
          filteredSurat.map((item) => (
            <CardSurat key={item.nomor} item={item} />
          ))
        ) : (
          <p className="text-center text-muted">
            Surat tidak ditemukan
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;