'use client'
import Link from "next/link";
import useMediaQuery from '@mui/material/useMediaQuery';
import { Close, Dehaze } from "@mui/icons-material";
import { useState } from "react";

const HeaderPage=()=>{
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const isMobileView = useMediaQuery('(max-width:800px)');

    const MenuItems = ({isMobileView=false}) => {
        return <ul>
            {isMobileView ? <li><Close className="menu" onClick={() => setShowMobileMenu(false)} /></li> : null}
            <li><Link href="/" onClick={() => setShowMobileMenu(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setShowMobileMenu(false)}>About</Link></li>
            <li><Link href="/services" onClick={() => setShowMobileMenu(false)}>Services</Link></li>
            <li><Link href="/projects" onClick={() => setShowMobileMenu(false)}>Projects</Link></li>
            <li><Link href="/contact" onClick={() => setShowMobileMenu(false)}>Contact</Link></li>
        </ul>
    }

    return <header>
        <nav>
            <div className="left">
                Shubhi's Portfolio
            </div>
            <div className="right">
                {isMobileView ? (showMobileMenu ? (<MenuItems isMobileView={true}></MenuItems>) : (<Dehaze className="menu" onClick={() => setShowMobileMenu(true)} />)) :
                    (<MenuItems></MenuItems>)}
            </div>
        </nav>
    </header>
}

export default HeaderPage;