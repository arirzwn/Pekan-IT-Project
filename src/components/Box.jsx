import Button from "./Button.jsx";

export default function Box({ className, children }) {
  return (
    <div className="box">
      <div className={`${className} p-5 flex flex-col h-full`}>
        <p className="text-white font-medium flex-grow">{children}</p>
        <Button className="rounded-full bg-white text-[#47a603] w-20 h-[2px] hover:text-white mt-auto">
          Join
        </Button>
      </div>
    </div>
  );
}
