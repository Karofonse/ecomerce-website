import React from 'react'
import {useState} from 'react'
import css from "./Header.module.css"
import Logo from "../../assets/logo.png"
import {CgShoppingBag } from "react-icons/cg"
import {GoThreeBars } from "react-icons/go"

const Header = () => {
    const [showMenu, setShowMenu] = useState(true);
    const toggleMenu = () =>{
        setShowMenu((showMenu)=>!showMenu)
    }
    return (
        <div className={css.container}>
            <div className={css.logo}>
                <img src={Logo} alt="logo-imga" />
                <span>Umma Shop</span>
            </div>


            <div className={css.right}>
                <div className={css.bars} onClick={toggleMenu}>
                    <GoThreeBars/>
                </div>
                    <ul className={css.menu} style={{display: showMenu? 'inherit':'none'}}>
                        <li>Colecciones</li>
                        <li>Marcas</li>
                        <li>Nuevo</li>
                        <li>Descuentos</li>
                        <li>ESP</li>
                    </ul> 
                <input type="text" className={css.search} placeholder="Buscar"/>
                <CgShoppingBag className={css.cart}/>
            </div>
        </div>
    )
}

export default Header