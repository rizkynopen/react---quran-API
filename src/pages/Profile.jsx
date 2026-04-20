import { Link } from "react-router-dom";
import profilePhoto from "../assets/potokuu.jpeg";

function Profile() {
  return (
    <div className="container mt-4">
      <Link to="/" className="btn btn-outline-secondary mb-3">
        ← Kembali ke Home
      </Link>

      <div className="card shadow-sm border-0 bg-secondary bg-opacity-10">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4 text-center">
              <img
                src={profilePhoto}
                alt="Foto Profil"
                className="rounded-circle mb-4"
                style={{ width: "180px", height: "180px", objectFit: "cover", border: "4px solid #0d6efd" }}
              />
            </div>
            <div className="col-md-8">
              <h1 className="fw-bold mb-3">Profil Diri</h1>
              <p className="mb-1"><strong>Nama :</strong> Rizky Nofendri</p>
              <p className="mb-1"><strong>Kelas / Jurusan :</strong> C / Teknik Informatika </p>
              <p className="mb-1"><strong>NIM / Nomor Induk :</strong> 12450115380 </p>
              <p className="mb-3"><strong>Mata Kuliah :</strong> Pemrograman Web</p>
              <p className="text-muted">
                profil untuk membuat menyelesaikan UTS Pemograman Web, dengan menggunakan API
                dari equran.id untuk menampilkan daftar surat, detail surat, dan tafsir surat. 
                Selain itu, terdapat fitur pencarian surat berdasarkan nama latin. Profil ini 
                dibuat dengan menggunakan React dan React Router untuk navigasi antar halaman.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
