import BannerCard from "./components/banner-card/BannerCard";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App font-inter bg-black">
      <div className="banner-bg">
        <Navbar />
        <BannerCard />
      </div>
    </div>
  );
}

export default App;
