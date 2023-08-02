import './index.css'
import "@fontsource/poppins";
import redBG from '../../../../public/images/bg/red/bottom.png';
import redNav from '../../../../public/images/bg/red/nav.png';
import redCan from '../../../../public/images/fanta-red.png';
import text from '/Explore.png'
import { motion } from 'framer-motion';

const rContent = () => {
    return (
        <>
            <motion.div className="page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65 }}
            >
                    <img src={redNav} alt="" className="nav-img" />
                    <img src={redBG} alt="" className="bg-3" />
                    <motion.img src={redCan} alt="" className="can" initial={{ x: 400, y: -300, rotate: 120 }} animate={{ x: 0, y: 0, rotate: 0 }} exit={{ x: 200, y: 400, rotate: -45 }} transition={{ type: "spring", bounce: 0.4 }} />
                    {/* <h1>EXPLORE THE <br /> FLAVOUR.</h1> */}
                    <img src={text} alt="" className='text' />


                    <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <br /> laboris nisi.</p>

                    <button className="explore">Explore</button>
                    
                </motion.div>
        </>
    )
}

export default rContent