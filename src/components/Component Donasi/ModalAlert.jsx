export default function ModalAlert({ message, onClose }) {
  return (
    <div className="">
      <div className="">
        <span className="text-xs text-red-600">{message}</span>
      </div>
    </div>
  );
}
