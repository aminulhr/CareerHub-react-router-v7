import { Link } from "react-router";
const Jobs = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    contact_information,
  } = job;
  return (
    <div className="items-center justify-center flex mt-10">
      <div className="text-black bg-gray-300 w-4/5 gap-0 p-10 mt-5 rounded-md">
        <img src={logo} alt="" srcset="" />
        <p className="text-2xl font-semibold">{job_title}</p>
        <p>{company_name}</p>
        <div className="flex text-purple-500  ">
          <p className="border border-purple-600 p-1 m-1 rounded-md">
            {remote_or_onsite}
          </p>
          <p className="border border-purple-600 p-1 m-1 rounded-md">
            {job_type}
          </p>
        </div>
        <div className="flex">
          <p>{location}</p>
          <p className="ml-5  ">Salary: {salary}</p>
        </div>
        <Link to={`/job/${id}`}>
          <button className="bg-purple-400 p-2 rounded-md">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Jobs;
