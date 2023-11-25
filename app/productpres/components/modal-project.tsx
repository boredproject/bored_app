"use client";

import React from 'react';
// import {
//     APIProvider,
//     Map,
//     AdvancedMarker,
//     Pin,
//     InfoWindow,
// } from "@vis.gl/react-google-maps";

const Modal = () => {
    return (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center'>
            {/* Mobile Display */}
            <div className="lg:hidden flex bg-[#181818] p-6 h-3/4 w-3/4 border-solid border-[#5E2BFF] border-4 rounded text-white flex-col overflow-auto">
                {/* image du lieu */}
                <img alt="place-preview" className='border-solid border-[#5E2BFF] border-4 rounded w-full h-1/4' />
                <h1 className='font-bold text-3xl'>Nom du lieux</h1>
                <h2 className='text-xl'>19h45 - 23h00</h2>
                <p>adresse complète</p>
                {/* filtres API */}
                <div className='border-solid border-[#5E2BFF] border-4 rounded h-6 w-full'></div>
                {/* API Google Maps */}
                {/* <Map className='border-solid border-[#5E2BFF] border-4 rounded h-auto w-auto'>

                </Map> */}
                <p className='order'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque doloremque blanditiis ipsam a in accusamus minus ut! Reiciendis doloremque nostrum qui nobis voluptate ea temporibus fugit vero eum architecto. Velit.</p>
            </div>
            {/* Desktop Display */} 

        </div>
    );
};

export default Modal