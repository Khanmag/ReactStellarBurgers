import {BurgerIcon, ListIcon, ProfileIcon, Logo} from '@ya.praktikum/react-developer-burger-ui-components'
import React from "react";
import style from './AppHeader.module.css'


const AppHeader = () => {
    return (
        <header>
            <nav>
                <div className={`${style.constructor}  mt-4 mb-4 mr-2`}>
                    <div className={'ml-5 mr-2 mt-4 mb-4'}>
                        <BurgerIcon type="primary"/>
                    </div>
                    <p className={'mr-5 text text_type_main-default'}>Конструктор</p>
                </div>
                <div className={`${style.constructor} mt-4 mb-4 mr-2`}>
                    <div className={'ml-5 mr-2 mt-4 mb-4'}>
                        <ListIcon type="primary"/>
                    </div>
                    <p className={'mr-5 text text_type_main-default'}>Лента заказов</p>
                </div>
                <div className={`${style.logo} ${style.constructor}`}>
                    <Logo/>
                </div>
                <div className={`${style.constructor} ${style.left} mt-4 mb-4 mr-2`}>
                    <div className={'ml-5 mr-2 mt-4 mb-4'}>
                        <ProfileIcon type="primary"/>
                    </div>
                    <p className={'pr-5 text text_type_main-default'}>Личный кабинет</p>
                </div>
            </nav>
        </header>
    )
}
export default AppHeader