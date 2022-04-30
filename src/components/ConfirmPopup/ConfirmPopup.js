import React from 'react';
import CloseButton from "../../images/CloseButton";
import classNames from "classnames";

const ConfirmPopup = (props) => {

    const modalClassNames = classNames('modal', {
        'modal--visible' : props.confirmPopupState.isShowConfirmPopup
    });

    return (
        <div className={modalClassNames}>
            <div className="modal__form" onSubmit={props.addListToTemplates}>
                <CloseButton className="modal__close-button" onClick={props.handleShowOrHideConfirmPopup} />
                <h3 className="modal__title">Are you sure you want to delete this template?</h3>
                <div className="modal__buttons-wrap">
                    <button className="button button--cancel" onClick={props.handleShowOrHideConfirmPopup}>Cancel</button>
                    <button className="button" onClick={() => {props.removeTemplate(props.confirmPopupState.template.id)}}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmPopup;