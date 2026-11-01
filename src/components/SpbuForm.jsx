
import { useState } from "react";

function SpbuForm({ onAddSpbu }) {
  const [nama, setNama] = useState("");
  const [nomor, setNomor] = useState("");
  const [alamat, setAlamat] = useState("");
  const [status, setStatus] = useState("Buka");

  function handleSubmit(e) {
    e.preventDefault();

    if (!nama || !nomor || !alamat) {
      return;
    }

    const spbuBaru = {
      id: Date.now(),
      nama,
      nomor,
      alamat,
      status,
      hargaBBM: [
        { nama: "Pertalite", hargaNasional: 10000, hargaSPBU: null },
        { nama: "Pertamax", hargaNasional: 12750, hargaSPBU: null },
        { nama: "Pertamax Turbo", hargaNasional: 13800, hargaSPBU: null },
      ],
    };

    onAddSpbu(spbuBaru);

    setNama("");
    setNomor("");
    setAlamat("");
    setStatus("Buka");
  }

  return (
    <section className="spbu-form-section">
      <h2>Tambah SPBU</h2>
      <p>Masukkan informasi SPBU baru ke dalam GasPol.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nama SPBU</label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Contoh: SPBU Soekarno-Hatta"
            required
          />
        </div>

        <div className="form-group">
          <label>Nomor SPBU</label>
          <input
            type="text"
            value={nomor}
            onChange={(e) => setNomor(e.target.value)}
            placeholder="Contoh: 31.123.01"
            required
          />
        </div>

        <div className="form-group">
          <label>Alamat SPBU</label>
          <input
            type="text"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            placeholder="Masukkan alamat lengkap"
            required
          />
        </div>

        <div className="form-group">
          <label>Status Operasional</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Buka">Buka</option>
            <option value="Tutup">Tutup</option>
          </select>
        </div>

        <button type="submit" className="submit-button">
          + Tambah SPBU
        </button>
      </form>
    </section>
  );
}

export default SpbuForm;
