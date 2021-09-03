import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import '../cssSections/platinumSponsor.css'
import {Grid} from '@material-ui/core'
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
function PlatinumSponsor() {
    return (
        <div className="plat__spon">
            <div className="plat__spon__cover">
                <div className="plat__header">
                <Bounce right cascade>
                <h1>Platinum sponsor</h1>
                </Bounce>
                </div>
                <div className="plat__hor"></div>
                <Grid lg={12} item container spacing={1}>
                <Grid item lg={4} sm={6} xs={12}>
                <Bounce left>
                <div className="plat__spon__content">
                    <div className="plat__spon__icon">
                        <HomeIcon style={{ fontSize: 100 }}/>
                    </div>
                    <div className="plat__text">
                        <h1>Platinum</h1>
                        <p>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes.</p>
                    </div>
                </div>
                </Bounce>
                </Grid>
                <Grid item lg={4} sm={6} xs={12}>
                <Zoom >
                <div className="plat__spon__content">
                    <div className="plat__spon__icon">
                        <HomeIcon style={{ fontSize: 100 }}/>
                    </div>
                    <div className="plat__text">
                        <h1>Platinum</h1>
                        <p>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes.</p>
                    </div>
                </div>
                </Zoom>
                </Grid>
                <Grid item lg={4} sm={6} xs={12}>
                <Bounce right>
                <div className="plat__spon__content">
                    <div className="plat__spon__icon">
                        <HomeIcon style={{ fontSize: 100 }}/>
                    </div>
                    <div className="plat__text">
                        <h1>Platinum</h1>
                        <p>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes.</p>
                    </div>
                </div>
                </Bounce>
                </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default PlatinumSponsor
