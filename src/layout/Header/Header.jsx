import { Banner } from "../../components/Banner.jsx";
import { InfoGrafis } from "../Infografis/InfoGrafis.jsx";

export function Header() {
  return (
    <>
      <div className="mx-[60px]  max-sm:mx-0">
        <Banner />
        <InfoGrafis />
      </div>
    </>
  );
}
