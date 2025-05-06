import Accessories from "./components/Accessories";
import AppleDifference from "./components/AppleDifference";
import AppleExperiance from "./components/AppleExperiance";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Help from "./components/Help";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Personalisation from "./components/Personalisation";
import QuickLinks from "./components/QuickLinks";
import SpecialStories from "./components/SpecialStories";
import TheLatest from "./components/TheLatest";

function App() {
  return (
    <div className="bg-[#f5f5f7] antialiased">
      <Navbar />
      <Header />
      <Hero />
      <TheLatest />
      <Accessories />
      <Personalisation />
      <AppleDifference />
      <Help />
      <AppleExperiance />
      <SpecialStories />
      <QuickLinks />
      <Footer />
    </div>
  );
}

export default App;
