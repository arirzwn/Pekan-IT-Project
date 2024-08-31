import logo from "/src/assets/logo.png";

export default function Logo() {
  return (
    <div className="flex-1">
      <a className="btn btn-ghost ">
        {" "}
        <img src={logo} alt="Logo" className="w-36" />{" "}
      </a>
    </div>
  );
}
