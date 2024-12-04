import React from "react";
import Card from "./Card.jsx";
import { mockCompanyDetails } from "../constants/mock.js";
import Search from "./Search.jsx";
import Details from "./Details.jsx";
import Total from "./Total.jsx";

const Dashboard = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        backgroundColor: "#f5f5f5",
        height: "100vh",
        width: "100vw", // Ensure it takes the full viewport width
        boxSizing: "border-box", // Prevent padding from reducing width
      }}
    >
      {/* Header Section */}
      <div style={{ marginBottom: "20px" }}>
        <h1 style={{ fontSize: "2rem", margin: "0 0 10px" }}>
          {mockCompanyDetails.name}
        </h1>
        <Search />
      </div>

      {/* Main Content */}
      <div
        style={{
          display: "flex",
          flex: 1,
          gap: "20px",
          alignItems: "flex-start",
        }}
      >
        {/* Left Section */}
        <div
          style={{
            flex: 2,
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "#fff",
          }}
        >
          <Card>Chart</Card>
        </div>

        {/* Right Section */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* Total Section */}
          <div
            style={{
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "#fff",
            }}
          >
            <Total
              symbol={mockCompanyDetails.ticker}
              price={300}
              change={30}
              changePercent={10.0}
              currency={"USD"}
            />
          </div>

          {/* Details Section */}
          <div
            style={{
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "#fff",
              flex: 1,
            }}
          >
            <Details details={mockCompanyDetails} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
