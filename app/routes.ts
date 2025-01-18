import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./Home/Home.jsx"),
  route("footer", "./Footer/Footer.tsx"),
] satisfies RouteConfig;
