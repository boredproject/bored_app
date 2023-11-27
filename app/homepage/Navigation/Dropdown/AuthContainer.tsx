import React, { useState } from "react";
import LoginForm from "@/app/homepage/Navigation/Dropdown/Login/LoginForm";
import RegisterForm from "@/app/homepage/Navigation/Dropdown/Register/RegisterForm";

interface AuthContainerProps {
    isOpen: boolean;
    toggleDropdown: () => void;
}

const AuthContainer: React.FC<AuthContainerProps> = ({ isOpen, toggleDropdown }) => {
    const [showLoginForm, setShowLoginForm] = useState(true);

    const toggleFormView = () => {
        setShowLoginForm((prev) => !prev);
    };

    return (
        <>
            {showLoginForm ? (
                <LoginForm
                    toggleDropdown={toggleDropdown}
                    toggleRegisterView={toggleFormView}
                    isOpen={isOpen}
                />
            ) : (
                <RegisterForm toggleDropdown={toggleDropdown} isOpen={isOpen} />
            )}
        </>
    );
};

export default AuthContainer;
