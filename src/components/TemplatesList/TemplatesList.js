import React from 'react';
import Template from "../Template/Template";

const TemplateList = (props) => {

    return (
        <div className="template-list">
            {
                props.templates.map(
                    (template, index) => (
                        <Template
                            removeTemplate={props.removeTemplate}
                            selectTemplate={props.selectTemplate}
                            templates={props.templates}
                            templateName={props.templateName}
                            key={index}
                            template={template}
                            handleShowOrHideConfirmPopup={props.handleShowOrHideConfirmPopup}
                        />
                    ))
            }
        </div>
    )
}

export default TemplateList;