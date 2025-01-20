import "Components/Footer/Footer.css";
import AppLogotype from "Assets/Images/AppLogotype.png";
import TelegramMarker from "Assets/Images/TelegramMarker.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div>
            <img src={AppLogotype} className="AppLogotype" alt="Logotype" />
          </div>
          <div className="main-style-paragraph footer-paragraph">
            Подпишитесь на нашу рассылку новостей, чтобы получать последние
            обновления функций и релизов.
          </div>
          <div className="footer-submit">
            <input
              className="footer-input"
              placeholder="Ваш адрес электронной почты здесь"
            />
            <button className="main-style-button" type="submit">
              Присоединиться
            </button>
          </div>
          <div className="main-style-paragraph footer-paragraph">
            Подписываясь, Вы соглашаетесь с нашей Политикой конфиденциальности и
            соглашаетесь получать обновления.
          </div>
        </div>
        <div className="footer-contact">
          <div className="footer-contact-text">Контакты</div>
          <div className="footer-contact-text">+7 (999) 999-99-99</div>
        </div>
        <div className="footer-contact">
          <div className="footer-contact-text">Ресурсы</div>
          <div className="footer-contact-text">
            <a href="https://t.me/kkrevettka">Вопросы и ответы</a>
          </div>
          <div className="footer-contact-text">
            <a href="https://t.me/kkrevettka">Поддержка</a>
          </div>
          <div className="footer-contact-text">
            <a href="https://t.me/kkrevettka">Отзывы</a>
          </div>
        </div>
        <div className="footer-contact">
          <div className="footer-contact-text">Свяжитесь с нами</div>
          <div className="footer-contact-text">
            <div>
              <img src={TelegramMarker} alt="TeleramMarker" />
            </div>
            <a href="https://t.me/kkrevettka">Telegram</a>
          </div>
        </div>
      </div>
      <div className="line" />
      <div className="footer-license">
        <div className="footer-license-text">© PLAN B</div>
        <div className="footer-license-link">
          <div className="footer-license-link-text">
            <a href="https://t.me/kkrevettka">Политика конфиденциальности</a>
          </div>
          <div className="footer-license-link-text">
            <a href="https://t.me/kkrevettka">Условия обслуживания</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
