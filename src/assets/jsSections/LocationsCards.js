import React from 'react'
import '../cssSections/locationsCards.css'
import {Grid} from '@material-ui/core'
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
function LocationsCards() {
    return (
        <div className="locations__cards">
               <div className="location__header">
        <Bounce left cascade>
        <h1>Our Locations</h1>
        </Bounce>
            <div className="location__hr__line"></div>
        </div>
        <Zoom Bottom>
        <div className="location__cards__cover">
        <Grid lg={12} item container spacing={5}>
        <Grid item lg={6} sm={8} xs={12}>
        <div class="hvrbox">
	<img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1413&q=80" alt="" class="hvrbox-layer_bottom" />
	<div class="hvrbox-layer_top">
  <div class="hvrbox-text">
    <h5>Location Name</h5>
    <p>here you can put your address or whatever you want</p>
    </div>
	</div>
</div>
        </Grid>
        <Grid item lg={6} sm={8} xs={12}>
        <div class="hvrbox">
	<img src="https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="" class="hvrbox-layer_bottom" />
	<div class="hvrbox-layer_top">
  <div class="hvrbox-text">
    <h5>Location Name</h5>
    <p>here you can put your address or whatever you want</p>
    </div>
	</div>
</div>
        </Grid>
        <Grid item lg={6} sm={8} xs={12}>
        <div class="hvrbox">
	<img src="https://images.unsplash.com/photo-1517462035531-76bc910a6903?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1502&q=80" alt="" class="hvrbox-layer_bottom" />
	<div class="hvrbox-layer_top">
		<div class="hvrbox-text">
    <h5>Location Name</h5>
    <p>here you can put your address or whatever you want</p>
    </div>
	</div>
</div>
        </Grid>
        </Grid>
        </div>
        </Zoom>
    </div>
    )
}

export default LocationsCards
