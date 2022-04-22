import {useState, useEffect} from "react";
import BurgerIngredients from "../burgerIngredients/BurgerIngredients";
import BurgerConstructor from "../burgerConstructor/BurgerConstructor";
import PropTypes from "prop-types";
import propTypesObj from "../../utils/propTypesObj";
import OrderDetails from "../modal/OrderDetails";
import IngredientDetails from "../modal/IngredientDetails";

const MainContainer = ({data}:{data:any}) => {
    // console.log(data)
    const [state, setState] = useState({
        showOrderModal: false,
        showIngredientModal: false,
        currentItemForModal: data[5],
        recipe: [data[0], data[5], data[4], data[7], data[8], data[8]],
        totalPrice: 2510,
    })


    function openIngredientModal(item:object) {
        setState({...state, showIngredientModal: true, currentItemForModal: item})
    }

    const toggleOrderModal = () => {
        setState({...state, showOrderModal: !state.showOrderModal})
    }
    const toggleIngredientModal = () => {
        setState({...state, showIngredientModal: !state.showIngredientModal})
    }

    useEffect(() => {
    }, [])

    return (
        <main style={{
            display: 'flex', width: '100%', gap: '40px',
            flexDirection: 'row', alignItems: 'start', justifyContent: 'center',
        }}>

            <BurgerIngredients data={data} openIngredientModal={openIngredientModal} recipe={state.recipe}/>

            <BurgerConstructor recipe={state.recipe} showOrderModal={toggleOrderModal} handleClose={() => {}}/>

            {state.showOrderModal ? <OrderDetails closeModal={toggleOrderModal}/> : null}
            {state.showIngredientModal ? <IngredientDetails item={state.currentItemForModal}
                                                            closeModal={toggleIngredientModal}/> : null}
        </main>
    )
}

MainContainer.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape(propTypesObj)),
}

export default MainContainer

