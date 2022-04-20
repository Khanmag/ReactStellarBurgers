import React from "react";
import ReactDOM from "react-dom";
import style from './OrderingModal.module.css'
import {CheckMarkIcon, CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import imageIcon from '../../image/graphics.svg'

const Modal = ({isOpen, closeModal}) => {
    if (!isOpen) return null
    return ReactDOM.createPortal(
        <>
            <div className={style.overlay}>
                <div className={style.container}>
                    <p className="mt-30 text text_type_digits-large">034536</p>
                    <p className="mt-8 text text_type_main-medium">идентефикатор заказа</p>
                    <div className={`${style.checkIcon} m-15`}>
                        <img src={imageIcon} />
                    </div>
                    <p className={`${style.smallText} mb-2 text text_type_main-small`}>Ваш заказ начали готовить</p>
                    <p className={`${style.smallText} mb - 30 text text_type_main-small text_color_inactive`}
                    >Дождитесь готовности на орбитальной станции</p>
                    <div className={`${style.closeIcon} mr-10 mt-15`}>
                        <CloseIcon onClick={closeModal} type="primary"/>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById("react-modals")
    );
}
export default Modal