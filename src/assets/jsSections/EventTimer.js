import React,{useEffect,useRef,useState} from 'react'
import '../cssSections/evenTimer.css'
import logo1 from '../images/logo-plain.png'
import logo2 from '../images/logo-horizontal.png'
import { BsArrowDownShort } from 'react-icons/bs';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';

function EventTimer() {

    const [days, setDays] = useState('00')
    const [hours, setHours] = useState('00')
    const [min, setMin] = useState('00')
    const [sec, setSec] = useState('00')
    let interval = useRef();
    const startTimer = () => {

        const countdownData = new Date('January 1, 2023 00:00:00').getTime()

        interval = setInterval(()=> {
            const now = new Date().getTime()
            const distance = countdownData - now;
            const timeday = Math.floor(distance / (1000 * 60 * 60 * 24))
            const timehours=Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
            const timemin=Math.floor((distance % (1000 * 60 * 60))/(1000 * 60))
            const timesec=Math.floor((distance % (1000 * 60))/ 1000)
            if (distance < 0){
                //now stop timer
                clearInterval(interval.current)
            } else {
                // update the timer
                setDays(timeday)
                setHours(timehours)
                setMin(timemin)
                setSec(timesec)
            }

        }, 1000)
    }

    useEffect(()=>{
        startTimer();
        return () => {
            clearInterval(interval.current)
        }
    })

    return (
        <div className="event">
        <div className="time__counter">
            <div className="time__counter__cover">
            <div className="time__logo">
                <img src={logo1} alt="" />
                <Bounce left cascade>
                <p>Paris 2023</p>
                </Bounce>
            </div>


<Zoom>
<div className="time_running_cover">
    <div className="time_running">
                <div className="run_logo">
                    <img src={logo2} alt="" />
                </div>
                <div className="time_para">
                <p>TIME LEFT UNTIL THE OLYMPIC<br></br>
AND PARALYMPIC GAMES PARIS 2023DAYS</p>
                </div>
                <div className="run_days">
                    <ul>
                        <li className="count_number">
                        <p>{days}&nbsp;</p>
                        <p>Days</p>
                        </li>
                        <li className="count_number">
                        <p>{hours}&nbsp; </p>
                        <p>Hours</p>
                        </li>
                        <li className="count_number">
                        <p>{min}&nbsp; </p>
                        <p>min</p>
                        </li>
                        <li className="count_number">
                        <p>{sec}&nbsp; </p>
                        <p>sec</p>
                        </li>
                    </ul>
                </div>
            </div>
    </div>
</Zoom>
       <div className="time__header">
                <h1>PARIS 2023 MAKES ITS ENTRANCE</h1>
            </div>
            </div>
        </div>
        <div className="event__pic"></div>
        <div className="event__content">
        <div className="event__content__cover">
            <div className="content__box">
                <h3>THE TALENTS</h3>
                <p>They are French, young, ingenious, and they have united their talent for Paris 2024.</p>
                <button><BsArrowDownShort className="arrow_icon" size="36"/></button>
            </div>
            <div className="content__box">
                <h3>THE SYMBOLS</h3>
                <p>They are French, young, ingenious, and they have united their talent for Paris 2024.</p>
                <button><BsArrowDownShort className="arrow_icon" size="36"/></button>
            </div>
            <div className="content__box">
                <h3>THE WEBSITE</h3>
                <p>They are French, young, ingenious, and they have united their talent for Paris 2024.</p>
                <button><BsArrowDownShort className="arrow_icon" size="36"/></button>
            </div>
        </div>
        </div>
        </div>
    )
}

export default EventTimer
