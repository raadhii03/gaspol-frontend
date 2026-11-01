
import { useEffect, useState } from "react";

function SpbuApi() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    async function fetchData() {
        setLoading(true);
        setError("");

        try {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts?_limit=5"
            );

            if (!response.ok) {
                throw new Error("Gagal mengambil data dari server");
            }

            const result = await response.json();
            setData(result);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section className="spbu-list-section">
            <div className="section-heading">
                <div>
                    <h2>Informasi & Tips SPBU</h2>
                    <p>Informasi dari Mock API JSONPlaceholder</p>
                </div>
            </div>

            {loading && <p>Memuat data...</p>}

            {error && (
                <div className="empty-state">
                    <h3>Terjadi Kesalahan</h3>
                    <p>{error}</p>
                    <button onClick={fetchData}>
                        Coba Lagi
                    </button>
                </div>
            )}

            {!loading && !error && (
                <div className="spbu-grid">
                    {data.map((item) => (
                        <div className="spbu-card" key={item.id}>
                            <h3>Informasi #{item.id}</h3>
                            <h4>{item.title}</h4>
                            <p>{item.body}</p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default SpbuApi;
