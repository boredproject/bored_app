"use client";

import React from 'react';

const Modal = () => {
    return (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center'>
            {/* Mobile Display & Desktop Display */}
            <div className="flex bg-[#181818] p-6 h-3/4 lg:w-2/3 w-3/4 border-solid border-[#5E2BFF] border-4 rounded text-white flex-col lg:flex-row lg:flex-wrap overflow-auto lg:justify-start">
                {/* image du lieu */}
                <img alt="place-preview" className='border-solid border-[#5E2BFF] border-4 rounded w-full h-1/4 lg:h-auto lg:w-1/3 lg:mb-5' />
                <div className='lg:flex lg:flex-col lg:ml-5'>
                    <h1 className='font-bold text-3xl lg:text-5xl'>Nom du lieux</h1>
                    <h2 className='text-xl'>horaires ouverture - fermeture</h2>
                    <p className='mb-5'>adresse complète</p>
                </div>
                {/* filtres API */}
                <div className='border-solid border-[#5E2BFF] border-4 rounded h-6 w-full'></div>
                    <p className='lg:w-3/6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque doloremque blanditiis ipsam a in accusamus minus ut! Reiciendis doloremque nostrum qui nobis voluptate ea temporibus fugit vero eum architecto. Velit.</p>
                    {/* API Google Maps */}
                    {/* <Map className='border-solid border-[#5E2BFF] border-4 rounded h-auto w-auto'>
                    </Map> */}
            </div>
        </div>
    );
};

export default Modal