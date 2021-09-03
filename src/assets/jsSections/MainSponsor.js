import React from 'react'
import '../cssSections/mainSponsor.css'
import HomeIcon from '@material-ui/icons/Home';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
function MainSponsor() {
    return (
        <div className="main__spon">
            <div className="main__spon__cover">
                <div className="main__spon__heading">
               <Bounce left cascade>
               <h1>Main Sponsor</h1>
               </Bounce>
                </div>
                <div className="main__hor"></div>
                <Zoom right>
                <div className="main__spon__box">
                <div className="main__ver"></div>
                    <div className="main__logo">
                    <HomeIcon style={{ fontSize: 90 }}/>
                    </div>
                    <div className="main__spon__content">
                    <h1>UNLIMITED <span>STORAGE</span></h1>
                    <p>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes.</p>
                    </div>
                </div>
                </Zoom>
            </div>
        </div>
    )
}

export default MainSponsor
