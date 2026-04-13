import { Link } from "react-router-dom";

function CardSurat({ item }) {
  return (
    <div className="col-md-4 mb-3">

      <div className="card shadow h-100 border-0">
        <div className="card-body d-flex flex-column">

          <h5 className="card-title fw-bold">
            {item.namaLatin}
          </h5>

          <p className="card-text text-muted">
            {item.arti}
          </p>

          <span className="badge bg-secondary mb-2">
            {item.jumlahAyat} Ayat
          </span>

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