import React from 'react';
import List from "../../images/List";

const Template = (props) => {

    const selectedTemplate = {
        id: props.template.id,
        name: props.template.name,
        template: props.template.template,
        creationDate: props.template.creationDate,
    }

    return (
        <button className="template" onClick={() => {props.selectTemplate(selectedTemplate)}}>
            <div className="template__title-wrap">
                <List className="template__icon" />
                <h3 className="template__title">{props.template.name}</h3>
            </div>
            <span className="template__creation-date">{props.template.creationDate}</span>
            <span className="template__delete-button" onClick={() => {props.handleShowOrHideConfirmPopup(selectedTemplate)}}>Delete</span>
        </button>
    )
}

export default Template;