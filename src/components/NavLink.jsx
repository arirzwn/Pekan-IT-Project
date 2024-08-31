export default function Navlink() {
  return (
    <div className="flex-none ">
      <ul className="menu menu-horizontal px-1   gap-2 ">
        <li className="active:bg-green-200">
          <a href="#">Beranda</a>
        </li>
        <li>
          <a href="#">Tentang Kami</a>
        </li>
        <li>
          <a href="#">Galeri</a>
        </li>
        <li>
          <a href="#">Berita</a>
        </li>
        <li>
          <a href="#">Kontak</a>
        </li>
      </ul>
    </div>
  );
}
