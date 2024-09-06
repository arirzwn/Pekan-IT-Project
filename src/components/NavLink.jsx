import { NavLink } from "react-router-dom";
import Scrollbar from "smooth-scrollbar";
import { MdClose } from "react-icons/md";
import "/src/index.css";

export default function Navlink({ vertical, onClose }) {
  const handleScroll = (targetId) => {
    const scrollbar = Scrollbar.get(
      document.getElementById("scroll-container"),
    );
    const targetElement = document.getElementById(targetId);
    if (scrollbar && targetElement) {
      scrollbar.scrollIntoView(targetElement, {
        offsetTop: -70,
        alignToTop: true,
      });
    }
  };

  return (
    <div className="flex-none">
      <ul
        className={`menu ${vertical ? "menu-vertical w-full" : "menu-horizontal px-1 gap-2"}`}
      >
        {vertical && (
          <li className="flex justify-end">
            <button onClick={onClose} className="text-2xl">
              <MdClose />
            </button>
          </li>
        )}
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            end
          >
            Beranda
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tentang-kami"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Tentang Kami
          </NavLink>
        </li>
        <li>
          <button onClick={() => handleScroll("aktifitas")}>Galeri</button>
        </li>
        <li>
          <button onClick={() => handleScroll("berita")}>Berita</button>
        </li>
        <li>
          <NavLink
            to="/kontak"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Kontak
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
