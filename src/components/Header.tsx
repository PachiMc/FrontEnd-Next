"use client";
import Link from "next/link";
import Search from "./Search";
import Avatar from "./Avatar";
import Cart from "./Cart";
const logged = true;
const Home: React.FC = () => {
  return (
    <header className="h-32 items-center flex flex-row-reverse  ">
      <Link href="/register">
        <button className="m-5 btn btn-active btn-primary">
          {logged ? "logout" : "login"}
        </button>
      </Link>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href={"./"}>
            <div className="btn btn-ghost normal-case text-xl">Shop-App</div>
          </Link>
        </div>
        <div className="justify-center gap-5">
          <Search />
          <Cart />
          <Avatar />
        </div>
      </div>
    </header>
  );
};
export default Home;
