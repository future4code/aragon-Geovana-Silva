import axios from 'axios'
import { useEffect, useState } from 'react'

export default UseRequestData = (initialState, url) => {
    const [data, setData] = useState(initialState)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
            axios.get(url)
                .then((res) => {
                    setLoading(false)
                    setData(res.data)
                })
                .catch((err) => {

                })
    }, [url])

    return [data, setData, loading]
}