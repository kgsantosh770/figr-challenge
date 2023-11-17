import BannerCard from "./components/banner-card/BannerCard";
import Cards from "./components/cards/Cards";
import MobileExperience from "./components/mobile-experience/MobileExperience";
import Navbar from "./components/navbar/Navbar";
import TextHighlighter from "./components/tex-highlighter/TextHighlighter";
import Workflow from "./components/workflow/Workflow";

function App() {
  return (
    <div className="App font-inter bg-black">
      <div className="banner-bg overflow-hidden">
        <Navbar />
        <BannerCard />
      </div>
      <Cards className="mt-32 lg:mt-40"/>
      <TextHighlighter/>
      <Workflow />
      <MobileExperience />
    </div>
  );
}

export default App;
