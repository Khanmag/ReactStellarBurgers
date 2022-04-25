import {ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './BurgerConstructor.module.css'
import PropTypes from "prop-types";
import propTypesObj from "../../utils/propTypesObj";
import React from "react";
import BurgerConstructorBTN from "./BurgerConstructorBTN";


const BurgerConstructor = ({recipe, showOrderModal, handleClose}
                               :{recipe: any, showOrderModal: any, handleClose: any}) => {

    const bun = recipe.find((item:any) => item.type === 'bun')
    const ingredients = recipe.filter((item:any) => item.type !== 'bun')
    const totalPrice = recipe.map((i:any) => i.price).reduce((a:number, b:number) => a+b)
    return (
        <div className={`${style.mainContainer}`}>
            <div className={`${style.ingredientCont} mt-25 ml-4 mr-4`}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${bun.name} (верх)`}
                    price={bun.price}
                    thumbnail={bun.image}
                />
            </div>

            <div className={style.scrolling}>
                {ingredients.map((item:any, index:any) => (
                    <div key={item._id + index} className={`${style.recipeList} ml-4 mr-2 `}>
                        <div className={style.iconContainer}>
                            <DragIcon type="primary"/>
                        </div>
                        <ConstructorElement
                            isLocked={false}
                            text={item.name}
                            price={item.price}
                            thumbnail={item.image}
                            handleClose={() => handleClose(item)}
                        />
                    </div>
                ))}
            </div>

            <div className={`${style.ingredientCont} ml-4 mr-4`}>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${bun.name} (низ)`}
                    price={bun.price}
                    thumbnail={bun.image}
                />
            </div>

            <div className={`${style.rowBox} ml-4 mr-4 mt-6`}>
                <div className={`${style.totalPrice}`}>
                    <p className={'text text_type_digits-medium'}>{totalPrice}</p>
                    <div className={'pl-1'}>
                        <CurrencyIcon type="primary"/>
                    </div>
                </div>

                <BurgerConstructorBTN onClickFunc={showOrderModal}/>
            </div>

        </div>
    )
}

BurgerConstructor.propTypes = {
    recipe: PropTypes.arrayOf(PropTypes.shape(propTypesObj).isRequired).isRequired,
    showOrderModal: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
}

export default BurgerConstructor