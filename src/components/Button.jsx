export default function Button({ children, className }) {
  return (
    <button
      className={` btn ${className}  bg-[#47A603] hover:bg-[#265B00] `}
      // className={` btn ${className}  text-white  bg-[#47A603] hover:bg-[#265B00]`}
    >
      {children}
    </button>
  );
}
