// SelectionPage.jsx
import React from 'react';
import Navigation from '../../homepage/Navigation/Navigation';
import ButtonSelection from '../component/ButtonSelection/ButtonSelection';
import WaveFooter from '../../homepage/Footer/WaveFooter';

const SelectionPage = () => {
    return (
        <div className="page-content">
            <Navigation />
            <ButtonSelection />
            <WaveFooter />
        </div>
    );
};

export default SelectionPage;
