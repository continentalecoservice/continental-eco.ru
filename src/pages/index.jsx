import React from "react"
import { FirstSection } from "../components/Home/FirstSection";
import { ExpertiseSection } from "../components/Home/ExpertiseSection";
import { OurServices } from "../components/Home/OurServices";
import { OurContacts } from "../components/OurContacts/index.js";

const IndexPage = () => {
  return (
    <>
      <FirstSection />
      <ExpertiseSection />
      <OurServices />
      <OurContacts />
    </>
  )
}

export default IndexPage;
