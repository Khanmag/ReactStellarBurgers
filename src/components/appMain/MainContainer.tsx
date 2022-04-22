import {useState} from "react";
import BurgerIngredients from "../burgerIngredients/BurgerIngredients";
import BurgerConstructor from "../burgerConstructor/BurgerConstructor";
import PropTypes from "prop-types";
import propTypesObj from "../../utils/propTypesObj";
import OrderDetails from "../modal/OrderDetails";
import IngredientDetails from "../modal/IngredientDetails";
import style from './App.module.css'
import Modal from '../modal/Modal'


const MainContainer = ({data}: { data: any }) => {
    const [state, setState] = useState({
        showOrderModal: false,
        showIngredientModal: false,
        currentItemForModal: data[5],
        recipe: [data[0], data[5], data[4], data[7], data[8], data[8]],
        totalPrice: 2510,
    })


    function openIngredientModal(item: object) {
        setState({...state, showIngredientModal: true, currentItemForModal: item})
    }

    const toggleOrderModal = () => {
        setState({...state, showOrderModal: !state.showOrderModal})
    }
    const toggleIngredientModal = () => {
        setState({...state, showIngredientModal: !state.showIngredientModal})
    }

    return (
        <main className={style.mainContainer}>

            <BurgerIngredients data={data} openIngredientModal={openIngredientModal} recipe={state.recipe}/>

            <BurgerConstructor recipe={state.recipe} showOrderModal={toggleOrderModal} handleClose={() => {
            }}/>

            {state.showOrderModal ? <Modal closeModal={toggleOrderModal} title={''}>
                <OrderDetails/></Modal> : null}

            {state.showIngredientModal ? <Modal closeModal={toggleIngredientModal} title={'Детали ингредиента'}>
                <IngredientDetails item={state.currentItemForModal}/></Modal> : null}
        </main>
    )
}

MainContainer.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape(propTypesObj).isRequired).isRequired,
}

export default MainContainer

