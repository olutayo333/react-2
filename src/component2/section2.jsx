import React from 'react'

const Section2 = ({machines2}) => {
  return (
       <div className=" grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 ms-10 my-10">

      {machines2.map((items) => (
        <div className="my-5 rounded-2xl bg-white border-2 border-gray-400 w-[183px] h-auto grid justify-center items-center py-5 " key={items.id}>
          <div >
            <img className=" w-[120.85px] rounded-t-2xl " src={items.img} alt="" />
          </div>
          <p className=" text-center font-bold font-OpenSans ">{items.text}</p>
        </div>
      ))}

    </div>
   
  )
}

export default Section2
