"use client";

import React, { useState, useEffect } from "react";
import { useModal } from "../Contexts/AuthModalProvider";

const AuthModal = () => {
  const { closeModal, isModalOpen } = useModal();

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isModalOpen &&
        event.target instanceof Element &&
        !event.target.closest(".modal-content")
      ) {
        closeModal();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isModalOpen, closeModal]);
  // State to store form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Function to handle form submission
  const handleSubmit = () => {
    // Add your form submission logic here
    alert("Form submitted!");
    closeModal(); // Close the modal after submission
  };

  // Function to handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      {isModalOpen && (
        <div className="fixed z-10 inset-0 flex items-center justify-center bg-black">
          <div
            className="bg-[#181818] px-4 pt-4 pb-1 w-80"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-12 ">Login</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-xs uppercase tracking-wider"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-1 border text-black rounded"
                  required
                />
              </div>
              <div className="mb-24">
                <label
                  htmlFor="password"
                  className="block text-xs uppercase tracking-wider"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full p-1 border text-black rounded"
                  required
                />
              </div>
              <div className="flex flex-col items-center gap-2">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-[#5E2BFF] text-sm uppercase underline tracking-wider"
                >
                  Login
                </button>
                <span className="text-[#5F6368] text-sm tracking-wider">
                  HETIC
                </span>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthModal;
