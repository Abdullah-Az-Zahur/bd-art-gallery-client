import React from "react";
import Slider from "../../components/Slider/Slider";
import { Helmet } from "react-helmet";
import CraftItems from "../../components/CraftItems/CraftItems";
import { useLoaderData } from "react-router-dom";
import Exhibitions from "../../components/Exhibitions/Exhibitions";
import BdArtDiscription from "../../components/BdArtDiscription/BdArtDiscription";

const Home = () => {
  const items = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>BD Art Gallery | Home</title>
      </Helmet>
      <Slider></Slider>
      <CraftItems items={items}></CraftItems>
      <Exhibitions items={items}></Exhibitions>
      <BdArtDiscription></BdArtDiscription>
    </div>
  );
};

export default Home;
