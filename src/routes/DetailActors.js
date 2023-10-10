import React from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import ActorDetail from "../components/ActorDetail/actorDetail";

const DetailActor = () => {
  return (
    <div>
      <NavBar></NavBar>
      <ActorDetail />
      <Footer></Footer>
    </div>
  );
};

export default DetailActor;
