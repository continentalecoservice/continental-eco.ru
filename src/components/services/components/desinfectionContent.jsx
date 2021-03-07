import React from 'react';
import ImgPost from '../../../images/postImg.jpg';
import VirusSVG from '../../../images/svg/virus.svg';
import * as styles from '../services.module.css';

export const DesinfectionContent = () => {
  return (
    <div className={styles.initialSectionOfContent}>
      <div className={styles.wrapOfFixedSection}>
        <div className={styles.headeOfTabContent}>
          <div className={styles.titleAndDescription}>
            <h1 className={styles.contentTitle}>Дезинфекция</h1>
            <p className={styles.contentDescription}>уничтожение бактерий, грибков, вирусов, плесени</p>
          </div>
          <VirusSVG className={styles.contentIcon} />
        </div>
        <ul className={styles.contentList}>
          <li className={styles.contentListItem}>Обработка поверхностей дезинфицирующим раствором</li>
          <li className={styles.contentListItem}>Использование ультрафиолетового бактерицидного излучения для обеззараживание воздуха </li>
          <li className={styles.contentListItem}>Бесплатное повторное проведение процедуры, если результат не был достигнут</li>
          <li className={styles.contentListItem}>Круглосуточный график - заявки принимаються 24/7, включая выходные и праздничные дни</li>
        </ul>
        <button className={styles.orderService}>заказать услугу</button>
      </div>

      <div className={styles.bodyContent}>
        <p>В процессе работы служба дезинсекции домов в Москве использует исключительно зарегистрированные и имеющие разрешение к использованию на территории Российской Федерации препараты III-IV класса опасности. Несмотря на низкий класс опасности, применяемые средства для дезинсекции отличаются высокой эффективностью.</p>
        <p>В том случае если необходимый результат не будет достигнут после первого проведения процедуры, служба дезинсекции «Continental Ecoservice» гарантирует повторный, абсолютно бесплатный для клиента, приезд дезинфектора на объект.</p>

        <h2>Шаг 1</h2>

        <p>Обработка поверхностей дезинфицирующим раствором. Все используемые нами препараты относятся к III и IV классу опасности, сертифицированы и разрешены к использованию на территории Российской Федерации, соответствуют СП 3.5.3.3223-14, СанПиН 3.5.2.3472-17.</p>

        <img src={ImgPost} />
      </div>
    </div>
  );
};
