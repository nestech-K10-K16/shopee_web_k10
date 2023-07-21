import React from 'react';
import { BUTTON_TYPE } from '../../constants/common';
import { Link } from 'react-router-dom';

const AppButton = (props) => {
    const { type = BUTTON_TYPE.DEFAULT, children, path, onClick, href, ...rest } = props;

    switch (type) {

        case BUTTON_TYPE.ICON:
            return <button onClick={onClick} {...rest}>
                <img src={path} alt='' />
            </button>;

        case BUTTON_TYPE.DEFAULT:
            return <button onClick={onClick} {...rest}>{children}</button>;

        case BUTTON_TYPE.LINK:
            return <Link to={href}>
                <img src={path} alt='' />
            </Link>
    }

};

export default AppButton;