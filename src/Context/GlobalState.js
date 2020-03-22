import React,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer';
//creating initial state
const initialState={
    transactions:[
        {
            id:1,
            text:"flower",
            amount:"-200"
        },
        {
            id:2,
            text:"revenue",
            amount:"400"
        },
        {
            id:3,
            text:"taxi",
            amount:"-500"
        }
    ]
}
//export dummy data
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState)
    return(
        <GlobalContext.Provider value={{
            transactions:state.transactions
        }}>
            {children}
        </GlobalContext.Provider>
    )

}