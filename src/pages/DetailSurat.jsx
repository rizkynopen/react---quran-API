import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import TerjemahanAyat from "../components/TerjemahanAyat";

function DetailSurat() {
  const { nomor } = useParams();
  const [detail, setDetail] = useState(null);

  const audioRefs = useRef({});
  const [showTerjemah, setShowTerjemah] = useState({});

  useEffect(() => {
    fetch(`https://equran.id/api/v2/surat/${nomor}`)
      .then((res) => res.json())
      .then((data) => setDetail(data.data));
  }, [nomor]);

  if (!detail) return <p className="text-center mt-4">Loading...</p>;

  const handlePlay = (id) => {
    audioRefs.current[id]?.play();
  };

  const handlePause = (id) => {
    audioRefs.current[id]?.pause();
  };

  const handleStop = (id) => {
    audioRefs.current[id]?.pause();
    audioRefs.current[id].currentTime = 0;
  };

  const toggleTerjemah = (id) => {
    setShowTerjemah((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="container mt-4 mb-5">

      {/* 🔥 HEADER BAR */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Link to="/" className="btn btn-outline-secondary btn-sm">
          ← Kembali
        </Link>

        <span className="badge bg-primary">
          {detail.jumlahAyat} Ayat
        </span>
      </div>

      {/* 🔥 TITLE */}
      <div className="text-center mb-4">
        <h2 className="fw-bold">{detail.namaLatin}</h2>
        <p className="text-muted mb-0">{detail.arti}</p>
      </div>

      {/* 🔥 LIST AYAT */}
      {detail.ayat.map((ayat) => (
        <div
          key={ayat.nomorAyat}
          className="card mb-4 shadow-sm border-0"
          style={{ borderRadius: "12px" }}
        >
          <div className="card-body">

            {/* 🔥 NOMOR AYAT */}
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="badge bg-light text-dark">
                Ayat {ayat.nomorAyat}
              </span>
            </div>

            {/* 🔥 ARAB */}
            <h5 
              className="text-end mb-3"
              style={{
                fontSize: "30px",
                lineHeight: "2.4",
                fontFamily: "serif"
              }}
            >
              {ayat.teksArab}
            </h5>

            {/* 🔥 ACTION BUTTON */}
            <div className="d-flex gap-2 flex-wrap">

              <button
                className="btn btn-outline-primary btn-sm"
                onClick={() => toggleTerjemah(ayat.nomorAyat)}
              >
                {showTerjemah[ayat.nomorAyat]
                  ? "Sembunyikan"
                  : "Terjemahan"}
              </button>

              <button
                className="btn btn-success btn-sm"
                onClick={() => handlePlay(ayat.nomorAyat)}
              >
                ▶️
              </button>

              <button
                className="btn btn-warning btn-sm"
                onClick={() => handlePause(ayat.nomorAyat)}
              >
                ⏸
              </button>

              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleStop(ayat.nomorAyat)}
              >
                ⏹
              </button>

            </div>

            {/* 🔥 TERJEMAHAN */}
            {showTerjemah[ayat.nomorAyat] && (
              <div className="mt-3 p-3 bg-light rounded">
                <TerjemahanAyat ayat={ayat} />
              </div>
            )}

            {/* 🔥 AUDIO (HIDDEN) */}
            {ayat.audio && ayat.audio["01"] && (
              <audio
                ref={(el) => (audioRefs.current[ayat.nomorAyat] = el)}
                src={ayat.audio["01"]}
              />
            )}

          </div>
        </div>
      ))}
    </div>
  );
}

export default DetailSurat;