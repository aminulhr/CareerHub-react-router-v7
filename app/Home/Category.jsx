import { useEffect, useState } from "react";

const Category = () => {
  const [categorie, setcategorie] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setcategorie(data));
  }, []);
  return (
    <div className="text-center mt-20 text-black ">
      <h1 className="text-5xl font-bold">
        Job Category List: {categorie.length}{" "}
      </h1>
      <p>
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="flex flex-wrap justify-center  ">
        {categorie.map((cart) => (
          <div key={cart.id} className="m-4 p-4 bg-gray-200  rounded-md">
            <div className="bg-gray-300 w-16 h-16 rounded-md flex items-center justify-center">
              <img className="w-10 h-10" src={cart.logo} alt="" />
            </div>
            <h1 className="text-xl font-bold">{cart.category_name}</h1>
            <p>{cart.availability}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
