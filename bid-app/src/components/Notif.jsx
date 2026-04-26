import userdata from "../json/users.json"

export default function Notif({ message, visible }) {
  if (!visible) return null;

  return (
    <div className="w-full bg-[#0088FF] h-10 flex items-center justify-center px-4">
      <h1 className="notifstyle">{message}</h1>
    </div>
  );
}