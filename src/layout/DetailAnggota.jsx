// src/layout/DetailAnggota.jsx
import "/src/index.css";
import Judul from "../components/Judul.jsx";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function DetailAnggota({ member }) {
  return (
    <div>
      <dialog id="my_modal_3" className="modal border mx-auto">
        <div className="modal-box border h-full bg-white">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>
            <Judul className="">Arisan's People</Judul>
          </div>
          <div className="flex gap-x-10 mt-4">
            <div className="flex-1 ">
              <figure className="w-full h-full">
                <img
                  src={member.img}
                  alt="Foto Profile"
                  className="w-full h-full object-cover"
                />
              </figure>
            </div>
            <div className="flex-1 flex flex-col">
              <h1 className="text-2xl mb-2 font-semibold">{member.nama}</h1>
              <p className="text-justify text-sm">{member.moto}</p>
              <div className="flex gap-4 mt-auto">
                <div className="h-3 w-3 p-4 border-[3px] border-[#FF9100] rounded-full flex justify-center items-center">
                  <a target="_blank" href={member.sosmed.fb}>
                    <FaFacebookF className="text-xl text-[#FF9100]" />
                  </a>
                </div>
                <div className="h-3 w-3 p-4 border-[3px] border-[#FF9100] rounded-full flex justify-center items-center">
                  <a target="_blank" href={member.sosmed.linkdn}>
                    <FaLinkedinIn className="text-xl text-[#FF9100]" />
                  </a>
                </div>
                <div className="h-3 w-3 p-4 border-[3px] border-[#FF9100] rounded-full flex justify-center items-center">
                  <a target="_blank" href={member.sosmed.ig}>
                    <FaInstagram className="text-xl text-[#FF9100]" />
                  </a>
                </div>
                <div className="h-3 w-3 p-4 border-[3px] border-[#FF9100] rounded-full flex justify-center items-center">
                  <a target="_blank" href={member.sosmed.github}>
                    <FaGithub className="text-xl text-[#FF9100]" />
                  </a>
                </div>
              </div>
            </div>
            {/*<div></div>*/}
          </div>
        </div>
      </dialog>
    </div>
  );
}
