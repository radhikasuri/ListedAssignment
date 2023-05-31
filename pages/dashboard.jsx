import Cards from "@/src/Dashboard/Cards";
import LineChart from "@/src/Dashboard/LineChart";
import Navbar from "@/src/Dashboard/Navbar";
import PieChartDash from "@/src/Dashboard/PieChartDash";
import SideMenu from "@/src/Dashboard/SideMenu";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
// import Router from "next/router";

const dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  useEffect(() => {
    // const loginStatus = localStorage.getItem("loginStatus");
    if (status != "authenticated") {
      router?.push("/temp")      
    }
  }, []);

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        display: "flex",
        backgroundColor: "#DDDDDD",
        width: "100%",
        height: "100vh",
      }}
    >
      <SideMenu/>
      <div style={{ width: "75vw" }}>
        <Navbar />
        <Cards />
        <LineChart />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "80px",
          }}
        >
          <PieChartDash />
        </div>
      </div>
    </div>
  );
};

export default dashboard;
