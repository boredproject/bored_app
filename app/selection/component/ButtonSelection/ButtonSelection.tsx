// ButtonSelection.tsx
'use client;';

import React from 'react';
import IdeaButton from './IdeaButtonSingle/IdeaButton';


const ButtonSelection = () => {
  return (
    <div>
      <div className='flex flex-row justify-evenly'>
      <IdeaButton type="svg1" textspin='spinnersvg1' /> {/* Vous pouvez changer le type ici */}
      <IdeaButton type="svg2" textspin='spinnersvg2'/> {/* Vous pouvez changer le type ici */}
      <IdeaButton type="svg3" textspin='spinnersvg3'/> {/* Vous pouvez changer le type ici */}
      </div>
    </div>
  );
};

export default ButtonSelection;
