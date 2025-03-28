import { useEffect, useState } from 'react'


const useLocalStorageName = (key) => {
    const [ values, setValues ] = useState('')

    // ! set item func
    const setItems = (value) => {
        localStorage.setItem(key, JSON.stringify(value));
    }  
    // ! get item func
    useEffect(() => {
        const item = JSON.parse(localStorage.getItem(key));
        setValues(item)
    }, [key])

    // ! remove item func
    const removeItems = () => {
        localStorage.removeItem(key);
        setValues('')
    }

    return [ setItems, removeItems, values ]
}
export default useLocalStorageName
