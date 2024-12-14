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
      <marquee behavior="left" direction="scroll" scrolldelay="100">
      <div className="main flex">
      <img src="https://res.cloudinary.com/vistaprint/images/w_1024,h_389,c_scale,w_848,h_322,dpr_1.5/f_auto,q_auto/v1719942405/ideas-and-advice-prod/blogadmin/nike-logo/nike-logo.png?_i=AA" alt="" />
        <img src="https://res.cloudinary.com/vistaprint/images/c_scale,w_448,h_299,dpr_1.5/f_auto,q_auto/v1719942393/ideas-and-advice-prod/blogadmin/logo-chanel/logo-chanel.png?_i=AA" alt="" />
        <img src="https://res.cloudinary.com/vistaprint/images/c_scale,w_772,h_444,dpr_1.5/f_auto,q_auto/v1719942371/ideas-and-advice-prod/blogadmin/mc-donald-logo/mc-donald-logo.jpg?_i=AA" alt="" />
        <img src="https://res.cloudinary.com/vistaprint/images/c_scale,w_300,h_385,dpr_1.5/f_auto,q_auto/v1719942420/ideas-and-advice-prod/blogadmin/tesla-logo/tesla-logo.png?_i=AA" alt="" />
        <img src="https://res.cloudinary.com/vistaprint/images/w_1024,h_576,c_scale,w_848,h_476,dpr_1.5/f_auto,q_auto/v1719942378/ideas-and-advice-prod/blogadmin/apple-logo/apple-logo.png?_i=AA" alt="" />
        <img src="https://res.cloudinary.com/vistaprint/images/c_scale,w_600,h_556,dpr_1.5/f_auto,q_auto/v1719942431/ideas-and-advice-prod/blogadmin/shell-logo/shell-logo.png?_i=AA" alt="" />
        <img src="https://res.cloudinary.com/vistaprint/images/c_scale,w_848,h_848,dpr_1.5/f_auto,q_auto/v1706191816/ideas-and-advice-prod/blogadmin/Screenshot-2024-01-25-at-15.09.28/Screenshot-2024-01-25-at-15.09.28.png?_i=AA" alt="" />
        <img src="https://res.cloudinary.com/vistaprint/images/c_scale,w_848,h_277,dpr_1.5/f_auto,q_auto/v1706089184/ideas-and-advice-prod/en-us/Coca-Cola_logo.svg_/Coca-Cola_logo.svg_.png?_i=AA" alt="" />
        <img src="https://res.cloudinary.com/vistaprint/images/c_scale,w_448,h_204,dpr_1.5/f_auto,q_auto/v1719942403/ideas-and-advice-prod/blogadmin/nasa-logo/nasa-logo.png?_i=AA" alt="" />
        <img src="https://res.cloudinary.com/vistaprint/images/c_scale,w_693,h_319,dpr_1.5/f_auto,q_auto/v1719942391/ideas-and-advice-prod/blogadmin/ibm-logo/ibm-logo.png?_i=AA" alt="" />
        <img src="https://res.cloudinary.com/vistaprint/images/w_1024,h_412,c_scale,w_848,h_341,dpr_1.5/f_auto,q_auto/v1719942440/ideas-and-advice-prod/blogadmin/marvel-logo/marvel-logo.png?_i=AA" alt="" />
      </div>
      </marquee>
    </div>
  )
}

export default Testimonial
