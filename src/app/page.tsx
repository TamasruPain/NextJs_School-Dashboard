
import Footer from "@/components/Footer";
import HomeHero from "@/components/Home-Hero";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="items-center">
        <HomeHero />
      </div>
      <Footer />
    </div>

  );
}
