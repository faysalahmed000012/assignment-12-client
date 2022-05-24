import axios from "axios";
import React, { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    console.log("user inside useToken", user);
    const email = user?.user?.email;
    const name = user?.user?.displayName;
    const currentUser = { email: email, name: name };
    if (email) {
      axios
        .put(`http://localhost:5000/users/${email}`, currentUser)
        .then((response) => {
          const accessToken = response.data.token;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);

  return [token];
};

export default useToken;
