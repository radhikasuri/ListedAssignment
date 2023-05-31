import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const login = () => {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <div>
        Signed in as {session.user.email} <br />
        <img src={session.user.image} style={{borderRadius: "50px"}}/>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <div>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
};

export default login;
