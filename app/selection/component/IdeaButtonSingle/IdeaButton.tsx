// IdeaButton.tsx
'use client;';

import React from 'react';
import ButtonSVG from './ButtonSVG';

interface IdeaButtonProps {
  type: 'svg1' | 'svg2' | 'svg3'; // Ajoutez cette ligne pour définir la prop type
}

const IdeaButton: React.FC<IdeaButtonProps> = ({ type }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-72 h-72 bg-transparent border-4 border-[#5E2BFF] rounded-full flex items-center justify-center">
        <ButtonSVG type={type} />
      </div>
    </div>
  );
};

export default IdeaButton;
