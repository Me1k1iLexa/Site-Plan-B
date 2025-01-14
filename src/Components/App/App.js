import './App.css';
import Header from "../AppHeader/AppHeader";
import FirstSector from "../AppFirstSector/AppFirstSector";
import SecondSector from "../AppSecondSector/AppSecondSector";
import ThirdSector from "../AppThirdSector/AppThirdSector";
const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <FirstSector />
            <SecondSector/>
            <ThirdSector/>
        </div>
    );
}

export default App;
