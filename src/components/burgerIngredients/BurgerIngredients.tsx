import React from "react";
import st from './BurgerIngredients.module.css'
import MyTab from "./MyTab";
import MenuCreator from "./MenuCreator";


class BurgerIngredients extends React.Component <any, any>{
    render() {
        let bun = this.props.data.filter( (item: { type: string; }) => item.type === 'bun')
        let main = this.props.data.filter( (item: { type: string; }) => item.type === 'main')
        let sauce = this.props.data.filter( (item: { type: string; }) => item.type === 'sauce')
        return (
            <div className={`${st.container} pb-10`}>
            <h1 className={`${st.title} mt-10 mb-5 text text_type_main-large`}>Соберите бургер</h1>
            <MyTab/>
                <div className={`${st.scrolling} mt-10`}>
                    <MenuCreator arr={bun} title={'Булки'} clickFunc={this.props.changeBun}/>
                    <MenuCreator arr={sauce} title={'Соусы'} clickFunc={this.props.addIngredient}/>
                    <MenuCreator arr={main} title={'Начинки'} clickFunc={this.props.addIngredient}/>
                </div>
            </div>
        )
    }
}
export default BurgerIngredients
















