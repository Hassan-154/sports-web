import React from 'react'
import '../cssSections/los.css'
import Bounce from 'react-reveal/Bounce';
function Los() {
    return (
        <div className="los">
            <div className="los__back__img"></div>
            <Bounce left cascade>
            <div className="los__content">
                    <h1>LOS<br></br> JUEGOS<br></br> COMIENZAN<br></br> AHORA</h1>
                    <p>EL FUTURO ES UNA HUELLA LIGERA</p>
                    <div className="los__bottom__line">
                        <p>Con Milano Cortina 2026, a partir de hoy para los próximos años,</p>
                        <p>Con Milano Cortina 2026, a partir de hoy para los próximos años,</p>
                       
                    </div>
                    <div className="los__short__text">
                        <p>OLIMPIADA <br></br><span>6 - 22 DE FEBRERO DE</span></p>
                        <p>JUEGOS <br></br>PARALÍMPICOS</p>
                    </div>
                </div>
            </Bounce>
        </div>
    )
}

export default Los
