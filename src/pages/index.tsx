import React from "react"
import { FirstSection } from "../components/home/firstSection";
import { ExpertiseSection } from "../components/home/expertiseSection";
import { OurServices } from "../components/home/ourServices";

const IndexPage = () => {
  return (
    <>
      <FirstSection />
      <ExpertiseSection />
      <OurServices />
    </>
  )
}

export default IndexPage;
