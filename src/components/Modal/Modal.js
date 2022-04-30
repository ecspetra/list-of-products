import React from 'react';
import CloseButton from "../../images/CloseButton";
import classNames from "classnames";
import Error from "../Error/Error";

const Modal = (props) => {

    const modalClassNames = classNames('modal', {
        'modal--visible' : props.modalState.isShowModal
    });

    return (
        <div className={modalClassNames}>
            <form className="modal__form" onSubmit={props.addListToTemplates}>
                <CloseButton className="modal__close-button" onClick={props.handleShowOrHideModal} />
                <h3 className="modal__title">Enter template name</h3>
                <input className="input-field" type="text" onChange={props.handleTemplateName}/>
                {
                    props.errorValue.templateFormError.length ? <Error errorValue={props.errorValue}>{props.errorValue.templateFormError}</Error> : null
                }
                <button className="button" type="submit">Add</button>
            </form>
        </div>
    )
}

export default Modal;