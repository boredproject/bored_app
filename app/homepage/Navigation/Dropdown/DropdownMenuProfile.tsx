"use client";
import React, {useState} from 'react';
import ProfileImage from '../../../assets/AvatarDefault.png';
import Image from 'next/image';// Interface pour définir la structure des données du profil


interface DropdownMenuProfileProps {
    isOpen: boolean;
    toggleDropdown: () => void;

}
// Composant DropdownMenuProfile
const DropdownMenuProfile: React.FC<DropdownMenuProfileProps> = ({ isOpen, toggleDropdown }) => {

    const [isEditingMail, setIsEditingMail] = useState(false);
    const [isEditingNumbertel, setIsEditingNumbertel] = useState(false);
    const [isEditingAdress, setIsEditingAdress] = useState(false);


    const [email, setEmail] = useState('Bored@gmail.com');
    const [numbertel, setNumbertel] = useState('06 06 06 06 06');
    const [adress, setAdress] = useState('27 Rue du Progrès, Montreuil,');
    const handleEditClickMail = () => {
        setIsEditingMail(true);
    };
    const handleEditClickNumbertel = () => {
        setIsEditingNumbertel(true);
    };

    const handleEditClickAdress = () => {
        setIsEditingAdress(true);
    };



    const handleNumberTelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       const newNumber= e.target.value.replace(/\D/g, '')
        setNumbertel(newNumber);
    };
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handleAdressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAdress(e.target.value);
    };
    const handleSaveClickMail = () => {
        setIsEditingMail(false);
        // You can perform an action here to save the new email value
    };
    const handleSaveClickNumbertel = () => {
        setIsEditingNumbertel(false);
        // You can perform an action here to save the new numbertel value
    };

    const handleSaveClickAdress = () => {
        setIsEditingAdress(false);
        // You can perform an action here to save the new adress value
    };


    return (



        <div className={`absolute z-10 justify-between w-80 flex flex-col right-0 bg-zinc-900 p-4 shadow-md shadow-indigo-800 border-4 border-indigo-800/100 ${isOpen ? 'visible' : 'hidden'}`}>
            {/* Bouton du profil avec nom d'utilisateur */}
            <div className="w-1.5/5 h-3/5 rounded-full border-2 border-indigo-800 mx-auto mb-4">
                <Image src={ProfileImage} alt="Profile" width={100} height={100} className="rounded-full bg-indigo-800" />
            </div>
            <svg
                className="cursor transition-transform transform-gpu active:scale-150 absolute top-5 right-2 mt-2 mr-2"
                width="28"
                height="28"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={toggleDropdown}
            >
                <path
                    d={
                        isOpen
                            ? "M7 7C6.0375 7 5.21354 6.65729 4.52812 5.97187C3.84271 5.28646 3.5 4.4625 3.5 3.5C3.5 2.5375 3.84271 1.71354 4.52812 1.02813C5.21354 0.342708 6.0375 0 7 0C7.9625 0 8.78646 0.342708 9.47187 1.02813C10.1573 1.71354 10.5 2.5375 10.5 3.5C10.5 4.4625 10.1573 5.28646 9.47187 5.97187C8.78646 6.65729 7.9625 7 7 7ZM0 14V11.55C0 11.0542 0.12775 10.5983 0.38325 10.1824C0.63875 9.76646 0.977666 9.44942 1.4 9.23125C2.30417 8.77917 3.22292 8.43996 4.15625 8.21363C5.08958 7.98729 6.0375 7.87442 7 7.875C7.9625 7.875 8.91042 7.98817 9.84375 8.2145C10.7771 8.44083 11.6958 8.77975 12.6 9.23125C13.0229 9.45 13.3621 9.76733 13.6176 10.1832C13.8731 10.5992 14.0006 11.0548 14 11.55V14H0Z"
                            : "M7 7C6.0375 7 5.21354 6.65729 4.52812 5.97187C3.84271 5.28646 3.5 4.4625 3.5 3.5C3.5 2.5375 3.84271 1.71354 4.52812 1.02813C5.21354 0.342708 6.0375 0 7 0C7.9625 0 8.78646 0.342708 9.47187 1.02813C10.1573 1.71354 10.5 2.5375 10.5 3.5C10.5 4.4625 10.1573 5.28646 9.47187 5.97187C8.78646 6.65729 7.9625 7 7 7Z"
                    }
                    fill="white"
                />
            </svg>
            <div className="flex justify-center items-center   text-lg font-bold">
                <p>Wissem95</p>
            </div>
            <div className="flex justify-center items-center   text-lg font-normal">
                <p>Wissem</p>
            </div>
            <div className="flex justify-center items-center   text-lg font-normal">
                <p>21</p>
            </div>

            {/* Contenu du menu déroulant email*/}
            <div className="flex justify-between items-center border-2 border-indigo-800/100 mb-4 text-sm font-light text-white-700 mb-2 uppercase">
                {isEditingMail ? (
                    <input
                        type="text"
                        value={email}
                        onChange={handleEmailChange}
                        className="bg-transparent border-none focus:outline-none text-white"
                    />
                ) : (
                    <p>{email}</p>
                )}
                {/* Crayon pour activer le mode d'édition */}
                {!isEditingMail && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        className="ml-1 w-4 h-4 cursor-pointer"
                        onClick={handleEditClickMail}
                    >
                        <path d="M12 2L2 12 12 22 22 12 12 2zM12 22V15M12 2v7"></path>
                    </svg>
                )}
                {/* Bouton pour sauvegarder le changement */}
                {isEditingMail && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        className="ml-1 w-4 h-4 cursor-pointer"
                        onClick={handleSaveClickMail}
                    >
                        <path d="M20 12H4M20 12L13 5M20 12L13 19"></path>
                    </svg>
                )}
            </div>


            {/* Contenu du menu déroulant Number Tel*/}

            <div className=" flex justify-between items-center  border-2 border-indigo-800/100 mb-4 text-sm font-light text-white-700 mb-2 uppercase">
                {isEditingNumbertel ? (
                    <input
                        type="text"
                        value={numbertel}
                        onChange={handleNumberTelChange}
                        className="bg-transparent border-none focus:outline-none text-white"
                    />
                ) : (
                    <p>{numbertel}</p>
                )}
                {/* Crayon pour activer le mode d'édition */}
                {!isEditingNumbertel && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        className="ml-1 w-4 h-4 cursor-pointer"
                        onClick={handleEditClickNumbertel}
                    >
                        <path d="M12 2L2 12 12 22 22 12 12 2zM12 22V15M12 2v7"></path>
                    </svg>
                )}
                {/* Bouton pour sauvegarder le changement */}
                {isEditingNumbertel && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        className="ml-1 w-4 h-4 cursor-pointer"
                        onClick={handleSaveClickNumbertel}
                    >
                        <path d="M20 12H4M20 12L13 5M20 12L13 19"></path>
                    </svg>
                )}
            </div>

            {/* Contenu du menu déroulant Adresse*/}

            <div className=" flex justify-between items-center  border-2 border-indigo-800/100 mb-4 text-sm font-light text-white-700 mb-2 uppercase">
                {isEditingAdress ? (
                    <input
                        type="text"
                        value={adress}
                        onChange={handleAdressChange}
                        className="bg-transparent border-none focus:outline-none text-white"
                    />
                ) : (
                    <p>{adress}</p>
                )}
                {/* Crayon pour activer le mode d'édition */}
                {!isEditingAdress && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        className="ml-1 w-4 h-4 cursor-pointer"
                        onClick={handleEditClickAdress}
                    >
                        <path d="M12 2L2 12 12 22 22 12 12 2zM12 22V15M12 2v7"></path>
                    </svg>
                )}
                {/* Bouton pour sauvegarder le changement */}
                {isEditingAdress && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        className="ml-1 w-4 h-4 cursor-pointer"
                        onClick={handleSaveClickAdress}
                    >
                        <path d="M20 12H4M20 12L13 5M20 12L13 19"></path>
                    </svg>
                )}
            </div>
            <div className=" flex justify-between  border-2 border-indigo-800/100 mb-4 text-sm font-light text-white-700 mb-2 uppercase">
                <p>Grpd</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    className="ml-1 w-4 h-4"
                >
                    <circle cx="12" cy="12" r="5" />
                </svg>
            </div>
            <div className="flex justify-start items-center  uppercase text-sm font-light underline">
                <a href="#">Legal Notice</a>
            </div>
            <div className="flex justify-start items-center  uppercase text-sm font-light underline">
                <a href="#">My personal Data</a>
            </div>
            <div className="flex justify-center items-center  text-indigo-800 uppercase text-sm font-light underline">
                <a href="#">Logout</a>
            </div>
            <div className="flex justify-center items-center  text-[#5F6368] uppercase text-sm font-light ">
                <p>HETIC</p>
            </div>



        </div>
    );
};

export default DropdownMenuProfile;











