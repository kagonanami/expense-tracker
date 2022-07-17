import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

const initialSate = {
    transactions: []
}

export const GlobalContext = createContext(initialSate)

//Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialSate)

    //actions
    function deleteTransaction (transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    function addTransaction (id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    return (<GlobalContext.Provider value = {{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
        }}>
        {children}
    </GlobalContext.Provider>)
}