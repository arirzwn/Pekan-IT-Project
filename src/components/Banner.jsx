import "/src/index.css";

export function Banner({ children }) {
  return (
    <>
      <div className="img-background  rounded-md  mt-5  text-center  text-5xl font-normal leading-snug">
        <span className="highlight-text text-white">
          Join us in the fight for <br /> the environment
        </span>
      </div>
    </>
  );
}

/* className="text-white py-3 highlight highlight-variant-5 highlight-[#008000] highlight-spread-x-xl highlight-spread-y-sm" */
