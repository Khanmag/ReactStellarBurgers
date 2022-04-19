import React from 'react';
import data from "../../utils/data";
import './App.css';
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components'
import AppHeader from "../appHeader/AppHeader";
import MainContainer from "./Main-container";

class App extends React.Component <any, any> {
    render() {
        return (
            <>
                <AppHeader/>
                <MainContainer data={data}/>
            </>
        )
    }

}


export default App;
