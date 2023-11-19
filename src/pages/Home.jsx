import { About } from "../components/About";
import { Chefs } from "../components/Chefs";
import { Dishes } from "../components/Dishes";
import { Main } from "../components/Main";
import { Recipes } from "../components/Recipes";
import { Social } from "../components/Social";
import { Work } from "../components/Work";

export const Home = () => {
  return (
    <div id="home">
      <Main />
      <About />
      <Work />
      <Dishes />
      <Chefs />
      <Recipes />
      <Social />
    </div>
  );
};
