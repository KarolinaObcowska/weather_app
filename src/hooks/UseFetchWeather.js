import React, {useState, useEffect} from 'react'

const UseFetchWeather = (initUrl) => {
    const [data, setData] = useState(null)
    const [url, setUrl] = useState(initUrl);
    const [err, setErr] = useState(null)
    const [loading, setLoading] = useState(null)

    useEffect( () => {
        if(!url) return;
        setLoading(true);
        setData(null);
        setErr(null)
        
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setData(data)
            })
            .catch(err => {
                setLoading(false)
                setErr(err)
            })
    }, [url])

    return {data, setUrl, err, loading}
}

export default UseFetchWeather
