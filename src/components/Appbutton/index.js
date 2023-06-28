import React from 'react';
import { BUTTON_TYPE } from '../../constants/common';

const AppButton = (props) => {
    const { type = BUTTON_TYPE.BTN, children, path, ...rest } = props;

    switch (type) {

        case BUTTON_TYPE.BTN_ICON:
            return <button {...rest}>
                <img src={path} alt='' />
            </button>;

        case BUTTON_TYPE.BTN:
            return <button {...rest}>{children}</button>;
    }

};

export default AppButton;