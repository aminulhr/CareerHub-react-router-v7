import { useEffect, useState } from "react";
import Jobs from "./Jobs";

const Featured = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="mt-32">
      <div className="text-center text-black">
        <h1 className="text-5xl font-bold">Featured Jobs</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 justify-items-center">
        {jobs.map((job) => (
          <Jobs id={job.id} job={job}></Jobs>
        ))}
      </div>
    </div>
  );
};

export default Featured;
