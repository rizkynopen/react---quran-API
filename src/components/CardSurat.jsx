import { Link } from "react-router-dom";

function CardSurat({ item }) {
  return (
    <div className="col-md-4 mb-3">
      
      {/* 🔥 UPDATED: card lebih clean */}
      <div className="card shadow h-100 border-0">
        <div className="card-body d-flex flex-column">

          {/* 🔥 UPDATED */}
          <h5 className="card-title fw-bold">
            {item.namaLatin}
          </h5>

          {/* 🔥 UPDATED */}
          <p className="card-text text-muted">
            {item.arti}
          </p>

          {/* 🔥 NEW: jumlah ayat */}
          <span className="badge bg-secondary mb-2">
            {item.jumlahAyat} Ayat
          </span>

          {/* 🔥 UPDATED: tombol lebih clean */}
          <Link
            to={`/surat/${item.nomor}`}
            className="btn btn-outline-primary mt-auto"
          >
            Lihat Detail →
          </Link>

        </div>
      </div>
    </div>
  );
}

export default CardSurat;