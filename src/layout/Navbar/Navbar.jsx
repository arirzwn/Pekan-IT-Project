import { useNavigate } from "react-router-dom";
import Button from "../../components/Button.jsx";
import Logo from "../../components/Logo.jsx";
import Navlink from "../../components/NavLink.jsx";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center mx-[60px]">
      <div className="navbar bg-base-100">
        <Logo />
        <Navlink />
      </div>
      <Button className="text-white" onClick={() => navigate("/donation")}>
        Donation
      </Button>
    </div>
  );
}
