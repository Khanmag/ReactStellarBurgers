import ModalOverlay from "./ModalOverlay";
import Modal from "./Modal";
import style from "./Modal.module.css";
import PropTypes from "prop-types";
import propTypesObj from "../../utils/propTypesObj";

const IngredientDetails = (props: {
    item: any;
    closeModal: any;
}) => {
    return <ModalOverlay closeModal={props.closeModal}>
        <Modal closeModal={props.closeModal} title={'Детали ингредиента'}>
            <div className={`mt-1`}/>
            <div className={`${style.imageBlock} mt-25`}>
                <img src={props.item.image_large} alt={'Фото ингредиента'}/>
            </div>

            <p className="mt-4 text text_type_main-medium">{props.item.name}</p>
            <div className={`${style.structureBlock} mt-8 mb-15`}>
                <div>
                    <p className="text text_type_main-default text_color_inactive">Калории, ккал</p>
                    <p className="text text_type_digits-default text_color_inactive">{props.item.calories}</p>
                </div>
                <div>
                    <p className="text text_type_main-default text_color_inactive">Белки, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{props.item.proteins}</p>
                </div>
                <div>
                    <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{props.item.fat}</p>
                </div>
                <div>
                    <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{props.item.carbohydrates}</p>
                </div>
            </div>
        </Modal>
    </ModalOverlay>
}
export default IngredientDetails

IngredientDetails.propTypes = {
    item: PropTypes.shape(propTypesObj).isRequired,
    closeModal: PropTypes.func
}