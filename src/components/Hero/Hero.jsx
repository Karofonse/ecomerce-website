import React from 'react'
import css from "./Hero.module.css"
import {RiShoppingBagFill} from "react-icons/ri"
import {BsArrowRight} from "react-icons/bs"
import HeroImg from "../../assets/hero.png"
import { motion } from "framer-motion"

const Hero = () => {
    const transition = {duration: 3,type:"spring"}
    return (
        <div className={css.container}>

            {/* lado izquierdo */}
            <div className={css.h_sides}>
                <span className={css.text1}>crema protectora para tu piel</span>

                <div className={css.text2}>
                    <span>Trendy Collection</span>
                    <span>
                        {""}
                        Esta colección está inspirada en los
                        canarios amarillos, los cuales desvordan 
                        hermosura, cuidado, sobre todo belleza.</span>
                </div>
            </div>

            {/* Parte de la mitad imagen */}
            <div className={css.wrapper}>
                {/* Circulo azul */}
                <motion.div
                initial={{bottom:"2rem"}}
                whileInView={{bottom:"0rem"}}
                className={css.blueCircle}
                transition={transition}></motion.div>

                {/* Imagen de la chica */}
                <motion.img
                transition={transition}
                initial={{bottom:"-2rem"}}
                whileInView={{bottom:"0rem"}}
                src={HeroImg} alt="Hero.ima" width={600} />

                {/* Card */}
                <motion.div
                transition={transition}
                initial={{right:"4%"}}
                whileInView={{right:"2%"}}
                className={css.cart2}>
                    <RiShoppingBagFill/>

                    <div className={css.singup}>
                        <span>Las mejores ofertas de inicio</span>
                        <div>
                            <BsArrowRight/>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Parte  derecha*/}
            <div className={css.h_sides}>
                <div className={css.traffic}>
                    <span>1.5M</span>
                    <span>Tráfico Mensual</span>
                </div>
                <div className={css.customers}>
                    <span>100k</span>
                    <span>Clientes Felices</span>

                </div>
            </div>
        </div>
    )
}

export default Hero