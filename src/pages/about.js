import React from 'react';
import { FirstSection } from '../components/About/FirstSection';
import { SecondSection } from '../components/About/SecondSection';
import { ThirdSection } from '../components/About/ThirdSection';
import { OurContacts } from '../components/OurContacts/OurContacts';

const AboutPage = () => {
  return (
    <React.Fragment>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <OurContacts />
    </React.Fragment>
  )
};

export default AboutPage;