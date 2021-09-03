import React from 'react'
import '../cssFiles/sponsors.css'
import GoldSponsors from '../jsSections/GoldSponsors';
import MainSponsor from '../jsSections/MainSponsor';
import PlatinumSponsor from '../jsSections/PlatinumSponsor';
function Sponsors() {
    return (
        <div className="page__sponsor">
            <div className="sponser__header">
            <div className="spon__img"></div>
            <div className="spon__img__text">
                <h1> “Champions <span>keep playing</span> until they get it right.”</h1>
            </div>
            </div>
            <MainSponsor/>
            <PlatinumSponsor/>
            <GoldSponsors/>
        </div>
    )
}

export default Sponsors
