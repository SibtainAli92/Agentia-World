import { CheckCircle } from 'lucide-react'
import React from 'react'

interface cardItem {
    title?:string,
    price?:number | string,
    buttonStyle?:string,
    boxStyle?:string
    offer:string[]
}

const PriceCard = ({title , price ,buttonStyle , boxStyle , offer}:cardItem) => {
  return (
    <div className={`text-white ${boxStyle} flex flex-col gap-5 bg-white/5 rounded-md p-10 w-[360px] transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl`}>
      <h3 className='text-2xl font-bold'>{title}</h3>
      <span className='flex items-end'>
        <p className='text-4xl font-bold'>${price}</p>
        <p className='text-gray-500'>month</p>
      </span>
      {offer.map((item) => (
      <div className='flex gap-2 items-center'>
       <CheckCircle className="w-6 h-6 text-purple-500 animate-pulse" />
        <p className='text-lg'>{item}</p>
      </div>
      ))}
      <button className={`${buttonStyle} w-full px-5 py-3 rounded-md font-bold`}>Get Started</button>
    </div>
  )
}

export default PriceCard