import React from "react";
import Navigation from "../../homepage/Navigation/Navigation";
import WaveFooter from "../../homepage/Footer/WaveFooter";
import HistoryTable from "../component/HistoryTable";

const HistoryPage = () => {
    return (
        <div>
            <Navigation />
            <WaveFooter />
            <HistoryTable />
        </div>
    )
}


export default HistoryPage