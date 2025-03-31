'use client'

import { useContext, useEffect, useRef } from 'react';

import { TheemContext } from '../context/ThemeContext';

function Button() {
    const Theme = useContext(TheemContext);
    const buttonRef = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        if(Theme) {

            if(`${Theme[0]}` == 'dark') {
                if(buttonRef.current){
                    buttonRef.current.classList.remove('light');
                    buttonRef.current.classList.add('dark');
                    console.log(Theme)
                }
            } else {
                if(buttonRef.current) {
                    buttonRef.current.classList.remove('dark');
                    buttonRef.current.classList.add('light');
                    console.log(Theme)
                }
            }
        }
    }, [Theme])
    return(
        <button
        ref={buttonRef}
            onClick={() => console.log("Log Out")}>
            Log Out
        </button>
    )
}
export default Button;