import React from 'react';
// import data from "../../utils/data";
import style from './App.module.css';
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components'
import AppHeader from "../appHeader/AppHeader";
import MainContainer from "./MainContainer";
import PropTypes from "prop-types";

const mainURL = 'https://norma.nomoreparties.space/api/ingredients'



const App = () => {
    const [state, setState] = React.useState({
        isLoading: true,
        hasError: false,
        errorName: '',
        data: [],
    });

    React.useEffect(() => {
        setState({...state, isLoading: true});

        const getIngredientData = async () => {
            const res = await fetch(mainURL);
            if (res.ok) {
                const data = await res.json();
                setState({...state, isLoading: false, hasError: false, data: data.data})
            }
        }
        getIngredientData().catch(err => {
            setState({...state, errorName: err, hasError: true, isLoading: false})
        });
    }, [])

    if (state.isLoading) return <p>Загрузка...</p>
    else if (state.hasError) return <p>Произошла ошибка {state.errorName}, пожалуйста попробуйте снова</p>

    return (
        <>
            <AppHeader/>
            <MainContainer data={state.data}/>
        </>
    )
}


export default App;
