import { Header } from "../../components/Header/Header";
import Hero from "./Hero";
import Analytics from "./Anaylitics";
import Newsletter from "./Newsletters";
import { Footer } from "../../components/Footer/Footer";
import Bussiness from "./Bussiness";
function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Analytics />
      <Bussiness />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
