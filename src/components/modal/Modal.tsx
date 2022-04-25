import React from "react";
import style from "./Modal.module.css";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import ModalOverlay from "./ModalOverlay";

const Modal = (props: {
    closeModal: any;
    title: string;
    children: boolean | React.ReactChild | React.ReactFragment
        | React.ReactPortal | null | undefined;
}) => {
    return (
        <ModalOverlay closeModal={props.closeModal}>
            <div className={style.container}>
                <div className={`${style.titleBlock}`}>
                    <p className={`text text_type_main-large`}>{props.title}</p>
                    <CloseIcon onClick={props.closeModal} type="primary"/>
                </div>
                {props.children}
            </div>
        </ModalOverlay>
    )
}


export default Modal

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
}