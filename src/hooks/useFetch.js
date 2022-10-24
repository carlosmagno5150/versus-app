import { useState, useEffect } from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    
    const [config,setConfig] = useState(null);
    const [method, setMethod] =  useState(null);
    

    useEffect(() => { 
        const fetchData = async () => {
            const res = await fetch(url);
            const json = await res.json();
            setData(json);
        }
        
        fetchData();

    }, [url]);

    return { data }
}