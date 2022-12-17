import React from "react";
import { Navbar, Hero, Shop, Award, Footer } from "./components";

const App = () => {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <Hero />
      <Shop />
      <Award />
      <Footer />
    </div>
  );
};

export default App;
