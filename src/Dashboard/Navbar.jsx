import React, { useEffect } from "react";
import "../../styles/Dashboard/navbar.css";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Router, { useRouter } from "next/router";

const Navbar = () => {
  const {data: session, status} = useSession();
  const router = useRouter();

  let avatarImg;
  if(session?.user?.image != undefined){
    avatarImg = session.user.image
  }
  else{
    avatarImg = "https://lh3.googleusercontent.com/a/AAcHTtdt8R3Wm5yUJzfrH5_RGBJqYV_z83VDI1IT0_QEIA=s96-c"
  }

  useEffect(() => {
    if(status  !== "authenticated"){
      router?.push("/temp")
    }

  }, [])
  
  return (
    <>
      <div className="dash_Navbar">
        <div>
          <p className="dashTitle">Dashboard</p>
        </div>
        <div className="rightNavbar">
          <form>
            <input type="search" placeholder="Search..." />
            <button type="submit">Search</button>
          </form>
          <Image src={"/bell.png"} width={"18"} height={"18"} alt="bell"/>
            <img className="dashAvatar" src={avatarImg} width={"24"} height={24}/>
        </div>
      </div>
    </>
  );
};

export default Navbar;
