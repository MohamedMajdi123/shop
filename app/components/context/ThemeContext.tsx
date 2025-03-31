'use client'

import { createContext, ReactNode, useState} from "react"

type ThemeType = [string, VoidFunction];
type ChildernType = {
    children: ReactNode
}

export const TheemContext = createContext<undefined | ThemeType>(undefined);

export const ThemeProvider = ({children}: ChildernType) => {
    const [mode, setMode] = useState('dark');

    const toggle = () => {
        setMode(prev => (prev === 'dark' ? 'light' : 'dark'))
    }
    // useEffect(() =>{
    //     // console.log(mode)
    // },[mode])
    return(
        <TheemContext.Provider value={[mode, toggle]}>
            <div className={`theme ${mode}`}>
                {children}
            </div>
        </TheemContext.Provider>
    )
}


