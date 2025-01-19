import React from "react";
import { Link } from "react-router";
const Blogs = () => {
  return (
    <div>
      <h1> My Blogs </h1>
      <button>
        <Link to="/">Go Back Home </Link>
      </button>
    </div>
  );
};

export default Blogs;
