import React from 'react'
import { feature, pricingOptions } from '../constats'

const Price = () => {
    return (
        <div className='mt-20 '>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl mt-5 lg:mt-10 mb-20 tracking-wide text-center'> Pricing</h2>
            <div className="flex flex-wrap">
                {pricingOptions.map((option, index) => (
                    <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                        <div className="p-10 border border-neutral-700 rounded-xl">
                            <p className=' text-2xl lg:text-4xl mb-7 text-center'>
                                {option.title}
                                {option.title === "Pro" && (
                                    <span className='bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-sm mb-4 ml-2'>(Most Popular)</span>
                                    
                                )}
                            </p>
                            <p className="mb-8">
                                <span className='text-3xl mt-5 mr-2'>{option.Price}</span>
                                <span className='text-neutral-400 tracking-tight text-sm'>/Month</span>
                            </p>
                            <ul>
                                {option.features.map((feature, index) => (
                                    <li key={index} className='mt-5 flex items-center'>
                                        <i class="fa-regular fa-circle-check"></i>
                                        <span className='mt-2 text-neutral-400 text-sm ml-3'>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="#" className='inline-flex justify-center items-center text-center w-full h-6  p-5 mt-10 tracking-tight text-md  hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200'>
                                Subscribe
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Price
