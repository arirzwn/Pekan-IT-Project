import { BsQrCode, BsQrCodeScan } from "react-icons/bs";
import QRCode from "/src/assets/qr-code.svg";

export default function Modal() {
  return (
    <>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box flex flex-col items-center">
          <h3 className="font-bold text-lg">Silahkan Scan QR Berikut</h3>
          <figure className="mx-auto">
            <img src={QRCode} alt="QR Code" />
          </figure>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Tutup</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
