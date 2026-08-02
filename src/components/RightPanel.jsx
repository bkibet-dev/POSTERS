import Section from "./Section";

export default function RightPanel({ coach }) {
  const section1Items = [
    { label: "Strength", value: coach.strength, type: "text" },
    { label: "Expertise", value: coach.expertise, type: "text" }
  ];

  const section2Items = [
    { label: "Coaching Focus", value: coach.coachingFocus, type: "text" },
    { label: "Main Focus", value: coach.mainFocus, type: "list" }
  ];

  if (coach.tacticsText) {
    section2Items.push({ label: coach.tacticsTitle || "Tactics", value: coach.tacticsText, type: "text" });
  }

  const trainingItems = [
    { label: "Main Focus", value: coach.trainingMainFocus, type: "list" },
    { label: "Also", value: coach.also, type: "text" }
  ];

  return (
    <div className="right-panel">
      <Section title={coach.section1Title} items={section1Items} />
      <Section title={coach.section2Title} items={section2Items} />
      <Section title={coach.trainingTitle} items={trainingItems} />

      {coach.accoladesTitle && (
        <div className="info-block">
          <h4 className="section-header">{coach.accoladesTitle}</h4>
          <p>{coach.accoladesText}</p>
        </div>
      )}
    </div>
  );
}