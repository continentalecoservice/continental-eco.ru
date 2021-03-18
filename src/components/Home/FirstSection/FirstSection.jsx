import React from 'react';

import ImgOfSection from '../../../images/imgOfFirstScreen.png';
import VideoOfSection from '../../../images/videoInHome.mp4';
import { SliderAboutDesinfection } from './slider';

import * as styles from './home.module.css';
import { Link } from 'gatsby';
import { ServiceNames } from '../../Services/const';
import { useServicesContext } from '../../Services/hooks/useServicesContext';

const FirstSection = () => {
  const {  handleSectActiveSection } = useServicesContext();

  const handleSetActiveDesinfectionTab = () => handleSectActiveSection(ServiceNames.Desinfection);

  return (
    <div className={styles.firstSection}>
      <div className={styles.titleAndDescription}>
        <h1 className={styles.title}><span>Дез</span>инфекция вашего помещения</h1>
        <p className={styles.description}>Компания Континентал Экосервис занимается дератизацией, дезинсекцией
        (уничтожение тараканов и иных насекомых, крыс, мышей), дезинфекцией помещений
             (уничтожение бактерий, грибков, вирусов, плесени).</p>
        <Link to='/services' onClick={handleSetActiveDesinfectionTab} className={styles.viewService}>Просмотреть услуги</Link>
      </div>
      <SliderAboutDesinfection />
      <div className={styles.videoWrap}>
        <video
          loop
          muted
          autoPlay
          autobuffer="true"
          src={VideoOfSection}
          poster={ImgOfSection}
          className={styles.imgOfSection}
        >
          Sorry, your browser doesn't support embedded videos,
          but don't worry, you can <a href={VideoOfSection}>download it</a>
          and watch it with your favorite video player!
        </video>
      </div>
    </div>
  );
};

export { FirstSection };