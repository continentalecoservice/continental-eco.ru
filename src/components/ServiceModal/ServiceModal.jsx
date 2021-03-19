import classNames from 'classnames';
import React, { useState } from 'react';
import { useToasts } from 'react-toast-notifications';

import IconSVG1 from '../../images/svg/icon1.svg';
import IconSVG2 from '../../images/svg/icon2.svg';
import IconSVG3 from '../../images/svg/icon3.svg';

import * as styles from './serviceModal.module.css';


// email: (val) => {
//   let error = null;
//   const emailValidation = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
//   if (!emailValidation.test(val)) {
//     error = 'E-mail введений не вірно!';
//   }
//   return error;
// }

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export const ServiceModal = (
  {
    onClose
  }
) => {
  const { addToast } = useToasts();

  const [formValues, setFormValues] = useState({});

  const setValue = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...formValues
      })
    })
      .then(() => {
        console.log("Form submission success");
        addToast('Форма успешно отправлена.', {
          appearance: 'success',
          autoDismiss: true
        });
        onClose();
      })
      .catch(error => {
        addToast(error, {
          appearance: 'error',
          autoDismiss: true
        });
        console.error("Form submission error:", error);
      });
  }

  const nameClasses = classNames(
    styles.input,
    {
      [styles.activeInput]: formValues.name
    }
  );

  const surnameClasses = classNames(
    styles.input,
    {
      [styles.activeInput]: formValues.surname
    }
  );

  const emailClasses = classNames(
    styles.input,
    {
      [styles.activeInput]: formValues.email
    }
  );

  const telClasses = classNames(
    styles.input,
    {
      [styles.activeInput]: formValues.tel
    }
  );

  const typeOfPlaceClasses = classNames(
    styles.input,
    {
      [styles.activeInput]: formValues.typeOfPlace
    }
  );

  const widthOfPlaceClasses = classNames(
    styles.input,
    {
      [styles.activeInput]: formValues.widthOfPlace
    }
  );

  const descriptionOfProblemClasses = classNames(
    styles.input,
    styles.textarea,
    {
      [styles.activeInput]: formValues.descriptionOfProblem
    }
  );

  return (
    <div className={styles.serviceModalContent}>
      <div className={styles.serviceModalContentWrap}>
        <h1 className={styles.title}>Выберете услугу и опишите проблему:</h1>
        <form
          method="post"
          name="service"
          data-netlify="true"
          onSubmit={handleSubmit}
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="service" />
          <div className={styles.typesOfService}>
            <div className={styles.checkboxWrap}>
              <input
                type='checkbox'
                id='disinfection'
                name='disinfection'
                className={styles.checkbox}
                onChange={setValue}
              />
              <label className={styles.label} htmlFor='disinfection'>Дезинфекция</label>
              <IconSVG1 className={styles.svgIcon} />
            </div>
            <div className={styles.checkboxWrap}>
              <input
                type='checkbox'
                id='deratization'
                name='deratization'
                className={styles.checkbox}
                onChange={setValue}
              />
              <label className={styles.label} htmlFor='deratization'>Дератизация</label>
              <IconSVG2 className={styles.svgIcon} />
            </div>
            <div className={styles.checkboxWrap}>
              <input
                type='checkbox'
                id={'disinsection'}
                name='disinsection'
                className={styles.checkbox}
                onChange={setValue}
              />
              <label className={styles.label} htmlFor='disinsection'>Дезинсекция</label>
              <IconSVG3 className={styles.svgIcon} />
            </div>
            <div className={styles.checkboxWrap}>
              <input
                type='checkbox'
                id='otherServices'
                name='otherServices'
                className={styles.checkbox}
                onChange={setValue}
              />
              <label className={styles.label} htmlFor='otherServices'>Другие услуги</label>
            </div>
          </div>
          <div className={styles.inputsWrap}>
            <div className={styles.inputWrap} id={styles.name}>
              <input
                required
                type='text'
                name='name'
                id='nameField'
                autoComplete='off'
                aria-required="true"
                className={nameClasses}
                onChange={setValue}

              />
              <label
                className={`${styles.label} ${styles.isRequired}`}
                htmlFor='nameField'>Имя</label>
            </div>
            <div className={styles.inputWrap} id={styles.surname}>
              <input
                type='text'
                name='surname'
                id='surnameField'
                autoComplete='off'
                className={surnameClasses}
                onChange={setValue}
              />
              <label className={styles.label} htmlFor='surnameField'>Фамилия</label>
            </div>
            <div className={styles.inputWrap} id={styles.email}>
              <input
                required
                type='email'
                name='email'
                id='emailField'
                autoComplete='off'
                aria-required="true"
                className={emailClasses}
                onChange={setValue}
              />
              <label
                className={`${styles.label} ${styles.isRequired}`}
                htmlFor='emailField'>Email</label>
            </div>
            <div className={styles.inputWrap} id={styles.tel}>
              <input
                required
                name='tel'
                type='tel'
                id='telField'
                autoComplete='off'
                aria-required="true"
                className={telClasses}
                onChange={setValue}
              />
              <label
                className={`${styles.label} ${styles.isRequired}`}
                htmlFor='telField'>Телефон</label>
            </div>
            <div className={styles.inputWrap} id={styles.typeOfPlace}>
              <input
                required
                type='text'
                name='typeOfPlace'
                autoComplete='off'
                aria-required="true"
                id='typeOfPlaceField'
                className={typeOfPlaceClasses}
                onChange={setValue}
              />
              <label
                className={`${styles.label} ${styles.isRequired}`}
                htmlFor='typeOfPlaceField'>Тип помещения</label>
            </div>
            <div className={styles.inputWrap} id={styles.widthOfPlace}>
              <input
                required
                type='number'
                autoComplete='off'
                name='widthOfPlace'
                aria-required="true"
                id='widthOfPlaceField'
                className={widthOfPlaceClasses}
                onChange={setValue}
              />
              <label
                className={`${styles.label} ${styles.isRequired}`}
                htmlFor='widthOfPlaceField'>Размер помещения в м²</label>
            </div>
            <div className={styles.inputWrap} id={styles.descriptionOfProblem}>
              <textarea
                rows={4}
                autoComplete='off'
                name='descriptionOfProblem'
                id='descriptionOfProblemField'
                className={descriptionOfProblemClasses}
                onChange={setValue}
              />
              <label
                className={styles.label}
                htmlFor='descriptionOfProblemField'>Описание проблемы</label>
            </div>
            <button
              type='submit'
              id={styles.submitButton}
              className={styles.submitButton}>Отправить заявку</button>
          </div>
        </form>
      </div>
    </div>
  );
};