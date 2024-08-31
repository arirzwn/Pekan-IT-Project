import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Navlink() {
  return (
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1 gap-2">
        <li className="active:bg-green-200">
          <Link to="/">Beranda</Link>
        </li>
        <li>
          <Link to="/tentang-kami">Tentang Kami</Link>
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
          <Link to="/kontak">Kontak</Link>
        </li>
      </ul>
    </div>
  );
}
