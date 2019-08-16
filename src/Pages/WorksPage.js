import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NA from "../components/NA";
import Works from "../components/Works";
const WorksPage = () => {
  return (
    <div className="worksPage">
      <Header />
      <div className="matter">
        <Works />
        <NA />
      </div>
      <Footer />
    </div>
  );
};
export default WorksPage;
