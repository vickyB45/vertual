import React from 'react'
import { feature } from "../constats/index"

const FeatureSection = () => {
    return (
        <div>
            <div className="relative mt-20 border-b border-neutral-800 min-h-[800]">
                <div className="text-center">
                    <span className='bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-5 py-3 uppercase
        ' >Feature</span>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl mt-5 lg:mt-10 tracking-wide '> Easily Build
                        <span className='bg-gradient-to-r  from-orange-500 to-orange-700 text-transparent bg-clip-text'> your Code</span>
                    </h2>
                </div>
                <div className="flex flex-wrap mt-10 lg:mt-20">
                    {feature.map((feature, index) => (
                        <div key={index} className='w-full xs:w-1/2 sm:w-1/2 lg:w-1/3'>
                            <div className="flex  mx-4 rounded  p-4">
                                <div className="flex h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h5 className="mt-1 mb-2 text-lg">{feature.title} </h5>
                                    <p className='text-sm p-2 mb-70 text-neutral-500'>{feature.discriiption}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeatureSection
