import React from 'react';
import classNames from "classnames";

const CheckedButton = (props) => {

    const checkedButtonClassNames = classNames('success-button', {
        'success-button--checked' : props.product.checked
    });

    return (
        <button className={checkedButtonClassNames} onClick={props.check}>{props.children}</button>
    )
}

export default CheckedButton;