import Footer from "../../UI/Footer/Footer";
import Hero from "../../UI/Hero/Hero";
import Navbar2 from "../../UI/Navbar/Navbar2";
import TitleCards from "../../UI/TitleCards/TitleCards";

const Home = () => {
  return (
    <>
      <Navbar2 />

      <Hero />
      <TitleCards title="Top picks for You" category="popular" />
      <TitleCards title="Upcomming" category="upcoming"/>
      <TitleCards title="Blockbuster Movies" category="now_playing" />
      <TitleCards title="Only on Netflix" category="top_rated"/>
      <Footer />
    </>
  );
};

export default Home;
