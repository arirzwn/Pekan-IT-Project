// src/layout/Footer/Footer.jsx
import { useNavigate } from "react-router-dom";
import bgFooter from "/src/assets/bg-footer.png";
import logoFooter from "/src/assets/logo-footer.png";
import normalLogo from "/src/assets/logo.png";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import Button from "../../components/Button.jsx";
import "/src/index.css";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <div className="flex h-[350px]">
          <div className="relative w-1/2 overflow-hidden">
            <img
              src={bgFooter}
              alt="Background"
              className="w-[100%] object-cover"
            />
            <div className="bg-[#365E32] bg-opacity-65 absolute inset-0 flex justify-center items-center">
              <div className="text-center">
                <h3 className="uppercase text-2xl font-semibold text-white mb-5 flex items-center justify-center gap-3">
                  <a href="#"> Take Action </a>
                  <IoArrowForwardCircleOutline className="text-3xl" />
                </h3>
                <h3 className="uppercase text-2xl font-semibold text-white flex items-center justify-center gap-3">
                  <a href="#"> Partner With Us</a>
                  <IoArrowForwardCircleOutline className="text-3xl" />
                </h3>
                <Button
                  className="mt-4 border-none text-white px-7"
                  onClick={() => navigate("/donation")}
                >
                  DONASI
                </Button>
              </div>
            </div>
          </div>
          <div className="container bg-[#DEF9C4] w-1/2 flex justify-center items-center gap-10 text-sm text-[#365E32] relative">
            <div className="flex items-start gap-10">
              <div className="kiri border-r-2 border-[#365E32] pr-10">
                <div className="flex items-center mb-2">
                  <div>
                    <h1 className="font-semibold text-xl mr-2">TENTANG</h1>
                  </div>
                  <div className="-mt-2">
                    <a href="#">
                      <img src={logoFooter} alt="Logo" className="h-[1.5rem]" />
                    </a>
                  </div>
                </div>
                <ul className="">
                  <li className="mb-2">News and Article</li>
                  <li className="mb-2">Stories</li>
                  <li className="mb-2">Events</li>
                </ul>
                <div className="flex gap-4 mt-4">
                  <div className="h-3 w-3 p-4 border-[3px] border-[#365E32] rounded-full flex justify-center items-center">
                    <a href="#">
                      <FaFacebookF className="text-xl" />
                    </a>
                  </div>
                  <div className="h-3 w-3 p-4 border-[3px] border-[#365E32] rounded-full flex justify-center items-center">
                    <a href="#">
                      <FaLinkedinIn className="text-xl" />
                    </a>
                  </div>
                  <div className="h-3 w-3 p-4 border-[3px] border-[#365E32] rounded-full flex justify-center items-center">
                    <a href="#">
                      <FaInstagram className="text-xl" />
                    </a>
                  </div>
                  <div className="h-3 w-3 p-4 border-[3px] border-[#365E32] rounded-full flex justify-center items-center">
                    <a href="#">
                      <FaGithub className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="kanan">
                <h1 className="font-semibold text-xl mb-2">NEWS AND EVENTS</h1>
                <ul>
                  <li className="mb-2">News and Article</li>
                  <li className="mb-2">Stories</li>
                  <li className="mb-2">Events</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[100px] bg-[#365E32] px-[70px] flex justify-between items-center">
          <a href="#" className="flex gap-2 items-center">
            <p className="text-white">
              Copyright © {new Date().getFullYear()} - All right reserved by
            </p>
            <figure>
              <img src={normalLogo} alt="" className="w-28" />
            </figure>
          </a>
          <div className="flex gap-7">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow active:outline-0"
                placeholder="Email"
              />
            </label>
            <Button className="bg-transparent text-white">SUBSCRIBE</Button>
          </div>
        </div>
      </div>
    </>
  );
}
