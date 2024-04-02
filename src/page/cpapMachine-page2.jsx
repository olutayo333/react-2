import React from 'react'
import Herosection2 from '../component2/herosection2'
import Section2 from '../component2/section2'
import img1 from "../asset2/powerbank.png"
import img2 from "../asset2/cpap mask.png"
import img3 from "../asset2/cpap supplies.png"
import img4 from "../asset2/humidifier.png"
import img5 from "../asset2/oxygen.png"
import img6 from "../asset2/categorylink.png"
import img7 from "../asset2/craplink.png"

const CpapMachine = () => {
  const machines2=[
    {
        id: 1,
        img: img1,
        text:"CPAP Machines",
    },
    {
        id: 2,
        img: img2,
        text:"CPAP Masks",
    },
    {
        id: 3,
        img: img3,
        text:"CPAP Supllies",
    },
    {
        id: 4,
        img: img4,
        text:"Humidifiers & Parts",
    },
    {
        id: 5,
        img: img5,
        text:"Oxygen & Supplies",
    },
    {
        id: 6,
        img: img6,
        text:"Category Link",
    },
    {
      id:7, img:img7, text:'Catregi lind'
    }
]
  return (

    <div>
      <Herosection2/>
      <Section2 machines2={machines2}/>
     

    </div>
  )
}

export default CpapMachine
