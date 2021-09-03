import React from 'react'
import '../cssSections/aboutTeam.css'
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
function AboutTeam() {
    return (
        <div className="about__team">
            <div className="about__team__cover">
                <div className="about__team__header">
                    <Bounce left cascade>
                    <h1>biography</h1>
                    </Bounce>
                    <p>A life's work of embracing both the creative and the quantitative, developing thriving online businesses and enviable brands.</p>
                </div>
                <div className="about__hr__line"></div>
                <div className="about__content__grid">
                    <div className="about__left__grid">
                        <p>Sit amet massa vitae tortor condimentum lacinia quis. Ornare arcu dui vivamus arcu felis bibendum ut. Consectetur adipiscing elit duis tristique sollicitudin. Volutpat lacus laoreet non curabitur. Magna fringilla urna porttitor rhoncus. Ultricies leo integer malesuada nunc vel risus commodo viverra. Ipsum a arcu cursus vitae congue. Imperdiet dui accumsan sit amet nulla facilisi. Tincidunt dui ut ornare lectus sit. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Eget gravida cum sociis natoque. </p>
                        <button>CONTACT US</button>
                    </div>
                    <div className="about__right__grid">
                    <p>Nisl pretium fusce id velit ut tortor pretium viverra suspendisse. Pulvinar etiam non quam lacus suspendisse. Tempor orci dapibus ultrices in iaculis nunc sed. Ac auctor augue mauris augue. Pharetra vel turpis nunc eget lorem dolor. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Convallis a cras semper auctor. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Eu facilisis sed odio morbi. Viverra ipsum nunc aliquet bibendum enim facilisis. </p>
                    </div>
                </div>
            </div>
            <div className="about__pic__grid">
            <Bounce left>
            <div className="about__pic__cover">
                    <div className="about__imgg"> <img src="https://images.unsplash.com/photo-1579118466017-a6f9f83e600a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1534&q=80" alt="" /></div>
                    <div className="about__conn"><h1><span>form ever</span><br></br>follows<br></br> function</h1></div>
                </div>
            </Bounce>
              <Zoom>
              <div className="about__pic__cover">
                    <div className="about__imgg"> <img src="https://images.unsplash.com/photo-1579103614966-7d55d3a3e056?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1534&q=80" alt="" /></div>
                    <div className="about__conn"><p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p></div>
                </div>
              </Zoom>
                <Bounce right>
                <div className="about__pic__cover">
                    <div className="about__imgg"> <img src="https://images.unsplash.com/photo-1579107574721-3f92ca303bde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1534&q=80" alt="" /></div>
                    <div className="about__conn"><p></p></div>
                </div>
                </Bounce>
                </div>
        </div>
    )
}

export default AboutTeam



