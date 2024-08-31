import { Link } from "react-router-dom";

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
          <Link to="/galeri">Galeri</Link>
        </li>
        <li>
          <Link to="/berita">Berita</Link>
        </li>
        <li>
          <Link to="/kontak">Kontak</Link>
        </li>
      </ul>
    </div>
  );
}
