import Button from "../../components/Button.jsx";
import Logo from "../../components/Logo.jsx";
import Navlink from "../../components/NavLink.jsx";

const link = {};

export default function Navbar() {
  return (
    <>
      <div className="flex items-center mx-[60px]">
        <div className="navbar bg-base-100">
          <Logo />
          <Navlink />
        </div>
        <Button className="text-white"> Donation</Button>
      </div>
    </>
  );
}
