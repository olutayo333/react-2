import React from "react";
import Navbar from "../component/navbar";
import Header from "../component/header";
import HeroSection from "../component/heroSection";
import CpasMachine from "../component/cpasMachine";
import img1 from "../asset/Images.png"
import img2 from "../asset/Images (1).png"
import img3 from "../asset/Images (2).png"
import img4 from "../asset/Images (3).png"
import img5 from "../asset/Images (4).png"
import img6 from "../asset/Images (5).png"

const PageOne = () =>
{
   const machines=[
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
    ]
        return (
           <div>
                {/* <Navbar/>
                <Header/> */}
                <HeroSection/>

                {/* Buttons */}
						<ul className="lg:px-32 md:px-10 px-8 lg:py-10 py-4 flex items-center justify-between">
				        <li className=" lg:w-[197px] w-[300px] lg:h-[50px] h-[30px] px-1 mx-1 rounded-full border-2 border-gray-400 flex justify-center items-center">
				          Products
					        </li>
					        <li className=" lg:w-[197px] w-[300px] lg:h-[50px] h-[30px] px-1 mx-1 rounded-full border-2 border-gray-400 flex justify-center items-center">
						          Brands
						        </li>
						        <li className=" lg:w-[197px] w-[300px] lg:h-[50px] h-[30px] px-1 mx-1 rounded-full border-2 border-gray-400 flex justify-center items-center">
						          Sales
						        </li>
						        <li className=" lg:w-[197px] w-[300px] lg:h-[50px] h-[30px] px-1 mx-1 rounded-full border-2 border-gray-400 flex justify-center items-center">
						          Snervices
						        </li>
						        <li className=" lg:w-[197px] w-[300px] lg:h-[50px] h-[30px] px-1 mx-1 rounded-full border-2 border-gray-400 flex justify-center items-center">
						          Resources
						        </li>
						      </ul>
     
               <p className="text-center font-bold text-[36px]"> CPAP Machines, Masks & Resources</p> 
                    
                  <CpasMachine machines={machines}/>
                   
                
            </div>
        )   
}

export default PageOne 
//prettier