import React, { useState } from 'react'

export default function Details() {

    const [showAll, setShowAll] = useState(false);

    const sub = [
        123, 456, 789, 234, 512, 999, 111
    ];

  return (
    <div className='flex flex-col items-center justify-center my-16 gap-16'>
        <div
            data-aos="fade-right"
            data-aos-duration="2000" 
            className=' w-[95%] max-w-[600px] flex flex-col justify-center items-center gap-8 h-auto py-8 px-4 rounded
            border-1 border-gray-300 dark:bg-slate-850 shadow-lg transform transition-transform duration-1000 hover:scale-105'>
            <div className='text-3xl font-bold'>
                <h1>Event Details</h1>
            </div>
            <div className=' w-[90%] flex flex-col gap-4 justify-start items-start'>
                <span className='text-2xl font-semibold'>Date: 2024-06-28</span>
                <span className='text-2xl font-semibold'>Winning Number: <span className=' text-xl font-normal'>123</span></span>
                <span className='text-2xl font-semibold'>Prize: <span className=' text-xl font-normal'>USD 100$</span></span>
                <span className='text-2xl font-semibold'>Description: <span className=' text-xl font-normal text-wrap'>This event was held to celebrate our monthly lucky draw. 
                    The winning number was randomly selected from all entries.</span></span>
            </div>
        </div>
        <div
            data-aos="fade-left"
            data-aos-duration="2000"  
            className=' w-[95%] max-w-[600px] flex flex-col justify-center items-center gap-8 h-auto py-8 px-4 rounded
            border-1 border-gray-300 dark:bg-slate-850 shadow-lg transform transition-transform duration-1000 hover:scale-105'
        >
            <div className='text-3xl font-bold'>
                <h1>User Submissions</h1>
            </div>
            <div className='flex flex-wrap justify-center items-center gap-2 max-w-[80%] text-lg font-semibold'>
                {showAll
                    ? sub.map((num, index) => (
                            <div key={index} className=' py-2 px-8 bg-slate-800 dark:bg-slate-950 text-center text-white rounded-md
                            transform transition-transform duration-300 hover:scale-110'>
                                {num}
                            </div>
                    ))
                    : sub.slice(0, 5).map((num, index) => (
                        <div key={index} className=' px-6 py-2 bg-slate-800 dark:bg-slate-950 text-center text-white rounded-md
                        transform transition-transform duration-300 hover:scale-110'>
                            {num}
                        </div>
                ))}
            </div>
            {sub.length > 5 && (
                <div className=' mt-4 text-blue px-12 py-2 bg-primary dark:bg-blue-950 text-white rounded-lg text-lg font-semibold cursor-pointer
                transform transition-transform duration-300 hover:scale-105'
                >
                    {showAll ? (
                        <span
                            onClick={() => setShowAll(false)}
                        >
                            Show Less
                        </span>
                    ) : (
                        <span
                            onClick={() => setShowAll(true)}
                        >
                            Show More
                        </span>
                    )}
                </div>
            )}
        </div>
    </div>
  )
}
