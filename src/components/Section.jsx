export default function Section({ title, items }) {
  return (
    <div className="info-block">
      <h4 className="section-header">{title}</h4>
      {items.map((item, index) => (
        <div className="info-item" key={index}>
          <span className="label">{item.label}</span>
          {item.type === "list" ? (
            <ul>
              {item.value.map((li, i) => (
                <li key={i}>{li}</li>
              ))}
            </ul>
          ) : (
            <p>{item.value}</p>
          )}
        </div>
      ))}
    </div>
  );
}