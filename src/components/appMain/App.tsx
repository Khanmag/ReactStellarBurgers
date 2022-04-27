import React from 'react';
import AppHeader from "../appHeader/AppHeader";
import MainContainer from "./MainContainer";

const mainURL = 'https://norma.nomoreparties.space/api/ingredients'



const App = () => {
    const [state, setState] = React.useState({
        isLoading: true,
        hasError: false,
        data: [],
    });

    React.useEffect(() => {
        setState({...state, isLoading: true});
        fetch(mainURL)
            .then(response => {
                if (response.ok) return response.json()
            })
            .then( data => {
                setState({...state, isLoading: false, hasError: false, data: data.data})
            })
            .catch(err => {
                setState({...state, hasError: true, isLoading: false})
            })
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
