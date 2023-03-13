"use client";
import React, { useContext, useRef } from "react";
import Link from "next/link";
import { contextUser } from "@/context/user-context";
import Swal from "sweetalert2";

const Login: React.FC = () => {
  const userContext = useContext(contextUser);
  const nameInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  async function signIn(name: string, password: string) {
    const res = await fetch(process.env.NEXT_PUBLIC_API + "User/SignIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        name: name,
        password: password,
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
          <button
            onClick={() => {
              signIn(
                nameInput.current ? nameInput.current.value : "",
                passwordInput.current ? passwordInput.current.value : ""
              );
            }}
            className="btn btn-outline my-8 btn-accent"
          >
            Login
          </button>
          <Link href="/register">Create an account here</Link>{" "}
        </>
      )}
    </div>
  );
};
export default Login;
