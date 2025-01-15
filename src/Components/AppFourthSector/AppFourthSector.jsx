import './AppFourthSector.css';
import FourthSectorImage from '../../Assets/Images/FourthSectorImage.png';
import FourthSectorCustomMarker from '../../Assets/Images/FourthSectorCustomMarker.png';
import CustomUl from '../CustomUL/CustomUL'
function AppFourthSector  () {
    const items = [
    'Индивидуальные стратегии для вашей уникальной финансовой ситуации.',
    'Квалифицированное руководство для максимального увеличения ваших финансовых ресурсов.',
    'Достигайте своих целей с помощью персонализированного бюджетного плана.'
    ];
    return (
        <div className="fourth-sector">
            <div className="fourth-sector-content">
                <div className="main-style-title">
                    Раскройте свой финансовый потенциал вместе с нами
                </div>
                <div className="main-style-paragraph">
                    Наши услуги по планированию бюджета помогут вам получить контроль над своими финансами. Почувствуйте
                    ясность и уверенность в своих финансовых решениях
                </div>
                <div className="fourth-sector-list-wrapper">
                    <CustomUl customMarker={FourthSectorCustomMarker} items={items} className="main-style-description" />
                </div>
                <div className="fourth-sector-button">
                    <button className="main-style-button">Начало работы</button>
                </div>
            </div>
            <div className="fourth-sector-image">
                <img src={FourthSectorImage} alt="Happy Man"/>
            </div>
        </div>
    )
}

export default AppFourthSector;