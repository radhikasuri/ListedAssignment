import React, { useEffect } from "react";
import data from "@/data/data.json";
import axios from "axios";
import "../../styles/Dashboard/cards.css";
import Image from "next/image";

const Cards = () => {
  return (
    <div className="mainCards">
      <div style={{backgroundColor: "#DDEFE0"}}>
        <Image
          style={{ position: "absolute", top: 11, right: 15 }}
          src="/revenue.png"
          alt="icon"
          width="21"
          height={"26"}
        />
        <div>
          <p>Total Revenue</p>
          <p className="boldData">${data.totalRevenue}</p>
        </div>
      </div>
      <div style={{backgroundColor: "#F4ECDD"}}>
      <Image
          style={{ position: "absolute", top: 11, right: 15 }}
          src="/transaction.png"
          alt="icon"
          width="21"
          height={"21"}
        />
        <div>
          <p>Total transaction</p>
          <p className="boldData">{data.transaction}</p>
        </div>
      </div>
      <div style={{backgroundColor: "#EFDADA"}}>
      <Image
          style={{ position: "absolute", top: 11, right: 15 }}
          src="/likes.png"
          alt="icon"
          width="21"
          height={"21"}
        />
        <div>
          <p>Total Likes</p>
          <p className="boldData">{data.totalLikes}</p>
        </div>
      </div>
      <div style={{backgroundColor: "#DEE0EF"}}>
      <Image
          style={{ position: "absolute", top: 11, right: 15 }}
          src="/users.png"
          alt="icon"
          width="26"
          height={"21"}
        />
        <div>
          <p>Total Users</p>
          <p className="boldData">{data.totalUser}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
