import React from "react";
import Navigation from "../../homepage/navigation/Navigation";
import WaveFooter from "../../homepage/footer/WaveFooter";
import HistoryTable from "../component/HistoryTable";

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