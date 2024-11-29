import { useState } from "react";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  return (
    <div className="md:w-4/5 w-11/12 mx-auto py-12">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="*:font-medium">
                <th>{index + 1}</th>
                <td>
                  <img
                    className="w-12 h-12 rounded-lg"
                    src={user.photo}
                    alt={user.name}
                  />
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.createdTime}</td>
                <td>
                  <div className="flex gap-2 items-center">
                    <button className="text-info text-2xl">
                      <MdOutlineEdit />
                    </button>

                    <button className="text-rose-500 text-2xl">
                      <MdDeleteOutline />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
