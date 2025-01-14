import './AppThirdSector.css';
import ThirdSectorImage1 from "../../Assets/Images/ThirdSectorImage1.png";
import ThirdSectorImage3 from "../../Assets/Images/ThirdSectorImage2.png";
import ThirdSectorImage2 from "../../Assets/Images/ThirdSectorImage3.png";

const AppThirdSector = () => {
    return (
        <div className="third-sector">
            <div className="third-sector-item">
                <div className="third-sector-item-image">
                    <img src={ThirdSectorImage1} className="third-sector-image" alt="man feels good"/>
                </div>
                <div className="third-sector-item-text">
                    <div className="third-sector-item-title">
                        Индивидуальное финансовое планирование, разработанное специально для Вас
                    </div>
                    <div className="third-sector-item-description">
                        Получите индивидуальные стратегии, соответствующие Вашей уникальной финансовой ситуации
                    </div>
                </div>
            </div>
            <div className="third-sector-item">
                <div className="third-sector-item-image">
                    <img src={ThirdSectorImage2} className="third-sector-image" alt="man feels success"/>
                </div>
                <div className="third-sector-item-text">
                    <div className="third-sector-item-title">
                        Упрощенное комплексное отслеживание бюджета
                    </div>
                    <div className="third-sector-item-description">
                        Легко контролируйте свои расходы и оставайтесь в курсе событий
                    </div>
                </div>
            </div>
            <div className="third-sector-item">
                <div className="third-sector-item-image">
                    <img src={ThirdSectorImage3} className="third-sector-image" alt="man move on his carieer"/>
                </div>
                <div className="third-sector-item-text">
                    <div className="third-sector-item-title">
                        Ставьте и достигайте своих финансовых целей
                    </div>
                    <div className="third-sector-item-description">
                        Определите свои цели и позвольте нам помочь вам их достичь
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AppThirdSector;