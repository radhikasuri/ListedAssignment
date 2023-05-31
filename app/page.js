import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "lightblue" }}>
      <Link
      href={"/temp"}
        style={{
          border: "0px",
          borderRadius: "21px",
          padding: "11px 25px",
          backgroundColor: "crimson",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "1rem",
          textDecoration: "none"
        }}
      >
        Click to Enter Assignment
      </Link>
    </div>
  );
}
