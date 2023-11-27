'use client'
import React from "react";
import SpinningText from "./SpinningText/SpinningText";
import MainButton from "./MainButton/MainButton";
import { motion } from "framer-motion";
const CtaMainpage = () => {

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
        >
        <div className="flex justify-center items-center h-screen w-screen">
            <div>
                <SpinningText />
            </div>
            <div className="fixed">
                <MainButton/>
            </div>
        </div>
        </motion.div>
    );
};

export default CtaMainpage;
