import Button from "./Button.jsx";

export default function Box({ className, children }) {
  return (
    <div className="">
      <div className={`${className}  flex flex-col `}>
        <p className="text-white font-medium flex-grow">{children}</p>

        {/* Desktop */}
        <Button className="hidden xl:block rounded-full text-[#47a603] border-none bg-white w-24 font-bold text-lg">
          Join
        </Button>

        {/* Mobile */}
        <button className="block xl:hidden rounded-full bg-white text-[#47a603] w-24 text-base font-semibold max-sm:h-6 max-sm:w-14 max-sm:font-bold mt-3">
          Join
        </button>
      </div>
    </div>
  );
}
