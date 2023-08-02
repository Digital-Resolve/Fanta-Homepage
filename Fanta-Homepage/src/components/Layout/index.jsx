import './index.css';
import "@fontsource/poppins";
import Top from '../Navbar';
import Cans from '../Nav-Can'
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="top">
            <Top />
            <Cans />
            <Outlet/>
        </div>   
    )
}

export default Layout