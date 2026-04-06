import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function TafsirSurat() {
  const { nomor } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    fetch(`https://equran.id/api/v2/surat/${nomor}`)
      .then((res) => res.json())
      .then((data) => setDetail(data.data));
  }, [nomor]);

  if (!detail) return <p className="text-center mt-4">Loading...</p>;

  return (
    <div className="container mt-4">

      {/* 🔥 tombol kembali */}
      <Link to={`/surat/${nomor}`} className="btn btn-outline-secondary mb-3">
        ← Kembali ke Detail
      </Link>

      <h2 className="text-center fw-bold">
        Tafsir {detail.namaLatin}
      </h2>

      <p className="text-center text-muted mb-4">
        {detail.arti}
      </p>

      {/* 🔥 TAFSIR */}
      {detail.tafsir.id.map((item, index) => (
        <div key={index} className="card mb-3 shadow-sm border-0">
          <div className="card-body">

            <h6 className="fw-bold">
              Ayat {item.ayat}
            </h6>

            <p className="text-muted">
              {item.teks}
            </p>

          </div>
        </div>
      ))}
    </div>
  );
}

export default TafsirSurat;