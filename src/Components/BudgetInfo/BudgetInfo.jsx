import "./BudgetInfo.css";
import BudgetStepsImage from "Assets/Images/BudgetStepsImage.png";

const FifthSector = () => {
  return (
    <div className="budget-info-container">
      <div className="main-style-title budget-title">
        Начало работы с нашими услугами по составлению бюджета
      </div>
      <div className="main-style-paragraph budget-paragraph">
        Наш процесс разработан так, чтобы быть простым и эффективным. Выполните
        следующие действия, чтобы взять под контроль свои финансы уже сегодня.
      </div>
      <div className="budget-steps">
        <div className="budget-steps-item">
          <div className="budget-steps-image">
            <img src={BudgetStepsImage} alt="BudgetStepsImage" />
          </div>
          <div className="budget-steps-title">
            Шаг 1: Запишитесь на бесплатную консультацию
          </div>
          <div className="budget-steps-description">
            Закажите бесплатную консультацию у наших экспертов
          </div>
        </div>
        <div className="budget-steps-item">
          <div className="budget-steps-image">
            <img src={BudgetStepsImage} alt="BudgetStepsImage" />
          </div>
          <div className="budget-steps-title">
            Шаг 2: Проанализируйте свое финансовое положение
          </div>
          <div className="budget-steps-description">
            Мы проанализируем ваш текущий бюджет и расходы
          </div>
        </div>
        <div className="budget-steps-item">
          <div className="budget-steps-image">
            <img src={BudgetStepsImage} alt="BudgetStepsImage" />
          </div>
          <div className="budget-steps-title">
            Шаг 3: Создайте индивидуальный бюджетный план
          </div>
          <div className="budget-steps-description">
            Мы разработаем для вас бюджетную стратегию
          </div>
        </div>
      </div>
      <div className="budget-steps-button">
        <button className="main-style-button">Начать</button>
      </div>
      <div className="main-style-title budget-title">
        Позаботьтесь о своем финансовом будущем правильно
      </div>
      <div className="main-style-paragraph budget-paragraph">
        Присоединяйтесь к нам для получения персонализированной консультации или
        подпишитесь на получение советов экспертов по составлению бюджета прямо
        на ваш почтовый ящик.
      </div>
      <div className="budget-button">
        <button className="main-style-button">Оставить заявку</button>
      </div>
    </div>
  );
};

export default FifthSector;
