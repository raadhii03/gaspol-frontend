
function SummaryCards({ total, buka, tutup }) {
  const summaries = [
    {
      label: "Total SPBU",
      value: total,
      icon: "⛽",
      color: "blue",
    },
    {
      label: "SPBU Beroperasi",
      value: buka,
      icon: "✓",
      color: "green",
    },
    {
      label: "SPBU Tutup",
      value: tutup,
      icon: "✕",
      color: "red",
    },
  ];

  return (
    <section className="summary-cards">
      {summaries.map((item) => (
        <div className="summary-card" key={item.label}>
          <div className={`summary-icon ${item.color}`}>
            {item.icon}
          </div>

          <div>
            <p>{item.label}</p>
            <h2>{item.value}</h2>
          </div>
        </div>
      ))}
    </section>
  );
}

export default SummaryCards;
