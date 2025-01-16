import AppLogotype from "Assets/Images/AppLogotype.png";
import "./AppHeader.css";

const Header = () => {
  return (
    <div className="app-header">
      <div>
        <img src={AppLogotype} className="AppLogotype" alt="Logotype" />
      </div>
      <nav className="app-navigation">
        <div className="Navigationlink">
          <a href={"https://example.com"}>Бюджет</a>
        </div>
        <div className="Navigationlink">
          <a href={"https://example.com"}>Транзакции</a>
        </div>
        <div className="Navigationlink">
          <a href={"https://example.com"}>Уведомления</a>
        </div>
        <div className="Navigationlink">
          <a href={"https://example.com"}>Анализ счета</a>
        </div>
      </nav>
      <div className="navigation-button-registration">
        <button className={"main-style-button"}>Регистрация</button>
      </div>
    </div>
  );
};

export default Header;
