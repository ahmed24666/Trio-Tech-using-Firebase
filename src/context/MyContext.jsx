import React, { useState } from 'react'
import { useContext } from 'react'
import {createContext} from 'react'
import { useTranslation } from 'react-i18next'

const MyContext = createContext({})

const MyContextProvidor = ({children}) => {
    const [lang, setlang] = useState('ar')
    const { t, i18n } = useTranslation();

    return (
        <MyContext.Provider value={{lang, setlang , t, i18n}}>
            {children}
        </MyContext.Provider>
    )
}

export default MyContextProvidor

export const useMyContext=()=>{
    return useContext(MyContext)
}