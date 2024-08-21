import { Card } from "../../components/Card.jsx";

const gambar = [
  {
    image:
      "https://images.unsplash.com/photo-1643701322278-768c884dc527?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Donate and help the environment",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Donate and help the ",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1657310217094-2214abf4fd88?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Donate and help the ",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1647891937869-bc31fe3f9836?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Donate and help the ",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1647891936817-e46599e151b8?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Donate and help the ",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1657310217346-c452fb3fb785?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Donate and help the ",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export function InfoGrafis() {
  return (
    <>
      <div className="flex  justify-between items-center mt-10 ">
        <Card
          gambar="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-[238px] h-[116px]"
        />{" "}
        <Card
          gambar="/src/assets/gambar-donate.png"
          className="w-[238px] h-[275px] "
          teks="Donate and help the environtment"
        />{" "}
        <Card
          gambar="/src/assets/gambar-utama.png"
          className="w-[236px] h-[364px]"
          teks=" Share with us your result"
        />
        <Card
          gambar="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-[238px] h-[275px] "
        />
        <Card
          gambar="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-[238px] h-[116px]"
        />{" "}
      </div>
    </>
  );
}
