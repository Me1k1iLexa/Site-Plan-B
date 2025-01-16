import "./App.css";
import Header from "../Header/AppHeader";
import FirstSector from "../MainInformation/FirstSector/AppFirstSector";
import SecondSector from "../MainInformation/SecondSector/AppSecondSector";
import ThirdSector from "../MainInformation/ThirdSector/AppThirdSector";
import FourthSector from "../MainInformation/FourthSector/AppFourthSector";
import FifthSector from "../BudgetInfo/BudgetInfo";
import Footer from "../Footer/Footer";
const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <FirstSector />
      <SecondSector />
      <ThirdSector />
      <FourthSector />
      <FifthSector />
      <Footer />
    </div>
  );
};

export default App;
