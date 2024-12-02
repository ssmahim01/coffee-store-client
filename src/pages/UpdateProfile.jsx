import { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const UpdateProfile = () => {
  const { updateUserProfile } = useContext(AuthContext);
  const user = useLoaderData();
  //   console.log(user);
  const navigate = useNavigate();
  const { _id, name, photo } = user;

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;

    const userInfo = { name, photo };

    const profile = {displayName:name, photoURL:photo };

    fetch(`https://espresso-emporium-server-lyart.vercel.app/users/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "User Info Updated Successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });

          updateUserProfile(profile)
            .then(() => {
              navigate("/usersProfile");
            })
            .catch((error) => {
              // console.log(error.message);
              swal.fire({
                title: "Error!",
                text: "Failed to Update",
                icon: "error",
                confirmButtonText: "Okay",
              });
            })
        }
      });
  };

  return (
    <div>
      <div className="bg-base-200">
        <Link
          to="/usersProfile"
          className="lg:ml-48 ml-5 flex gap-3 items-center pt-12"
        >
          <FaArrowLeft className="text-xl" />{" "}
          <span className="font-rancho text-3xl font-bold">Back to Users</span>
        </Link>

        <div className="hero py-16">
          <div className="hero-content lg:w-4/12 md:w-3/4 mx-auto w-full flex-col">
            <div className="text-center lg:text-left">
              <h1 className="md:text-4xl text-3xl font-bold">
                Update Your Profile
              </h1>
            </div>
            <div className="card bg-base-100 w-full shrink-0 shadow-md mt-6">
              <form className="card-body" onSubmit={handleUpdate}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    defaultValue={name}
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Photo</span>
                  </label>
                  <input
                    type="text"
                    placeholder="PhotoURL"
                    name="photo"
                    defaultValue={photo}
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary text-white text-xl font-rancho font-bold">
                    Update Info
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
