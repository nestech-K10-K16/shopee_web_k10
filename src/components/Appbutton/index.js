import React from 'react';
import { BUTTON_TYPE } from '../../constants/common';

const AppButton = (props) => {
    const { type = BUTTON_TYPE.DEFAULT, children, path, onClick, ...rest } = props;

    switch (type) {

        case BUTTON_TYPE.ICON:
            return <button onClick={onClick} {...rest}>
                <img src={path} alt='' />
            </button>;

        case BUTTON_TYPE.DEFAULT:
            return <button {...rest}>{children}</button>;
    }

};

export default AppButton;