'use client';

import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {motion} from "framer-motion";


const MainButton: React.FC = () => {
    const [isClicked, setIsClicked] = useState(false);
    const router = useRouter();

    const handleButtonClick = () => {
        router.push("/selection");
    };

    useEffect(() => {
        if (isClicked) {
            const timeoutId = setTimeout(() => {
                setIsClicked(false);
            }, 300);
            return () => clearTimeout(timeoutId);
        }
    }, [isClicked]);

    const handleMouseDown = () => {
        setIsClicked(true);
    };

    return (
        <motion.div
            className={`z-1 flex items-center bg-transparent text-white font-bold uppercase px-2 py-1 rounded-lg text-3xl border-4 border-white transform`}
            whileHover={{scale: 1.25}}
            whileTap={{scale: 1.5}}
            onMouseDown={handleMouseDown}
            onClick={handleButtonClick}
        >
            <div></div>
            <p>
                BO<span className="text-[#5E2BFF]">RED</span>
            </p>
            <svg
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M9.58179 2.31567L10.1741 3.86158C10.5578 4.8626 11.3076 5.68493 12.2748 6.16596C13.0375 6.54523 13.6702 7.13923 14.0914 7.87311L14.6333 8.81586"
                    stroke="#5E2BFF"
                    strokeWidth="4"
                    strokeLinecap="round"
                />
                <path
                    d="M2.15295 6.15674L2.74522 7.70264C3.12893 8.7037 3.8782 9.52604 4.84597 10.007C5.60871 10.3863 6.24081 10.9803 6.6626 11.7142L7.20449 12.6569"
                    stroke="#5E2BFF"
                    strokeWidth="4"
                    strokeLinecap="round"
                />
                <path
                    d="M17.1594 22.2596L18.7704 20.7151C20.4377 19.1164 21.6281 17.0954 22.211 14.873L22.4687 13.1659C22.5917 12.3477 22.5033 11.5118 22.211 10.7366"
                    stroke="#5E2BFF"
                    strokeWidth="4"
                    strokeLinecap="round"
                />
                <path
                    d="M3.78735 22.2596L8.12243 23.3649C9.09138 23.6119 10.0884 23.7369 11.089 23.7369H11.6221C13.2091 23.7369 14.7727 23.3532 16.1751 22.6191C16.6327 22.3798 17.0697 22.1049 17.4827 21.7969L19.1335 20.5658C20.3673 19.6459 21.3087 18.3971 21.8488 16.9662C22.1862 16.0705 22.3596 15.1222 22.3596 14.1662V12.0662V10.5889"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                />
            </svg>
        </motion.div>

    );
};

export default MainButton;