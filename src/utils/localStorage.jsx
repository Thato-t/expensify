import { useEffect, useState } from 'react'


const useLocalStorageName = (key) => {
    const [ values, setValues ] = useState('User')

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
    }

    return [ setItems, removeItems, values ]
}
export default useLocalStorageName
