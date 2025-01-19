const Banner = () => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <h1 className="font-extrabold text-6xl ">
          One Step <br /> Closer To Your <br />{" "}
          <span className="text-purple-400">Dream Job</span>
        </h1>
        <p>
          Explore thousands of job opportunities with all the <br /> information
          you need. Its your future. Come find it. Manage all <br /> your job
          application from start to finish.
        </p>
        <button className="text-white bg-purple-500 p-4 m-4 rounded-lg">
          Get Started
        </button>
      </div>
      <div>
        <img
          className="w-96 h-90"
          src="/assets/images/user.png"
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
};

export default Banner;
