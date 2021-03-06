import React from "react";
import Terminal from "../components/displays/Terminal";
import CardList from "../components/cards/CardList";

const HomePage = () => {
  return (
    <div className='page' style={{ textAlign: "center" }}>
      <p style={{ fontSize: 28 }}>Passport Auth Strategies</p>
      <CardList />
      <div style={{ marginBottom: 20 }} />
    </div>
  );
};

export default HomePage;
