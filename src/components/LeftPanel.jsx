export default function LeftPanel({ coach }) {
  return (
    <div className="left-panel">
      <div className="image-container">
        <img src={coach.image} alt={coach.name} />
        <div className="image-overlay">
          <h1>{coach.name}</h1>
        </div>
      </div>
      <div className="left-content">
        <h2>{coach.title}</h2>
        <h3>{coach.aboutTitle}</h3>
        <p>{coach.aboutText}</p>
        <blockquote className="quote">"{coach.quote}"</blockquote>
      </div>
    </div>
  );
}