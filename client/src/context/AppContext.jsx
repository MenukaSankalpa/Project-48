import { createContext, useState } from "react";

export const AppContext = createContext()

export const AppContextProvider = (props) => {

    const [searchFilter,setSearchFilter] = useState({
        title:'',
        location:''
    })

    const [idSearched,setIdSearched] = useState(false)

    const value = {
        setSearchFilter,searchFilter,
        idSearched,setIdSearched,
    }
    return (<AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>)
}