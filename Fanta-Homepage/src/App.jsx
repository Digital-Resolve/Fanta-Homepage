import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import RedF from './components/RFanta';
import BlueF from './components/BFanta'
import OrangeF from './components/OFanta'
import YellowF from './components/YFanta'
import './App.css'
// import { AnimatePresence } from "framer-motion";

function App() {

  const location = useLocation();

  return (
      <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Layout />} >
            <Route index element={<RedF />} />
            <Route path="blue" element={<BlueF />} />
            <Route path="orange" element={<OrangeF />} />
            <Route path="yellow" element={<YellowF />} />
          </Route>
        </Routes>
  )
}

export default App
