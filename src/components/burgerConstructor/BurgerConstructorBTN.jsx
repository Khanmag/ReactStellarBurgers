import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import PropTypes from "prop-types";


const BurgerConstructorBTN = ({onClickFunc}) => {
    return (
        <div className={'ml-10'}>
            <Button onClick={onClickFunc} type="primary" size="large">
                Оформить заказ
            </Button>
        </div>
    )
}
BurgerConstructorBTN.protoTypes = {
    showOrderModal: PropTypes.func
}
export default BurgerConstructorBTN