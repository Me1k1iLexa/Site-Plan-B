import FirstSectorImage from "../../Assets/Images/FirstSectorImages.png";
import './AppFirstSector.css';

const FirstSector = () => {
    return (
            <div className="first-sector">
                <div className="first-sector-text-item">
                    <div className="main-style-title">Начни планировать свое будущее!</div>
                    <div className="main-style-paragraph">В нашей компании мы помогаем частным лицам и предприятиям
                        контролировать свои финансы с помощью эффективных стратегий составления бюджета.
                        Присоединяйтесь к нам на пути к финансовой свободе и душевному спокойствию.
                    </div>
                </div>
                <div className="FirstSectorImageItem">
                    <div>
                        <img src={FirstSectorImage} className="AppLogotype" alt="Logotype"/>
                    </div>
                </div>
            </div>
    )
};

export default FirstSector;