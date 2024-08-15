import React from 'react'
import SectionOne from '@/app/components/SectionOne'
import SectionTwo from './components/sectionTwo'
import SectionThree from './components/SectionThree'
import SectionFour from './components/sectionFour'
import SectionFive from './components/sectionFive'
import MapWithPoints from './components/mapSection'
const HomePage = () => {
  return (
    <div>
        <SectionOne></SectionOne>
        <SectionTwo></SectionTwo>
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>
        <MapWithPoints/>
    </div>
  )
}

export default HomePage