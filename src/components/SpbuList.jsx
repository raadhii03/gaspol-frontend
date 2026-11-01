
import SpbuCard from "./SpbuCard";

function SpbuList({ data, onSelectSpbu }) {
    return (
        <section className="spbu-list-section">
            <div className="section-heading">
                <div>
                    <h2>Daftar SPBU</h2>
                    <p>Informasi SPBU yang tersedia di GasPol</p>
                </div>

                <span>{data.length} SPBU ditemukan</span>
            </div>

            {data.length === 0 ? (
                <div className="empty-state">
                    <h3>Belum ada data SPBU</h3>
                    <p>Silakan tambahkan data SPBU terlebih dahulu.</p>
                </div>
            ) : (
                <div className="spbu-grid">
                    {data.map((spbu) => (
                        <SpbuCard
                            key={spbu.id}
                            spbu={spbu}
                            onClick={() => onSelectSpbu(spbu)}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}

export default SpbuList;
