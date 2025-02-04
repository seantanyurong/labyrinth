import Balancer from "react-wrap-balancer";

export default function Hero() {
  return (
    <section className="relative bg-blue-500">
      {/* Illustration behind hero content */}
      {/* <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div> */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-44 pb-24 md:pt-52 md:pb-28">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-[4.5em] font-bold leading-none mb-6 text-white"
              data-aos="zoom-y-out"
            >
              <Balancer>
                Join the private network for restaurant owners.
              </Balancer>

              {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              </span> */}
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-2xl md:text-3xl text-white mb-8 font-montreal"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Labryinth is a highly vetted membership community for
                restaurant, cafe and bar owners.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <a
                    className="btn shadow-4xl text-brown-400 font-montreal bg-[#071112] hover:bg-black hover:shadow-3xl w-full sm:w-auto sm:ml-4 px-24 border-[1px] transition duration-[0.4s] border-brown-400 text-xl"
                    href="#0"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          {/* <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          /> */}
        </div>
      </div>
    </section>
  );
}
