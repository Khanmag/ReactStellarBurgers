import React from "react";
import {} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredients from "../burgerIngredients/BurgerIngredients";
import BurgerConstructor from "../burgerConstructor/BurgerConstructor";
import ReactDOM from "react-dom/client";
import Modal from "../modal/OrderingModal";

class MainContainer extends React.Component <any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            showOrderModal: false,
            recept: [this.props.data[5], this.props.data[4], this.props.data[7], this.props.data[8], this.props.data[8]],
            totalPrice: 2510,
            data: this.props.data.map((item:any) => {
                let arr = [this.props.data[5], this.props.data[4], this.props.data[7], this.props.data[8], this.props.data[8]]
                for (let i in arr) {
                    if (arr[i]._id === item._id) return {...item, count: 1}
                }
                return {...item, count: 0}
            }),
            bun: {...this.props.data[0], count: 1},
        }
    }

    addIngredient = (obj:any) => {
        this.setState({...this.state,
            recept: [...this.state.recept, obj],
            data: this.state.data.map((item:any, index:any) => {
                if (item._id === obj._id) {
                    return {...obj, count: this.state.data[index].count + 1}
                }
                return item
            })})
    }
    changeBun = (obj:any) => {
        this.setState({...this.state, bun: obj})
    }
    handleClose = (obj:any) => {
        this.setState({...this.state, recept: this.state.recept.map((item:any) => {
            if (item.name !== obj.name) return item
                return item
            }),
        data: this.state.data.map((item:any, index:any) => {
            if (item._id === obj._id) {
                return {...obj, count: this.state.data[index].count - 1}
            }
            return item
        })})
    }

    toggleOrderModal = () => {
        this.setState({...this.state, showOrderModal: !this.state.showOrderModal})
    }

    componentWillMount() {
        this.addIngredient({...this.state.data[5]})
        this.addIngredient({...this.state.data[4]})
        this.addIngredient({...this.state.data[7]})
        this.addIngredient({...this.state.data[8]})
        this.addIngredient({...this.state.data[8]})
    }
    render() {
        let receptPrice = 0
        this.state.recept.map((item:any) => {
            receptPrice += item.price
        })
        let totalPrice = receptPrice + this.state.bun.price * 2
        return (
            <main style={{display: 'flex',width: '100%', gap: '40px',
                flexDirection: 'row', alignItems: 'start', justifyContent: 'center',}}>

                <BurgerIngredients data={this.state.data} addIngredient={this.addIngredient} changeBun={this.changeBun} />

                <BurgerConstructor recept={this.state.recept} bun={this.state.bun} showOrderModal={this.toggleOrderModal}
                                   totalPrice={totalPrice} handleClose={this.handleClose}/>
                <Modal isOpen={this.state.showOrderModal} closeModal={this.toggleOrderModal}/>
            </main>
        )
    }
}
export default MainContainer

