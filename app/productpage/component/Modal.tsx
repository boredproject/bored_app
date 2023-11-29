import React, { useEffect } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    name: string;
    hours: string | null;
    address: string | null;
    desc: string | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, name, hours, address, desc }) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isOpen && !(event.target as HTMLElement).closest(".modal-content")) {
                onClose();
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isOpen, onClose]);

    return (
        <div className={`fixed w-full h-full flex items-center bg-black m-auto justify-center ${isOpen ? "visible" : "invisible"}`}>
            <div className="flex bg-[#181818] p-6 h-2/4 lg:w-2/3 w-3/4 border-solid border-[#5E2BFF] border-4 rounded text-white flex-col lg:flex-row lg:flex-wrap overflow-auto lg:justify-start modal-content">
                {/* image du lieu */}
                <img alt="place-preview" className="border-solid border-[#5E2BFF] border-4 rounded w-full h-1/4 lg:h-auto lg:w-1/3 lg:mb-5" />
                <div className="lg:flex lg:flex-col lg:ml-5">
                    <h1 className="font-bold text-3xl lg:text-5xl">{name}</h1>
                    <h2 className="text-xl">{hours || "No hours available"}</h2>
                    <p className="mb-5">{address || "No address available"}</p>
                </div>
                {/* filtres API */}
                <div className="border-solid border-[#5E2BFF] border-4 rounded h-6 w-full"></div>
                <p className="lg:w-3/6">{desc || "No description available"}</p>
            </div>
        </div>
    );
};

export default Modal;