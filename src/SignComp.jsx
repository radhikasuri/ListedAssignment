import React, { useEffect, useState } from "react";
import "../styles/signin.css";

import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import Router from "next/router";
import data from "../data/data.json";

const signInComp = () => {
 


  const { data: session, status } = useSession();
  if (status === "authenticated") {
    Router.push("/dashboard");
  }
  return (
    <>
      <div className="login">
        <div className="sectioin-1">
          <h1>Board.</h1>
        </div>
        <div className="login-form">
          <h1>Sign In</h1>
          <h2>Sign in to your account</h2>
          <div className="signin-option">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "white",
                padding: "0px 5px",
                gap: "5px",
                borderRadius: "15px",
                color: "rgba(114, 113, 113, 0.697)",
                cursor: "pointer",
              }}
              onClick={() => signIn()}
            >
              <Image
                alt="me"
                width="25"
                height="25"
                src={"/google.png"}
                id="google"
              />{" "}
              <p>Sign in with Google</p>{" "}
            </div>
            <a href="#">
              <Image
                alt="me"
                width="25"
                height="25"
                src={"/apple.png"}
                id="apple"
              />{" "}
              <p>Sign in with Apple</p>{" "}
            </a>
          </div>
          <form action="">
            <label htmlFor="email">Email Address</label>
            <input
             
              type="text"
              name="email"
            />
            <label htmlFor="password" id="pass-label">
              Password
            </label>
            <input
             
              type="text"
              name="password"
            />
            <a href="#">Forgot Password?</a>
            <button >Sign In</button>
          </form>
          <div className="register-acc">
            <p>
              Don't have an account? <a href="#">Register here</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default signInComp;
