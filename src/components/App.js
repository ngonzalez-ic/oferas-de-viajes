import React, { useReducer } from 'react'
import Head from './Head'
import Banner from './Banner'
import ContainerCards from './ContainerCard'
import { Context, initialState, reducer } from '../store/index'

const App = () => {
    const [store, dispatch] = useReducer(reducer, initialState)
    return <Context.Provider value={{ store, dispatch }}>
        <div>
            <Head />
            <Banner />
            <ContainerCards />
        </div>
    </Context.Provider>
}

export default App
