import React from "react";

import HistoryTable from "../component/HistoryTable";
import Navigation from "../../homepage/Navigation/Navigation";
import WaveFooter from "../../homepage/Footer/WaveFooter";

const HistoricPage = () => {
    return (
        <div>
            <Navigation />
            <WaveFooter />
            <HistoryTable />
        </div>
    )
}


export default HistoricPage