import React from 'react'
import Logo from '../../assets/logo.png'
import {
    EnvelopeIcon,
    PhoneIcon,
    MapPinIcon,
    UserCircleIcon,
    UsersIcon,
    LinkIcon
} from '@heroicons/react/24/outline'
import css from './Footer.module.css'

const Footer = () => {
return (
    <div className={css.cFooterWrapper}>
        <hr/>

        <div className={css.cFooter}>
            <div className={css.logo}>
                <img src={Logo} alt="" />
                <span>Umma Shop</span>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Contact Us</span>
                    <span className={css.pngLine}>
                        <MapPinIcon className={css.iconn}/>
                        <span>111 North Avenue Orlando, FL 32801</span>  
                    </span>

                    <span className={css.pngLine}>
                        {""}
                        <PhoneIcon className={css.icon}/>
                        <a href="tel:323-435-2336">323-435-2336</a>
                    </span>

                    <span className={css.pngLine}>
                        {""}
                        <EnvelopeIcon className={css.icon}/>
                        <a href="mailto:andreafonseca2001@hotmail.com">andreafonseca2001@hotmail.com</a>
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Company</span>
                    <span className={css.pngLine}>
                        <UsersIcon className={css.icon}/>
                        <a href="/about"><p>About Us</p></a>
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Account</span>
                    <span className={css.pngLine}>
                        <UserCircleIcon className={css.iconn}/>
                        Don't have an account?
                        Sign In
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Resources</span>
                    <span className={css.pngLine}>
                        <LinkIcon className={css.iconnn}/>
                        <p>Safety Privacy &
                            Terms</p>
                    </span>
                </div>
            </div>
        </div>

        < div className={css.copyRight}>
                    <span>Copyright ©2023 By AndreaF, Inc. </span>
                    <span > All rights reserved</span>
            </div>
    </div>
)
}

export default Footer