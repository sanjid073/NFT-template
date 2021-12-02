import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { OurGame } from "./components/OurGame";
import { MintStage } from "./components/MintStage";
import { OurLoadMap } from "./components/OurLoadMap";
import { NFTProjects } from "./components/NFTProjects";
import { NFTPartner } from "./components/NFTPartner";
import { SmartCoin } from "./components/SmartCoin";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { UpComingEvent } from "./components/UpComingEvent";
import { Footer } from "./components/Footer";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <div className="background">
      <Navigation />
      <Header data={JsonData.Header} />
      <div className="mintingStage-bg">
        <MintStage data={JsonData.MintStage} />
        </div>
        <div className="ourGame-bg">
        <OurGame data={JsonData.OurGame} />
        </div>
      
      <OurLoadMap data={JsonData.OurLoadMap} />
      <NFTProjects data={JsonData.NFTProjects} />
      <NFTPartner data={JsonData.NFTPartner}/>
      <SmartCoin data={JsonData.SmartCoin} />
      <UpComingEvent data={JsonData.UpComingEvent}/>
      <Footer></Footer>
    </div>
  );
};

export default App;
