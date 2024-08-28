import Button from "./Button.jsx";

export default function Box({ className, children }) {
  return (
    <div className="">
      <div className={`${className}  flex flex-col `}>
        <p className="text-white font-medium flex-grow">{children}</p>
        <Button className="rounded-full bg-white my-2 text-[#47a603] w-20 h-[2px] hover:text-white ">
          Join
        </Button>
      </div>
    </div>
  );
}
