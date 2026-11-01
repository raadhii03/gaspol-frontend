
function SpbuCard({ spbu, onClick }) {
  return (
    <div
  className="spbu-card"
  onClick={onClick}
  style={{ cursor: "pointer" }}
>
      <div className="spbu-card-header">
        <div>
          <h3>{spbu.nama}</h3>
          <span className="spbu-number">{spbu.nomor}</span>
        </div>

        <span
          className={`spbu-status ${
            spbu.status === "Buka" ? "status-open" : "status-closed"
          }`}
        >
          {spbu.status}
        </span>
      </div>

      <p className="spbu-address">{spbu.alamat}</p>

      <div className="spbu-fuel-prices">
        <h4>Harga BBM</h4>

        {spbu.hargaBBM.map((bbm) => (
          <div className="fuel-price" key={bbm.nama}>
            <span>{bbm.nama}</span>
            <strong>
              Rp {(bbm.hargaSPBU ?? bbm.hargaNasional).toLocaleString("id-ID")}
            </strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpbuCard;
