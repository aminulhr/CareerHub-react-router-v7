import React, { useState } from "react";
import { useParams } from "react-router";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Job Details</h1>
    </div>
  );
};

export default JobDetails;
