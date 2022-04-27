import {useState, useEffect} from "react";
import BurgerIngredients from "../burgerIngredients/BurgerIngredients";
import BurgerConstructor from "../burgerConstructor/BurgerConstructor";
import PropTypes from "prop-types";
import propTypesObj from "../../utils/propTypesObj";
import OrderDetails from "../modal/OrderDetails";
import IngredientDetails from "../modal/IngredientDetails";
import style from './App.module.css'
import Modal from '../modal/Modal'
import {BurgerConstructorContext} from "../../utils/BurgerConstructorContext";

const MainContainer = ({data}) => {
    const [state, setState] = useState({
        showOrderModal: false,
        showIngredientModal: false,
        currentItemForModal: data[5],
        recipe: [data[5], data[4], data[7], data[8], data[8]],
        bun: data[0],
        orderNum: null,
    })


    const openIngredientModal = (item) => {
        setState({...state, showIngredientModal: true, currentItemForModal: item})
    }
    const closeIngredientModal = () => {
        setState({...state, showIngredientModal: !state.showIngredientModal})
    }
    const toggleOrderModal = () => {
        if (!state.showOrderModal) {
            const postBody = state.recipe.map(item => item._id)
            fetch('https://norma.nomoreparties.space/api/orders', {
                method: 'POST',
                headers: {'Content-Type': 'application/json;charset=utf-8'},
                body: JSON.stringify({'ingredients': postBody})
            })
                .then(response => {
                    if (response.ok) return response.json()
                    setState({...state, showOrderModal: !state.showOrderModal, orderNum: null})
                    return Promise.reject(response.status)
                })
                .then(result => {
                    setState({...state, showOrderModal: !state.showOrderModal, orderNum: result.order.number})
                })
                .catch(err => {
                    console.log(err)
                })
        } else setState({...state, showOrderModal: !state.showOrderModal})
    }


    return (<main className={style.mainContainer}>

            <BurgerIngredients data={data} openIngredientModal={openIngredientModal} recipe={state.recipe}/>

            {state.showIngredientModal ? <Modal closeModal={closeIngredientModal} title={'Детали ингредиента'}>
                <IngredientDetails item={state.currentItemForModal}/></Modal> : null}

            <BurgerConstructorContext.Provider value={{recipe: state.recipe, bun: state.bun,
                orderNum: state.orderNum, toggleOrderModal}}>

                {/*<BurgerConstructor recipe={state.recipe} showOrderModal={toggleOrderModal} handleClose={() => {}}/>*/}
                <BurgerConstructor/>

                {state.showOrderModal ? <Modal closeModal={toggleOrderModal} title={''}>
                    <OrderDetails/></Modal> : null}

            </BurgerConstructorContext.Provider>
        </main>)
}

MainContainer.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape(propTypesObj).isRequired).isRequired,
}

export default MainContainer

