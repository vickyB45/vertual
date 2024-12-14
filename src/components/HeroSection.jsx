import React from 'react'

const HeroSection = () => {

    const Video1 = require("../assets/video1.mp4");
    const Video2 = require("../assets/video2.mp4");

    return (
        <>
            <div className="flex flex-col items-center">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl text-center tracking-wide">
                    VirtualR Build tools <span className='bg-gradient-to-r  from-orange-600 to-orange-800 text-transparent bg-clip-text'> for  DevelopeRs</span>
                </h1>
                <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>VirtualR is an immersive racing simulator platform offering realistic driving experiences, advanced physics, and customizable setups for enthusiasts, blending high-tech gaming with the thrill of real-world motorsports.</p>
                <div className="flex justify-center my-6">
                    <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md'>
                        Start for free
                    </a>
                    <a href="#" className=' py-3 border px-4 mx-3 rounded-md'>
                        Documentation
                    </a>
                </div>
                <div className="flex mt-10 justify-center ">
                    <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
                        <source src={Video1} type="video/mp4" />
                        Your Browser does not support the video tag.
                    </video>
                    <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
                        <source src={Video2} type="video/mp4" />
                        Your Browser does not support the video tag.
                    </video>
                </div>
            </div>
        </>
    )
}

export default HeroSection
