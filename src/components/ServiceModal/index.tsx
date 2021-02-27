import React, { FC } from 'react';

import IconSVG1 from '../../images/svg/icon1.svg';
import IconSVG2 from '../../images/svg/icon2.svg';
import IconSVG3 from '../../images/svg/icon3.svg';

import styles from './styles/index.module.css';

type ServiceModalType = {
  onClose: () => void
};

const ServiceModal: FC<ServiceModalType> = (
  {
    onClose
  }
) => {

  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleNetworkError = () => {
    console.log("submit Error");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e, 'ee');
    // sendMessage(values);
  }

  const sendMessage = (values) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "заказ услуги", ...values })
    })
      .then(() => {
        console.log("Form submission success");
        // handleCloseModal();
        // navigate("/success");
      })
      .catch(error => {
        console.error("Form submission error:", error);
        handleNetworkError();
      });
  }

  return (
    <div className={styles.serviceModalContent}>
      <div className={styles.serviceModalContentWrap}>
        <h1 className={styles.title}>Выберете услугу и опишите проблему:</h1>
        <form
          autoComplete='off'
          data-netlify="true"
          className={styles.form}
          onSubmit={handleSubmit}
          data-netlify-honeypot="bot-field"
        >
          <div className={styles.typesOfService}>
            <div className={styles.checkboxWrap}>
              <input type='checkbox' id='disinfection' name='disinfection' className={styles.checkbox} />
              <label className={styles.label} htmlFor='disinfection'>Дезинфекция</label>
              <IconSVG1 className={styles.svgIcon} />
            </div>
            <div className={styles.checkboxWrap}>
              <input type='checkbox' id='deratization' name='deratization' className={styles.checkbox} />
              <label className={styles.label} htmlFor='deratization'>Дератизация</label>
              <IconSVG2 className={styles.svgIcon} />
            </div>
            <div className={styles.checkboxWrap}>
              <input type='checkbox' id={'disinsection'} name='disinsection' className={styles.checkbox} />
              <label className={styles.label} htmlFor='disinsection'>Дезинсекция</label>
              <IconSVG3 className={styles.svgIcon} />
            </div>
            <div className={styles.checkboxWrap}>
              <input type='checkbox' id='otherServices' name='otherServices' className={styles.checkbox} />
              <label className={styles.label} htmlFor='otherServices'>Другие услуги</label>
            </div>
          </div>
          <div className={styles.inputsWrap}>
            <div className={styles.inputWrap} id={styles.name}>
              <input type='input'
                autoComplete='off' id='nameField' name='name' className={styles.input} />
              <label className={styles.label} htmlFor='nameField'>Имя</label>
            </div>
            <div className={styles.inputWrap} id={styles.surname}>
              <input type='input'
                autoComplete='off' id='surnameField' name='surname' className={styles.input} />
              <label className={styles.label} htmlFor='surnameField'>Фамилия</label>
            </div>
            <div className={styles.inputWrap} id={styles.email}>
              <input type='input'
                autoComplete='off' id='emailField' name='email' className={styles.input} />
              <label className={styles.label} htmlFor='emailField'>Email</label>
            </div>
            <div className={styles.inputWrap} id={styles.tel}>
              <input type='input'
                autoComplete='off' id='telField' name='tel' className={styles.input} />
              <label className={styles.label} htmlFor='telField'>Телефон</label>
            </div>
            <div className={styles.inputWrap} id={styles.typeOfPlace}>
              <input type='input'
                autoComplete='off' id='typeOfPlaceField' name='typeOfPlace' className={styles.input} />
              <label className={styles.label} htmlFor='typeOfPlaceField'>Тип помещения</label>
            </div>
            <div className={styles.inputWrap} id={styles.widthOfPlace}>
              <input type='input'
                autoComplete='off' id='widthOfPlaceField' name='widthOfPlace' className={styles.input} />
              <label className={styles.label} htmlFor='widthOfPlaceField'>Размер помещения в м²</label>
            </div>
            <div className={styles.inputWrap} id={styles.descriptionOfProblem}>
              <textarea
                rows={4}
                autoComplete='off'
                name='descriptionOfProblem'
                id='descriptionOfProblemField'
                className={`${styles.input} ${styles.textarea}`}
              />
              <label className={styles.label} htmlFor='descriptionOfProblemField'>Описание проблемы</label>
            </div>
            <button type='submit' id={styles.submitButton} className={styles.submitButton}>Отправить заявку</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { ServiceModal };