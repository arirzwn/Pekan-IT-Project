import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "/src/index.css";

export default function Navlink() {
  return (
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1 gap-2">
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
          <ScrollLink to="aktifitas" smooth={true} duration={500}>
            Galeri
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="berita" smooth={true} duration={500}>
            Berita
          </ScrollLink>
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
