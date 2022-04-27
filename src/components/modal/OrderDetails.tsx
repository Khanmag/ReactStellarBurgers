import style from "./Modal.module.css";
import imageIcon from "../../image/graphics.svg";

// @ts-ignore
const OrderDetails  = ({orderNum}) => {
    if (!orderNum) {
        return (
            <p className="mt-30 mb-30 text text_type_main-medium">Произошла ошибка, пожалуйста попробуйте еще раз</p>
        )
    }
    return (
        <>
            <p className="mt-30 text text_type_digits-large">{orderNum}</p>
            <p className="mt-8 text text_type_main-medium">идентефикатор заказа</p>
            <div className={`${style.checkIcon} m-15`}>
                <img src={imageIcon} />
            </div>
            <p className={`${style.smallText} mb-2 text text_type_main-small`}>Ваш заказ начали готовить</p>
            <p className={`${style.smallText} mb-30 text text_type_main-small text_color_inactive`}
            >Дождитесь готовности на орбитальной станции</p>
    </>
    )
}
export default OrderDetails

