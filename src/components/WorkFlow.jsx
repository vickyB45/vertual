import React from 'react'
import code from "../assets/code.jpg"
import { checklistItem } from '../constats'

const WorkFlow = () => {
    return (
        <div className='mt-20'>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl text-center'>Accelerate your <span className='bg-gradient-to-r  from-orange-500 to-orange-700 text-transparent bg-clip-text tracking-wide'>coding workflow.</span></h2>
            <div className='flex flex-wrap justify-center'>
                <div className="p-2 mt-10 w-full lg:w-1/2">
                    <img src={code} alt="" />
                </div>
                <div className="pt-12 w-full lg:w-1/2 mt-5">
                    {checklistItem.map((item, index) => (
                        <div key={index} className='flex mb-12'>
                            <div className="text-green-400 bg-neutral-900  h-10 w-10 p-2 flex justify-center items-center rounded-full text-xl">
                            <i class="fa-regular fa-circle-check"></i>
                            </div>
                            <div>
                                <h5 className='mt-1 mb-2 texl-xl'>{item.title}</h5>
                                <p className='text-md text-neutral-500'>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WorkFlow
