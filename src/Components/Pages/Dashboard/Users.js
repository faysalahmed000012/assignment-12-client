import React from "react";
import { useQuery } from "react-query";
import axiosPrivate from "../../api/axiosSecret";
import Loading from "../../Shared/Loading/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.config";
import { toast } from "react-toastify";

const Users = () => {
  const { data, isLoading, refetch } = useQuery("users", () =>
    axiosPrivate.get(`https://secure-tundra-52994.herokuapp.com/users`)
  );
  const users = data?.data;

  const makeAdmin = (user) => {
    const { email } = user;
    axiosPrivate
      .put(`https://secure-tundra-52994.herokuapp.com/users/admin/${email}`)
      .then((res) => {
        console.log(res);
        refetch();
        toast.success(`Successfully Made ${user.email} An Admin`);
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h3>Load all users : {users.length}</h3>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>

              <th>Email</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={user._id}>
                  <th>{index + 1}</th>

                  <td>{user.email}</td>
                  <td>
                    {user.role !== "admin" && (
                      <>
                        <button
                          onClick={() => makeAdmin(user)}
                          className="btn btn-primary btn-xs"
                        >
                          Make Admin
                        </button>
                      </>
                    )}
                    {user.role === "admin" && "Admin"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
