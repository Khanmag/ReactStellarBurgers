import React from 'react';
// import data from "../../utils/data";
import './App.css';
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components'
import AppHeader from "../appHeader/AppHeader";
import MainContainer from "./MainContainer";
import PropTypes from "prop-types";

const mainURL = 'https://norma.nomoreparties.space/api/ingredients'



const App = () => {
    const [state, setState] = React.useState({
        isLoading: true,
        hasError: false,
        data: [],
    });

    React.useEffect(() => {
        setState({...state, isLoading: true});

        const getIngredientData = async () => {
            const res = await fetch(mainURL);
            const data = await res.json();
            if (!data.success) {
                setState({...state, isLoading: false, hasError: true})
            } else {
                setState({ ...state, data: data.data, isLoading: false });
            }
        }
        getIngredientData();
    }, [])

    if (state.isLoading) return <p>Загрузка...</p>
    else if (state.hasError) return <p>Произошла ошибка, пожалуйста попробуйте снова</p>

    return (
        <>
            <AppHeader/>
            <MainContainer data={state.data}/>
        </>
    )

}


export default App;
