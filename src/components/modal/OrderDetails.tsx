import style from "./Modal.module.css";
import imageIcon from "../../image/graphics.svg";
import React from "react";
import ModalOverlay from "./ModalOverlay";
import Modal from "./Modal";
import PropTypes from "prop-types";

const OrderDetails  = (props: { closeModal: any; }) => {
    return <ModalOverlay closeModal={props.closeModal}>
        <Modal closeModal={props.closeModal} title={''}>
            <p className="mt-30 text text_type_digits-large">034536</p>
            <p className="mt-8 text text_type_main-medium">идентефикатор заказа</p>
            <div className={`${style.checkIcon} m-15`}>
                <img src={imageIcon} />
            </div>
            <p className={`${style.smallText} mb-2 text text_type_main-small`}>Ваш заказ начали готовить</p>
            <p className={`${style.smallText} mb-30 text text_type_main-small text_color_inactive`}
            >Дождитесь готовности на орбитальной станции</p>
        </Modal>

        </ModalOverlay>
}
export default OrderDetails

OrderDetails.propTypes = {closeModal: PropTypes.func}