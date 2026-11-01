
function SpbuDetail({ spbu, onBack }) {
  return (
    <section className="spbu-detail">
      <button className="back-button" onClick={onBack}>
        ← Kembali ke Daftar SPBU
      </button>

      <div className="detail-header">
        <div>
          <span className="detail-label">INFORMASI SPBU</span>
          <h2>{spbu.nama}</h2>
          <p>Nomor SPBU: {spbu.nomor}</p>
        </div>

        <span
          className={`spbu-status ${
            spbu.status === "Buka" ? "status-open" : "status-closed"
          }`}
        >
          {spbu.status}
        </span>
      </div>

      <div className="detail-information">
        <h3>Informasi Lokasi</h3>
        <p>{spbu.alamat}</p>
      </div>

      <div className="detail-prices">
        <h3>Daftar Harga BBM</h3>
        <p className="price-description">
          Harga BBM yang berlaku di SPBU ini.
        </p>

        {spbu.hargaBBM.map((bbm) => (
          <div className="detail-price-item" key={bbm.nama}>
            <div>
              <strong>{bbm.nama}</strong>
              <p>
                {bbm.hargaSPBU !== null
                  ? "Harga diperbarui oleh admin SPBU"
                  : "Mengikuti harga nasional"}
              </p>
            </div>

            <strong>
              Rp{" "}
              {(bbm.hargaSPBU ?? bbm.hargaNasional).toLocaleString("id-ID")}
            </strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SpbuDetail;
