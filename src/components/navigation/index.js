import React from 'react'
import { IC_cart, IC_search, IC_user, IMG_logo } from "../../assets";
import AppButton from "../../components/Appbutton";
import { BUTTON_TYPE } from "../../constants/common";
import { NavLink, Link } from "react-router-dom";
import "./style.css"

const Navigation = () => {
    return (
        <div className="container-home__header">
            <Link to={'/'}><img src={IMG_logo} /></Link>
            <div className="container-home--header__navigation-group">
                <div
                    className="
            container-home--header__navigation-child
            container-home--header__navigation-child1
            "
                >
                    <NavLink to={'/shop'} className="text-default text-font-family_default text-color_Black">
                        Shop
                    </NavLink>
                    <NavLink to={'/Blog'} className="text-default text-font-family_default text-color_Black">
                        Blog
                    </NavLink>
                    <NavLink to={'/OurStory'} className="text-default text-font-family_default text-color_Black">
                        Our Story
                    </NavLink>
                </div>
                <div
                    className="
            container-home--header__navigation-child
            container-home--header__navigation-child2
            "
                >
                    <NavLink to={'/search'}>
                        <AppButton type={BUTTON_TYPE.BTN_ICON} path={IC_search} />
                    </NavLink>
                    <NavLink to={'/cart'}>
                        <AppButton type={BUTTON_TYPE.BTN_ICON} path={IC_cart} />
                    </NavLink>
                    <NavLink to={'/user'}>
                        <AppButton type={BUTTON_TYPE.BTN_ICON} path={IC_user} />
                    </NavLink>

                </div>
            </div>
        </div>
    )
}

export default Navigation