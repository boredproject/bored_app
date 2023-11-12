// ButtonSelection.tsx
'use client;';

import React from 'react';
import IdeaButton from '../IdeaButtonSingle/IdeaButton';

const ButtonSelection = () => {
  return (
    <div className='flex flex-row justify-evenly'>
      <IdeaButton type="svg1" /> {/* Vous pouvez changer le type ici */}
      <IdeaButton type="svg2" /> {/* Vous pouvez changer le type ici */}
      <IdeaButton type="svg3" /> {/* Vous pouvez changer le type ici */}
    </div>
  );
};

export default ButtonSelection;
