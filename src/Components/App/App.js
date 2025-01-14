import './App.css';
import Header from "../AppHeader/AppHeader";
import FirstSector from "../AppFirstSector/AppFirstSector";
import SecondSector from "../AppSecondSector/AppSecondSector";
import ThirdSector from "../AppThirdSector/AppThirdSector";
import FourthSector from "../AppFourthSector/AppFourthSector";
const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <FirstSector />
            <SecondSector/>
            <ThirdSector/>
            <FourthSector/>
        </div>
    );
}

export default App;
