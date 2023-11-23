// ParentComponent.tsx
import React, { useState } from "react";
import DropdownMenuLogin from "@/app/homepage/Navigation/Dropdown/DropDownMenuLogin";
import DropdownMenuProfile from "@/app/homepage/Navigation/Dropdown/DropdownMenuProfile";

const ParentComponent = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div>


            {/* Utilisation du composant DropdownMenuLogin avec la gestion de l'état via toggleDropdown */}
            <DropdownMenuLogin isOpen={isDropdownOpen} toggleDropdown={toggleDropdown} />

            {/* Utilisation du composant DropdownMenuProfile avec la gestion de l'état via toggleDropdown */}
            {isDropdownOpen && <DropdownMenuProfile isOpen={isDropdownOpen} toggleDropdown={toggleDropdown} />}
        </div>
    );
};

export default ParentComponent;
