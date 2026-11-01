
import { useState } from "react";
import "./App.css";

import Header from "./components/header";
import Sidebar from "./components/sidebar";
import SummaryCards from "./components/SummaryCards";
import SpbuList from "./components/SpbuList";
import SpbuForm from "./components/SpbuForm";
import SpbuDetail from "./components/SpbuDetail";
import SpbuApi from "./components/SpbuApi";

function App() {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [selectedSpbu, setSelectedSpbu] = useState(null);

  const [spbuData, setSpbuData] = useState([
    {
      id: 1,
      nama: "SPBU Soekarno-Hatta",
      nomor: "31.123.01",
      alamat: "Jl. Soekarno-Hatta, Bandung",
      status: "Buka",
      hargaBBM: [
        { nama: "Pertalite", hargaNasional: 10000, hargaSPBU: null },
        { nama: "Pertamax", hargaNasional: 12750, hargaSPBU: 13000 },
        { nama: "Pertamax Turbo", hargaNasional: 13800, hargaSPBU: null },
      ],
    },
    {
      id: 2,
      nama: "SPBU Dago",
      nomor: "34.401.02",
      alamat: "Jl. Ir. H. Juanda, Bandung",
      status: "Buka",
      hargaBBM: [
        { nama: "Pertalite", hargaNasional: 10000, hargaSPBU: null },
        { nama: "Pertamax", hargaNasional: 12750, hargaSPBU: null },
        { nama: "Pertamax Turbo", hargaNasional: 13800, hargaSPBU: 14000 },
      ],
    },
    {
      id: 3,
      nama: "SPBU Buah Batu",
      nomor: "34.402.01",
      alamat: "Jl. Buah Batu, Bandung",
      status: "Tutup",
      hargaBBM: [
        { nama: "Pertalite", hargaNasional: 10000, hargaSPBU: null },
        { nama: "Pertamax", hargaNasional: 12750, hargaSPBU: null },
        { nama: "Pertamax Turbo", hargaNasional: 13800, hargaSPBU: null },
      ],
    },
  ]);

  function handleAddSpbu(spbuBaru) {
    setSpbuData((dataSebelumnya) => [...dataSebelumnya, spbuBaru]);
    setActiveMenu("spbu");
  }

  const totalSpbu = spbuData.length;
  const spbuBuka = spbuData.filter(
    (spbu) => spbu.status === "Buka"
  ).length;
  const spbuTutup = spbuData.filter(
    (spbu) => spbu.status === "Tutup"
  ).length;

  return (
    <div className="app-container">
      <Sidebar
        activeMenu={activeMenu}
        onMenuChange={setActiveMenu}
      />

      <main className="main-content">
        <Header />


        <div className="dashboard-content">
          {!selectedSpbu && (
            <>
              {activeMenu === "dashboard" && (
                <>
                  <div className="welcome-section">
                    <h2>Selamat Datang di GasPol!</h2>
                    <p>Pantau informasi dan temukan SPBU dengan mudah.</p>
                  </div>

                  <SummaryCards
                    total={totalSpbu}
                    buka={spbuBuka}
                    tutup={spbuTutup}
                  />

                  <SpbuList
                    data={spbuData}
                    onSelectSpbu={setSelectedSpbu}
                  />
                </>
              )}

              {activeMenu === "spbu" && (
                <SpbuList
                  data={spbuData}
                  onSelectSpbu={setSelectedSpbu}
                />
              )}

              {activeMenu === "add" && (
                <SpbuForm onAddSpbu={handleAddSpbu} />
              )}
              {activeMenu === "api" && (
  <SpbuApi />
)}
            </>
          )}

          {selectedSpbu && (
            <SpbuDetail
              spbu={selectedSpbu}
              onBack={() => setSelectedSpbu(null)}
            />
          )}
        </div>

      </main>
    </div>
  );
}

export default App;
