// src/layout/PlayerVideo.jsx
import { useRef } from "react";

export default function PlayerVideo({ videoUrl, videoTitle }) {
  const iframeRef = useRef(null);

  const handleClose = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      const iframeSrc = iframe.src;
      iframe.src = "";
      iframe.src = iframeSrc;
    }
    document.getElementById("my_modal_4").close();
  };

  return (
    <>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={handleClose}
            >
              ✕
            </button>
          </form>
          <iframe
            ref={iframeRef}
            className="w-11/12 mx-auto mt-3 overflow-hidden rounded-xl border"
            width="560"
            height="400"
            src={`https://www.youtube.com/embed/${videoUrl}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </dialog>
    </>
  );
}
