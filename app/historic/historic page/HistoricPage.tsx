import React from "react";
import Navigation from "@/app/homepage/Navigation/Navigation";
import WaveFooter from "@/app/homepage/Footer/WaveFooter";
import HistoricTable from "@/app/historic/component/HistoricTable";


const HistoricPage = () => {
    return (
        <div>
            <Navigation />

            <WaveFooter />
            <HistoricTable />
        </div>
    )
}


export default HistoricPage