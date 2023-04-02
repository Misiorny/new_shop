import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { number } from "prop-types";
import { ReactNode } from "react";
import { Main } from "../components/Main";
import { Product } from "../components/Product";

const DATA = {
  description:
    "Percipitornare graeci omnesque definiebas. Omittanturrecteque idque luptatum aperiri hac.Laoreetturpis maluisset scripserit viverra veri putent conubiaitu peratoribus.",
  thumbnailUrl: "https://picsum.photos/id/1060/536/354",
  thumbnailAlt: "Barista nalewający kawę",
  rating: 4.5,
};

const Home = () => {
  return (
    <div className="flex flex-col  min-h-screen">
      <Header />
      <Main>
        <Product data={DATA} />
      </Main>
      <Footer />
    </div>
  );
};

export default Home;
