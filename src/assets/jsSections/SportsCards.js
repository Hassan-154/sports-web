import React from 'react'
import '../cssSections/sportsCards.css'
import {Grid} from '@material-ui/core'
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
function SportsCards() {
    return (
        <div className="sports__cards">
            <div className="sports__cards__cover">
            <div className="sport__header">
            <Bounce left cascade>
            <h1>We Are Offering</h1>
        </Bounce>
                <div className="sport__hr__line"></div>
            </div>
            <Grid lg={12} item container spacing={5}>
            <Grid item lg={4} sm={6} xs={12}>
            <Bounce left>
            <div className="example">
        <img src="https://images.unsplash.com/photo-1600965962102-9d260a71890d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt=""/>
        <div className="content">
          <div className="text"><h5>swimming</h5>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit</p>
          </div>
        </div>
      </div>
            </Bounce>
            </Grid>
            <Grid item lg={4} sm={6} xs={12}>
            <Zoom>
            <div className="example">
        <img src="https://images.unsplash.com/flagged/photo-1576448438685-9f5e5b283d4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt=""/>
        <div className="content">
          <div className="text"><h5>golf</h5>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit</p>
          </div>
        </div>
      </div>
            </Zoom>
            </Grid>
            <Grid item lg={4} sm={6} xs={12}>
            <Bounce right>
            <div className="example">
        <img src="https://images.unsplash.com/photo-1526676037777-05a232554f77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt=""/>
        <div className="content">
          <div className="text"><h5>Athletism</h5>
         <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit</p>
          </div>
        </div>
      </div>
            </Bounce>
            </Grid>
            <Grid item lg={4} sm={6} xs={12}>
            <Bounce left>
            <div className="example">
        <img src="https://images.unsplash.com/photo-1551280857-2b9bbe52acf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" alt=""/>
        <div className="content">
          <div className="text"><h5>Futsal</h5>
         <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit</p>
          </div>
        </div>
      </div>
            </Bounce>
            </Grid>
            <Grid item lg={4} sm={6} xs={12}>
            <Bounce bottom>
            <div className="example">
        <img src="https://images.unsplash.com/photo-1573196444192-cc9f26e94408?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1386&q=80" alt="" />
        <div className="content">
          <div className="text"><h5>basket ball</h5>
         <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit</p>
          </div>
        </div>
      </div>
            </Bounce>
            </Grid>
            <Grid item lg={4} sm={6} xs={12}>
            <Bounce right>
            <div className="example">
        <img src="https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" alt="" />
        <div className="content">
          <div className="text"><h5>Volleyball</h5>
         <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit</p>
          </div>
        </div>
      </div>
            </Bounce>
            </Grid>
            <Grid item lg={4} sm={6} xs={12}>
            <Bounce left>
            <div className="example">
        <img src="https://images.unsplash.com/photo-1545809074-59472b3f5ecc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" alt="" />
        <div className="content">
          <div className="text"><h5>Tennis</h5>
         <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit</p>
          </div>
        </div>
      </div>
            </Bounce>
            </Grid>
            </Grid>
            </div>
        </div>
    )
}

export default SportsCards
