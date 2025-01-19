import { useLoaderData, useParams } from "react-router";

export async function jobDetailsLoader() {
  const response = await fetch("/jobs.json");
  if (!response.ok) {
    throw new Error("Failed to load job data");
  }
  return response.json();
}

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();

  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div>
      <h2>Job Details</h2>
      <p>
        <strong>Title:</strong> {job.title}
      </p>
      <p>
        <strong>Company:</strong> {job.company}
      </p>
    </div>
  );
};

export default JobDetails;
