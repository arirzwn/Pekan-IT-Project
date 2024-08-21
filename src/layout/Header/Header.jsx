import { Banner } from "../../components/Banner.jsx";
import { InfoGrafis } from "../Infografis/InfoGrafis.jsx";

export function Header() {
  return (
    <>
      <div className="mx-[60px]">
        <Banner />
        <InfoGrafis />
      </div>
    </>
  );
}
