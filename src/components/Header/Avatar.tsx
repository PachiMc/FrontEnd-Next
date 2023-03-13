"use client";
import { contextUser } from "@/context/user-context";
import { useContext } from "react";
const Avatar = () => {
  const userContext = useContext(contextUser);

  return (
    <div className="avatar online placeholder">
      <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
        <span className="text-xl">
          {userContext.user?.name.charAt(0).toUpperCase()}
        </span>
      </div>
    </div>
  );
};
export default Avatar;
