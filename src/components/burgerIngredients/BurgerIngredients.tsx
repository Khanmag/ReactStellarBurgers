import React from "react";
import style from './BurgerIngredients.module.css'
import MyTab from "./MyTab";
import MenuCreator from "./MenuCreator";
import PropTypes from "prop-types";
import propTypesObj from "../../utils/propTypesObj";


const BurgerIngredients = ({data, openIngredientModal, recipe}: { data: any, openIngredientModal: any, recipe: any}) => {

    const bun = data.filter((item: { type: string; }) => item.type === 'bun')
    const main = data.filter((item: { type: string; }) => item.type === 'main')
    const sauce = data.filter((item: { type: string; }) => item.type === 'sauce')

    return (
        <div className={`${style.container} pb-10`}>
            <h1 className={`${style.title} mt-10 mb-5 text text_type_main-large`}>Соберите бургер</h1>
            <MyTab/>
            <div className={`${style.scrolling} mt-10`}>
                <MenuCreator data={bun} title={'Булки'} clickFunc={openIngredientModal} recipe={recipe}/>
                <MenuCreator data={sauce} title={'Соусы'} clickFunc={openIngredientModal} recipe={recipe}/>
                <MenuCreator data={main} title={'Начинки'} clickFunc={openIngredientModal} recipe={recipe}/>
            </div>
        </div>
    )

}
const menuItemPropTypes = PropTypes.shape({...propTypesObj});
BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(menuItemPropTypes.isRequired).isRequired,
    openIngredientModal: PropTypes.func.isRequired,
    recipe: PropTypes.arrayOf(menuItemPropTypes.isRequired).isRequired
}
export default BurgerIngredients
















