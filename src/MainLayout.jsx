import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

const MainLayout = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div className="lg:w-4/5 w-11/12 mx-auto space-y-5">
      <h3 className="text-3xl pt-10 lg:pt-32 pb-5 text-center font-bold">
        Our Popular Products
      </h3>

      <Link to="/addCoffee">
        <button className="btn bg-[#E3B577] block mx-auto font-bold italic text-white border-2 border-gray-800">
          Add Coffee
        </button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffees={coffees}
            setCoffees={setCoffees}
            coffee={coffee}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default MainLayout;
