
import LogoSneaker from "@/assets/images/Logo.svg";
import AvatarImage from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "../icons/CloseIcon";
import { useState } from "react";
import NavLink from "./Navlink";

import { Link } from "react-router-dom"
const MainHeader = () => { 
    const [navClass,setNavClass] =useState('hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0 py-4 md:py-0')
    const handleOpenMenu = () =>{
        setNavClass("absolute top-0 left-0 flex h-full w-4/5 flex-col gap-y-[21px]  bg-white p-8 font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0 z-10 ")
    }
    const handleCloseMenu = () =>{
        setNavClass("hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0")
    }
    return(
        <>
            <header className="container p-4  md:p-0 flex mx-auto items-center  gap-8">
            <button className="md:hidden" onClick={handleOpenMenu}>
                <MenuIcon />
            </button>


            <img
                src={LogoSneaker}
                alt="Logo Sneaker"
                className="mr-auto md:mr-auto mb-1" 
            />
                
            <nav className={navClass}>
                <button
                    className="mb-3 md:hidden"
                    onClick={handleCloseMenu}>
                    <CloseIcon />
                </button>

                <NavLink texto="Inicio" link="/"/>
                <NavLink texto="Pasteles" link="/Pasteles"/>
                <NavLink texto="Dulces" link="/Dulces"/>
                <NavLink texto="Nosotros" link="/Us"/>
                <NavLink texto="Contacto" link="/Contacto" />

            </nav>
            <div className="flex gap-4">
                <button>
                    <CartIcon />
                </button>
                <img src={AvatarImage} alt="" className="w-10" />
            </div>
        </header>
        <span className="container mc-auto hidden h-[1px] w-full bg-gray-500 md:block"></span>
        </>
    )
}

export default MainHeader