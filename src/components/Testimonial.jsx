import React from 'react'
import { testimonials } from '../constats'

const Testimonial = () => {
  return (
    <div className='mt-20 tracking-wide'>
      <h2 className='text-3xl sm:text-4xl lg:text-5xl mt-5 lg:mt-10 tracking-wide text-center'>What people
        <span className='bg-gradient-to-r  from-orange-500 to-orange-700 text-transparent bg-clip-text'> are saying</span>
      </h2>
      <div className="flex flex-wrap justify-center mt-20">
        {testimonials.map((testimonial,index)=>(
          <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2 mb-6'>
            <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
              <p>{testimonial.text}</p>
              <div className="flex mt-6 item-start">
                <img className='w-12 h-12 mr-6 rounded-full border border-neutral-300' src={testimonial.image} alt="" />
                <span className='text-sm font-normal italic text-neutral-100'>{testimonial.user}</span>
              </div>
            </div>
          </div>
        ))} 
      </div>
    </div>
  )
}

export default Testimonial
