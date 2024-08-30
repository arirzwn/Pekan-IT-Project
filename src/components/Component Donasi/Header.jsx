export default function Header({ className, children }) {
  return (
    <>
      <div className="">
        <h5 className={`text-xl font-semibold text-[#47A603] ${className}`}>
          {children}
        </h5>
      </div>
    </>
  );
}
