import Footer from "../../UI/Footer/Footer";
import Hero from "../../UI/Hero/Hero";
import Navbar2 from "../../UI/Navbar/Navbar2";
import TitleCards from "../../UI/TitleCards/TitleCards";

const Home = () => {
  return (
    <>
      <Navbar2 />

      <Hero />
      <TitleCards title="Blockbuster Movies" />
      <TitleCards title="Only on Netflix" />
      <TitleCards title="Upcomming" />
      <TitleCards title="Top picks for You" />
      <Footer />
    </>
  );
};

export default Home;
