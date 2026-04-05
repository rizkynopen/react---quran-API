import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function DetailSurat() {
  const { nomor } = useParams();
  const [detail, setDetail] = useState(null);
  useEffect(() => {
    fetch(`https://equran.id/api/v2/surat/${nomor}`)
      .then((res) => res.json())
      .then((data) => setDetail(data.data));
  }, [nomor]);
  if (!detail) return <p>Loading...</p>;
  return (
    <div className="container mt-4">
        <h2 className="text-center mb-4">{detail.namaLatin}</h2>
        {detail.ayat.map((ayat) => (
            <div key={ayat.nomorAyat} className="card mb-3 shadow-sm">
                <div className="card-body">
                <h5 className="text-end" style={{ fontSize: "24px" }}>
                    {ayat.teksArab}
                </h5>
                <p className="mt-3">{ayat.teksIndonesia}</p>
                <small className="text-muted">
                    Ayat {ayat.nomorAyat}
                </small>
                </div>
            </div>
            ))}
        </div>
    );
}
export default DetailSurat;