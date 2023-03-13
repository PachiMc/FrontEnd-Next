"use client";
import userType from "@/model/User-type";
import React, { useEffect, useState } from "react";

export const contextUser = React.createContext({
  user: {} as userType | null,
  logUser: function (user: userType) {},
  removeUser: function () {},
  fetchUser: function () {},
});
function fetchUser() {
  let jwtToken = document.cookie.split("=")[1];
  return fetch(process.env.NEXT_PUBLIC_API + "User/GetPayload", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer " + jwtToken,
    },
  });
}
const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<userType | null>(null);
  useEffect(() => {
    let jwtToken = document.cookie.split("=")[1];
    if (!jwtToken) return setUser(null);
    fetchUser()
      .then((response) => response.json())
      .then((json) => {
        if (json.success) {
          setUser(json.data);
        }
      });
  }, []);
  const initialValueContext = {
    user: user,
    logUser: function (user: userType) {
      setUser(user);
    },
    removeUser: function () {
      setUser(null);
    },
    fetchUser: function () {
      fetchUser()
        .then((response) => response.json())
        .then((json) => {
          setUser(json.data);
        });
    },
  };

  return (
    <contextUser.Provider value={initialValueContext}>
      {children}
    </contextUser.Provider>
  );
};
export default UserProvider;
