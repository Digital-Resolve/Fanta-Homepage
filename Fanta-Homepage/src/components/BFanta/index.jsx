import './index.css'
import "@fontsource/poppins";
import blueBottom from '../../../../public/images/bg/blue/bottom.png';
import blueLeft from '../../../../public/images/bg/blue/left.png';
import blueRight from '../../../../public/images/bg/blue/right.png';
import blueCenter from '../../../../public/images/bg/blue/center.png';
import blueNav from '../../../../public/images/bg/blue/nav.png';
import blueCan from '../../../../public/images/fanta-blue.png';
import text from '/Explore.png'
import { motion } from 'framer-motion';
const rContent = () => {
    return (
            <motion.div 
            className="pageB"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65 }}
            >
                    <img src={blueNav} alt="" className="nav-img2" />
                    <img src={blueBottom} alt="" className="bg-2" />
                    <img src={blueLeft} alt="" className="bg-left-2" />
                    <img src={blueRight} alt="" className="bg-right-2" />
                    <img src={blueCenter} alt="" className="bg-center-2" />
                    <motion.img src={blueCan} alt="" className="can" initial={{ x: 400, y: -300, rotate: 120 }} animate={{ x: 0, y: 0, rotate: 0 }} exit={{ x: 200, y: 400, rotate: -45 }} transition={{ type: "spring", bounce: 0.4 }} />
                    {/* <h1>EXPLORE THE <br /> FLAVOUR.</h1> */}
                    <img src={text} alt="" className='text' />

                    <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <br /> laboris nisi.</p>

                    <button className="explore">Explore</button>       
            </motion.div>
    )
}
export default rContent