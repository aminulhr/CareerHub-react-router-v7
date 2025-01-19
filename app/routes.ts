import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("/", "./App.jsx", [
    index("./Home/Home.jsx"),
    route("applied", "./AppliedJob.jsx"),
    route("Statistics", "./Statistics.jsx"),
    route("blogs", "./Blogs.jsx"),
    route("jobs", "./ErrorPage.jsx"),
    route("job/:id", "./Home/JobDetails.jsx"),
  ]),
] satisfies RouteConfig;
