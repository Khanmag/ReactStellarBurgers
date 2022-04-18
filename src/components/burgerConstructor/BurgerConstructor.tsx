import React from "react";
import {ConstructorElement, CurrencyIcon, Button, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import st from './BurgerConstructor.module.css'


class BurgerConstructor extends React.Component <any, any> {
    render() {
        let recept = this.props.recept
        let bun = this.props.bun
        return (
            <div className={`${st.mainContainer}`}>
                <div className={`${st.ingredientCont} mt-25 ml-4 mr-4`}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${bun.name} (верх)`}
                        price={bun.price}
                        thumbnail={bun.image}
                    />
                </div>

                <div className={st.scrolling}>
                    {recept.map((item: any) => (
                        <div className={`${st.receptList} ml-4 mr-2 `}>
                            <div style={{width: '24', height: '24'}}>
                                <DragIcon type="primary"/>
                            </div>
                            <ConstructorElement
                                key={Math.floor(Math.random() * 10000000)}
                                isLocked={false}
                                text={item.name}
                                price={item.price}
                                thumbnail={item.image}
                                handleClose={() => this.props.handleClose(item)}
                            />
                        </div>
                    ))}
                </div>

                <div className={`${st.ingredientCont} ml-4 mr-4`}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${bun.name} (низ)`}
                        price={bun.price}
                        thumbnail={bun.image}
                    />
                </div>

                <div className={`${st.rowBox} ml-4 mr-4 mt-6`}>
                    <div className={`${st.totalPrice}`}>
                        <p className={'text text_type_digits-medium'}>{this.props.totalPrice}</p>
                        <div className={'pl-1'}>
                            <CurrencyIcon type="primary"/>
                        </div>
                    </div>
                    <div className={'ml-10'}>
                        <Button type="primary" size="large">
                            Оформить заказ
                        </Button>
                    </div>
                </div>

            </div>
        )
    }
}

export default BurgerConstructor