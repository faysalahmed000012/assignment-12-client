import React from "react";
import { useQuery } from "react-query";
import axiosPrivate from "../../api/axiosSecret";
import Loading from "../../Shared/Loading/Loading";

const Users = () => {
  const { data, isLoading, refetch } = useQuery("users", () =>
    axiosPrivate.get(`http://localhost:5000/users`)
  );
  const users = data?.data;

  const makeAdmin = (user) => {
    const { email } = user;
    axiosPrivate
      .put(`http://localhost:5000/users/admin/${email}`)
      .then((res) => {
        console.log(res);
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h3>Load all users : {users.length}</h3>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
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
