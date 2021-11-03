import "./avatar.css";

export default function Avatar({ name, subTitle }) {
  return (
    <div className="chat-header">
      <span>{name[0]}</span>
      <div>
        <h4>{name}i</h4>
        <span>{subTitle ? subTitle : "last mesasge..."}</span>
      </div>
    </div>
  );
}
