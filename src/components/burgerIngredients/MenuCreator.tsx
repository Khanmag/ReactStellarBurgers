import React from "react";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './MenuCreator.module.css'
import PropTypes from "prop-types";
import propTypesObj from "../../utils/propTypesObj";

const MenuCreator = ({data, title, clickFunc, recipe}: { data: any, title: string, clickFunc: any, recipe: any }) => {
    return (
        <div className={'mb-10'}>
            <p className={'text text_type_main-medium'}>{title}</p>
            <div className={style.menuBox}>
                {data.map((item: any) => (
                    <div key={item._id} className={`${style.itemBox} ml-4 mt-6`}>
                        {CreateMenuElement(item, clickFunc, recipe)}
                    </div>))}
            </div>
        </div>
    )
}

const menuItemPropTypes = PropTypes.shape({...propTypesObj});
MenuCreator.propTypes = {
    data: PropTypes.arrayOf(menuItemPropTypes.isRequired).isRequired,
    title: PropTypes.string.isRequired,
    clickFunc: PropTypes.func.isRequired,
    recipe: PropTypes.arrayOf(menuItemPropTypes.isRequired).isRequired,
}

export default MenuCreator


const CreateMenuElement = (item: any, clickFunc: any, recipe: any) => {
    const count = recipe.filter((el: any) => el._id === item._id).length
    return (
        <>
            <img src={item.image} className={'mr-4 ml-4'} onClick={() => {
                clickFunc(item)
            }} alt={'картинка игредиента'}/>
            <div className={`${style.priseBox} mt-1 mb-1`}>
                <p className={'text text_type_digits-default pr-2'}>{item.price}</p>
                <CurrencyIcon type="primary"/>
            </div>
            <p className={`${style.description} text text_type_main-default`}>{item.name}</p>
            {count ? <Counter count={count} size="default"/> : null}
        </>
    )
}

CreateMenuElement.propTypes = {
    item: menuItemPropTypes.isRequired,
    clickFunc: PropTypes.func.isRequired,
    recipe: PropTypes.arrayOf(menuItemPropTypes.isRequired).isRequired
}