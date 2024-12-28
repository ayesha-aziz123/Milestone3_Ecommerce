import React from 'react'

import { Whisper } from 'next/font/google'
import CategoryCard from './CategoryCard'

const whisper = Whisper({subsets:["latin"], weight:["400"]})


const data =[
    {
        img:"/category__1.jpg",
        type:"Makeup",
        quantity:"(4 Items)"
    },
    {
        img:"/category__2.jpg",
        type:"Nail & Wax",
        quantity:"(8 Items)"
    },
    {
        img:"/category__3.jpg",
        type:"SkinCare",
        quantity:"(6 Items)"
    },
]



function Category() {
  return (
    <div className='bg-[url(/cats2.jpg)]  bg-no-repeat bg-cover py-16 mt-32'>
        <div className="container text-center text-white">
            <h3 className={`${whisper.className} text-[40px]`}>Favorite Category</h3>

            <h2 className='text-[40px] font-medium'>Top Category</h2>

            <div className='flex justify-center gap-4 md:gap-16 pt-8'>
                {data.map((item) => (
                    <CategoryCard  
                    key={item.type}
                    img={item.img}
                    type={item.type}
                    quantity={item.quantity}

                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Category