import React from "react";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import st from './MenuCreator.module.css'

const MenuCreator = (props: any) => {
    // const [current, setCurrent] = React.useState('one')
    return (
        <div className={'mb-10'}>
            <p className={'text text_type_main-medium'}>{props.title}</p>
            <div className={st.menuBox}>
                {props.arr.map((item: any) => CreateMenuElement(item, props.clickFunc))}
            </div>
        </div>
    )
}
export default MenuCreator

const CreateMenuElement = (item: any, clickFunc:any) => {
    return (
        <div key={item._id} className={`${st.itemBox} ml-4 mt-6`}>
            <img src={item.image} className={'mr-4 ml-4'} onClick={() => {
                clickFunc(item)
            }}/>
            <div className={`${st.priseBox} mt-1 mb-1`}>
                <p className={'text text_type_digits-default pr-2'}>{item.price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className={`${st.description} text text_type_main-default`}>{item.name}</p>
            {(item.count) ? <Counter count={item.count} size="default" /> : null}

        </div>
    )
}