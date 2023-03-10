"use client";
import React, { useContext, useRef } from "react";
import Link from "next/link";
import userType from "@/model/User-type";
import { contextUser } from "@/context/user-context";
import Swal from "sweetalert2";

const Register: React.FC = () => {
  const userContext = useContext(contextUser);
  const nameInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const checkInput = useRef<HTMLInputElement>(null);

  async function auth(user: userType) {
    const res = await fetch(process.env.NEXT_PUBLIC_API + "User/SignUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        password: user.password,
        name: user.name,
        admin: user.admin,
      }),
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const json = await res.json();
    if (json.success) {
      userContext.fetchUser();
      Swal.fire("Success", "User logged", "success");
    } else {
      Swal.fire("Error", "Error singin", "error");
    }
    return json;
  }
  return (
    <div className="form-control w-full max-w-xs m-auto">
      {userContext.user ? (
        <h1 className="m-auto text-lg">Logged as {userContext.user.name}</h1>
      ) : (
        <>
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input
            ref={nameInput}
            type="text"
            placeholder="Username..."
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            ref={passwordInput}
            type="password"
            placeholder="Password..."
            className="input input-bordered w-full max-w-xs"
          />
          <label className="my-5 label justify-start  cursor-pointer">
            <input ref={checkInput} type="checkbox" className="mr-5 checkbox" />
            <span className="label-text">Alow edit items (admin role)</span>
          </label>
          <button
            onClick={() => {
              auth({
                name: nameInput.current ? nameInput.current.value : "",
                password: passwordInput.current
                  ? passwordInput.current.value
                  : "",
                admin: checkInput.current ? checkInput.current.checked : false,
              });
            }}
            className="btn btn-outline my-8 btn-accent"
          >
            Register
          </button>
          <Link href="/login">Sign with your account here</Link>
        </>
      )}
    </div>
  );
};
export default Register;
