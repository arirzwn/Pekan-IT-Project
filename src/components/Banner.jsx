import "/src/index.css";

export function Banner({ children }) {
  return (
    <>
      <div className="container img-background mt-5 text-center text-5xl font-normal leading-snug h-[300px] max-sm:h-[66px] max-sm:rounded-none max-sm:leading-normal max-sm:flex max-sm:items-center max-sm:justify-center max-sm:text-center sm:h-[300px] sm:mx-0 sm:rounded-md md:h-[300px] md:mx-0 md:max-xl:flex xl:container xl:img-background xl:mt-5 xl:text-center xl:text-5xl xl:font-sm xl:leading-snug xl:h-auto">
        <span className="highlight-text text-white text-sm max-sm:text-2xl sm:text-sm md:text-sm xl:text-5xl">
          Join us in the fight for{" "}
          <span className="max-sm:hidden">
            <br />
          </span>{" "}
          the environment
        </span>
      </div>
    </>
  );
}
