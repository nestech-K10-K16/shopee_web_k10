import React from 'react'
import { IC_cart, IC_search, IC_user, IMG_logo } from "../../assets";
import AppButton from "../../components/Appbutton";
import { BUTTON_TYPE } from "../../constants/common";
import { NavLink, Link } from "react-router-dom";
import { PATHNAME_LIST } from '../../router/router';
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
                    <NavLink to={PATHNAME_LIST.SHOP} className="text-default text-font-family_default text-color_black">
                        Shop
                    </NavLink>
                    <NavLink to={PATHNAME_LIST.BLOG} className="text-default text-font-family_default text-color_black">
                        Blog
                    </NavLink>
                    <NavLink to={PATHNAME_LIST.OUR_STORY} className="text-default text-font-family_default text-color_black">
                        Our Story
                    </NavLink>
                </div>
                <div
                    className="
            container-home--header__navigation-child
            container-home--header__navigation-child2
            "
                >
                    <NavLink to={PATHNAME_LIST.SEARCH}>
                        <AppButton type={BUTTON_TYPE.ICON} path={IC_search} />
                    </NavLink>
                    <NavLink to={PATHNAME_LIST.CART}>
                        <AppButton type={BUTTON_TYPE.ICON} path={IC_cart} />
                    </NavLink>
                    <NavLink to={PATHNAME_LIST.USER}>
                        <AppButton type={BUTTON_TYPE.ICON} path={IC_user} />
                    </NavLink>

                </div>
            </div>
        </div>
    )
}

export default Navigation