import React from 'react'

export default function Footer() {

    const currentYear = new Date().getFullYear();


  return (
    <div className=" rounded-t-md md:rounded-t-xl bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700">
        <section className=" mx-auto text-white">
            <div className="border-t-2 border-gray-300/50 py-6 text-center">
                @Copyright {currentYear} || Lucky Draw. All rights reserved.
            </div>
        </section>
    </div>
  )
}
