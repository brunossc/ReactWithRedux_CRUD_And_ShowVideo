import React from 'react';
import ReactDOM from 'react-dom';


const Modal = props => {
    const modalBody = (
        <div onClick={props.returnEvent} className="ui dimmer modals visible active">
            <div className="ui standart modal visible active" onClick={(ev) => ev.stopPropagation()}>
                <div className="header">
                    <i className="large middle aligned icon warning" />
                    <span>{props.title}</span>
                </div>
                <div className="content">
                    <span>{props.content}</span>
                </div>
                <div className="actions">
                    {props.actions}
                </div>
            </div>
        </div>
    );

    return ReactDOM.createPortal(modalBody,
        document.querySelector("#modal"));
}

export default Modal;
