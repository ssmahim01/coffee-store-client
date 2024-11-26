import { FaEye } from "react-icons/fa";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, photo } =
    coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: 'DELETE',
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Good Luck!!!",
                text: "Deleted Coffee Details",
                icon: "success",
              });

              const remaining = coffees.filter(coffeeData => coffeeData._id !== _id);

              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card lg:card-side bg-[#F5F4F1] shadow-md py-2">
      <figure>
        <img src={photo} alt={name} />
      </figure>
      <div className="lg:w-full w-11/12 mx-auto lg:pr-5 flex justify-between items-center">
        <div>
          <h2 className="card-title font-bold">
            Name: <span className="text-gray-500">{name}</span>
          </h2>
          <p className="font-bold">
            Quantity: <span className="text-gray-500">{quantity}</span>
          </p>

          <p className="font-bold">
            Supplier: <span className="text-gray-500">{supplier}</span>
          </p>

          <p className="font-bold">
            Taste: <span className="text-gray-500">{taste}</span>
          </p>

          <p className="font-bold">
            Category: <span className="text-gray-500">{category}</span>
          </p>
        </div>

        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-2">
            <button className="btn join-item bg-[#D2B48C] text-white">
            <FaEye className="text-2xl"/>
            </button>
            <Link to={`/updateCoffee/${_id}`}>
            <button className="w-full btn btn-neutral text-white">
            <MdModeEdit className="text-2xl"/>
            </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn join-item btn-error text-white"
            >
              <MdDelete className="text-2xl"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
