import React from 'react';
import { GrClose } from "react-icons/gr";

export default function Modal({ show, onClose, children }) {
    if (!show) {
        return null;
    }

    return (
        <div className='fixed z-[1000] inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center'>
            <div className='bg-white dark:bg-slate-950 p-4 rounded shadow-lg w-[90%] max-w-md'>
                <div className='flex justify-end'>
                    <button onClick={onClose} className='text-gray-600 dark:text-gray-300 font-extrabold'>
                        <GrClose size={30}/>
                    </button>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}
