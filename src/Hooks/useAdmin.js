import React, { useEffect, useState } from "react";
import axiosPrivate from "../Components/api/axiosSecret";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      axiosPrivate
        .get(`https://secure-tundra-52994.herokuapp.com/admin/${email}`)
        .then((res) => {
          console.log(res);
          setAdmin(res.data.admin);
          setAdminLoading(false);
        });
      //   fetch(`https://secure-tundra-52994.herokuapp.com/admin/${email}`, {
      //     method: "GET",
      //     headers: {
      //       "content-type": "application/json",
      //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      //     },
      //   })
      //     .then((res) => res.json())
      //     .then((data) => {
      //       setAdmin(data.admin);
      //       setAdminLoading(false);
      //     });
    }
  }, [user]);
  return [admin, adminLoading];
};

export default useAdmin;
