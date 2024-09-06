// src/components/Button.jsx
export default function Button({ children, className, onClick }) {
  return (
    <button
      className={`btn ${className} bg-[#47A603] hover:bg-[#358000]`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
