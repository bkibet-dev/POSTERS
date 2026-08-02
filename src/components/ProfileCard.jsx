import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

export default function ProfileCard({ coach }) {
  return (
    <div className="profile-grid">
      <LeftPanel coach={coach} />
      <RightPanel coach={coach} />
    </div>
  );
}