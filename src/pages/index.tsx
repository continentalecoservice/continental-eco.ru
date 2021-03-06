import React from "react"
import { FirstSection } from "../components/home/firstSection";
import { ExpertiseSection } from "../components/home/expertiseSection";
import { OurServices } from "../components/home/ourServices";
import { OurContacts } from "../components/ourContacts";

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
