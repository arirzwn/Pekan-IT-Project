import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button.jsx";
import Logo from "../../components/Logo.jsx";
import Navlink from "../../components/NavLink.jsx";
import { MdMenu } from "react-icons/md";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest(".navbar-menu")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="relative">
      <div className="flex items-center mx-[60px] max-sm:mx-0">
        <div className="navbar bg-base-100 w-full flex justify-between items-center">
          <Logo />
          <div className="max-sm:hidden">
            <Navlink />
          </div>
          <div className="hidden max-sm:block">
            <button
              className="text-green-600 text-3xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <MdMenu />
            </button>
          </div>
          <Button
            className="text-white max-sm:hidden"
            onClick={() => navigate("/donation")}
          >
            Donation
          </Button>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`navbar-menu bg-base-100 w-3/4 max-sm:w-3/4 p-4 max-sm:max-h-screen overflow-y-auto transition-transform duration-300 transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Navlink vertical onClose={() => setMenuOpen(false)} />
        </div>
      </div>
    </div>
  );
}
