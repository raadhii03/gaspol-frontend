
function Sidebar({ activeMenu, onMenuChange }) {
  const menuItems = [
    { id: "dashboard", icon: "▦", label: "Dashboard" },
    { id: "spbu", icon: "⌖", label: "Daftar SPBU" },
    { id: "add", icon: "＋", label: "Tambah SPBU" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <h2>
          Gas<span>Pol</span>
        </h2>
        <p>Fuel Station Finder</p>
      </div>

      <div className="sidebar-menu">
        <p className="menu-label">MENU UTAMA</p>

        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`menu-item ${activeMenu === item.id ? "active" : ""}`}
            onClick={() => onMenuChange(item.id)}
          >
            <span>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>

      <div className="sidebar-footer">
        <p>GasPol</p>
        <span>Temukan SPBU, lanjutkan perjalanan.</span>
      </div>
    </aside>
  );
}

export default Sidebar;
