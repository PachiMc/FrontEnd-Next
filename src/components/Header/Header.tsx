"use client";
import Link from "next/link";
import Avatar from "./Avatar";
import Cart from "./Cart";
import { contextUser } from "@/context/user-context";
import { useContext } from "react";

const Home: React.FC = () => {
  const userContext = useContext(contextUser);
  const logout = () => {
    localStorage.clear();
    fetch(process.env.NEXT_PUBLIC_API + "User/Logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    userContext.removeUser();
  };
  return (
    <header className="h-32 items-center flex flex-row-reverse  ">
      {userContext.user ? (
        <button className="m-5 btn btn-active btn-primary" onClick={logout}>
          Logout
        </button>
      ) : (
        <Link className="m-5 btn btn-active btn-primary" href="/login">
          Log in
        </Link>
      )}
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href={"./"}>
            <div className="btn btn-ghost normal-case text-xl">Shop-App</div>
          </Link>
        </div>
        {userContext.user?.admin && (
          <Link className="m-5 btn btn-active btn-success" href="/new">
            Add item
          </Link>
        )}
        {userContext.user ? (
          <div className="justify-center gap-5">
            <Cart />
            <Avatar />
          </div>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
};
export default Home;
