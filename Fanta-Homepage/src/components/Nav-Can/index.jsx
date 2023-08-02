import './index.css'
import redCan from '../../../../public/images/cans/red-can.png';
import blueCan from '../../../../public/images/cans/blue-can.png';
import orangeCan from '../../../../public/images/cans/orange-can.png';
import yellowCan from '../../../../public/images/cans/yellow-can.png';
import { Link } from 'react-router-dom'

const Navs = () => {

    let audio1 = new Audio('/Can.wav')
    let audio2 = new Audio('/can2.wav')
    let audio3 = new Audio('/can3.wav')
    const start1 = () => {
    audio1.play()
    }

    const start2 = () => {
        audio2.play()
    }
    
    const start3 = () => {
        audio3.play()
    }

    return (
        <div className="cans-nav">
                <nav>
                    <Link exact="true" activeClassName="active"  to="/" onClick={start1}>
                        <img src={redCan} className='can-pad-right-20'  alt="Red Fanta Can" />
                    </Link>
                    
                    <Link exact="true" activeClassName="active"  to="/blue" onClick={start3}>
                        <img src={blueCan} className='can-pad-right-20'  alt="Blue Fanta Can" />
                    </Link>

                    <Link exact="true" activeClassName="active"  to="/orange" onClick={start1}>
                        <img src={orangeCan} className='can-pad-right-20'  alt="Orange Fanta Can" />
                    </Link>

                    <Link exact="true" activeClassName="active"  to="/yellow" onClick={start2}>
                        <img src={yellowCan}  alt="Yellow Fanta Can" />
                    </Link>
                </nav>
            </div>
    )
}


export default Navs