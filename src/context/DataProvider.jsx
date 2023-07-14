import { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider =({children}) => {
    const [html, setHtml] = useState('')
    const [css, setCss] = useState('')
    const [js, setJs] = useState('')

    return (
        <DataContext.Provider
            value = {{
                html,
                setHtml,
                css,
                setCss,
                js,
                setJs
            }}
        >
            {/* passing the home : wrapped elements in the context */}
            {children}  
        </DataContext.Provider>
    )
}

export default DataProvider