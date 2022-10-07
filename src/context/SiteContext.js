import { createContext, useContext } from "react";
import { useState,useEffect } from "react";
const Context = createContext();

const Provider = ({ children }) => {


    const [recipes, setRecipes] = useState()
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://www.alerjify.com/api/recipes")
            if (response.status === 200) {
                const data = await response.json()
                setRecipes(data)
            } else {
                console.log('Hata', response.statusText)
            }}
            
        fetchData()
    }, [])
    

    const data = {
        recipes,
        setRecipes
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>

    )
}

export const useSite = () => useContext(Context)

export default Provider
