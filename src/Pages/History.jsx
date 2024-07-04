import React from 'react';
import { Link } from 'react-router-dom';

const history = [
    {
        date: "2024-06-28",
        num: "123",
        winner: ["user123"],
    },
    {
        date: "2024-06-27",
        num: "456",
        winner: ["user456", "user789"],
    },
    {
        date: "2024-06-26",
        num: "789",
        winner: [],
    }
]

export default function History() {
    return (
        <div className='my-20 mx-8 sm:mx-20 flex items-center justify-center'>
            <div className='h-auto w-full py-6 px-4 shadow-lg rounded border-1 border-gray-300 dark:bg-slate-850 flex flex-col items-center gap-4'>
                <div 
                    data-aos="fade-down"
                    data-aos-duration="1000"
                >
                    <h1 className='text-3xl font-bold mb-4'>Winner History</h1>
                </div>
                {history.map((h, index) => (
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1000" 
                    key={index} className=' w-full rounded-lg flex flex-col items-center justify-center bg-gray-300 dark:bg-gray-700'>
                        <div className='h-auto w-full px-4 py-4 rounded text-lg font-medium flex items-stretch justify-between gap-2'>
                            <div className='flex-1 h-auto w-full py-3 rounded-lg flex justify-center items-center bg-white dark:bg-slate-900'>
                                Date: {h.date}
                            </div>
                            <div className='flex-1 h-auto w-full py-3 rounded-lg flex justify-center items-center bg-white dark:bg-slate-900'>
                                Winning Number: {h.num}
                            </div>
                            <div className='flex-1 h-auto w-full py-3 rounded-lg flex flex-col justify-center items-center bg-white dark:bg-slate-900'>
                                Winner{h.winner.length > 1 ? "s" : ""}:
                                {h.winner.map((win, index) => (
                                    <div key={index}>
                                        {win}{index === h.winner.length - 1 ? "" : ","}
                                    </div>
                                ))}
                                {h.winner.length === 0 && (
                                    <div className=' px-6 py-2 rounded-lg bg-gray-300 dark:bg-gray-700 '>
                                        No Winner
                                    </div>
                                )}
                            </div>
                        </div>
                        <Link to={'/details'}>
                            <div className=' flex justify-center items-center px-8 my-4 py-2 bg-primary dark:bg-blue-950 text-white rounded-lg text-lg font-semibold cursor-pointer
                            transform transition-transform duration-300 hover:scale-105'>
                                See Details
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
