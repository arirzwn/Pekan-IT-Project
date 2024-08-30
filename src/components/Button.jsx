// src/components/Button.jsx
export default function Button({ children, className, onClick }) {
  return (
    <button className={`btn ${className} bg-[#47A603]`} onClick={onClick}>
      {children}
    </button>
  );
}
