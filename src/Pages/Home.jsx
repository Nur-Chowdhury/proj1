import React, { useState } from 'react';
import CountUp from 'react-countup';
import Modal from '../components/Modals';

export default function Home() {
    const [showAll, setShowAll] = useState(false);
    const [showSub, setShowSub] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState("");


    const sub = [
        123, 456, 789, 234, 567, 890, 345, 678, 123, 456, 789,
        234, 567, 890, 345, 678, 123, 456, 789, 234, 567, 890, 345, 678
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        sub.push(parseInt(data, 10));
        console.log(sub);
        setData("");
        setShowModal(false);
    }

    return (
        <div className=' sm:mx-20 my-16 flex flex-col items-center justify-center gap-12'>
            <div 
                data-aos="fade-right"
                data-aos-duration="1000"
                className='h-auto w-[320px] sm:w-[450px] py-6 shadow-lg rounded border-1 border-gray-300 dark:bg-slate-850 
                flex flex-col items-center gap-4 transform transition-transform duration-1000 hover:scale-110'
            >
                <div className='text-3xl font-bold'>
                    <h1>Today's Winner</h1>
                </div>
                <div className='text-6xl font-extrabold text-primary'>
                    <CountUp start={0} end={784} duration={5} />
                </div>
                <div className=' py-2 px-6 bg-green-600 rounded-lg text-white text-lg font-bold'>
                    <p>Prize: USD 100$</p>
                </div>
                <div className='text-lg font-medium'>
                    <p>Next draw at 12 AM</p>
                </div>
            </div>
            <div 
                data-aos="fade-right"
                data-aos-duration="1000"
                className='h-auto w-[320px] xs:w-[340] s:w-[420px] ss:w-[520px] sm:w-[600px] md:w-[700px]
                py-6 shadow-lg rounded border-1 border-gray-300 dark:bg-slate-850 flex flex-col items-center gap-4'
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
            </div>
            

            <div 
                data-aos="fade-left"
                data-aos-duration="1000"
                className='h-auto w-[320px] sm:w-[500px] py-6 shadow-lg rounded border-1 border-gray-300
                 dark:bg-slate-850 flex flex-col items-center gap-4 transform transition-transform duration-1000 hover:scale-110'
            >
                <div>
                    <h1 className=' text-3xl font-bold'>Submit Your Guess</h1>
                </div>

                <div className={` mt-4 text-blue px-12 py-2 text-white rounded-lg text-lg font-semibold cursor-pointer
                    transform transition-transform duration-300 hover:scale-105 bg-primary dark:bg-blue-950`}
                    onClick={() => setShowModal(true)}
                >
                    Submit
                </div>

            </div>


            <div
                data-aos="fade-right"
                data-aos-duration="1000"
                className=' w-full px-4 ss:px-0 flex items-center justify-center'
            >
                <div className=' h-auto w-full py-6 shadow-lg rounded border-1 border-gray-300 dark:bg-slate-850 flex flex-col items-center gap-8'>
                    <div>
                        <h1 className=' text-3xl font-bold'>Register your brand here</h1>
                    </div>
                    <div className=' w-full flex flex-wrap justify-center items-center gap-4 text-2xl font-medium text-gray-500'>
                        <div className=' h-[200px] w-[250px] md:h-[250px] md:w-[300px] bg-gray-300 dark:bg-slate-900 dark:text-gray-300 rounded-lg flex items-center justify-center'>
                            600x400
                        </div>
                        <div className=' h-[200px] w-[250px] md:h-[250px] md:w-[300px] bg-gray-300 dark:bg-slate-900 dark:text-gray-300 rounded-lg flex items-center justify-center'>
                            600x400
                        </div>
                        <div className=' h-[200px] w-[250px] md:h-[250px] md:w-[300px] bg-gray-300 dark:bg-slate-900 dark:text-gray-300 rounded-lg flex items-center justify-center'>
                            600x400
                        </div>
                        <div className=' h-[200px] w-[250px] md:h-[250px] md:w-[300px] bg-gray-300 dark:bg-slate-900 dark:text-gray-300 rounded-lg flex items-center justify-center'>
                            600x400
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <div className=' flex flex-col items-center justify-center pt-6'>
                    <h2 className='text-3xl font-bold mb-8'>Submit Your Guess</h2>
                    <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col gap-4'>
                        <label>
                            <span className=' text-lg font-medium'>Your Guess (3 digits):</span>
                            <input type="text" className='mt-1 p-2 border rounded w-full dark:text-black' placeholder="Enter your guess"
                            required
                            onChange={(e) => {setData(e.target.value)
                                // console.log(data);
                            }}/>
                        </label>
                        <label>
                        <span className=' text-lg font-medium'>Brand:</span>
                            <input required type="text" className='mt-1 p-2 border rounded w-full dark:text-black' placeholder="Enter the brand" />
                        </label>
                        <label>
                            <span className=' text-lg font-medium'>Username:</span>
                            <input required type="text" className='mt-1 p-2 border rounded w-full dark:text-black' placeholder="Enter your username" />
                        </label>
                        <button type="submit" className='mt-4 mb-8 py-2 px-4 bg-blue-600 text-white rounded'>Submit</button>
                    </form>
                </div>
            </Modal>
        </div>
    );
}
