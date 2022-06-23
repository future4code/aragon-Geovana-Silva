import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { irParaFeed } from "../routes/coordinator"

export const useDesproteger = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            irParaFeed(navigate)
        }
    }, [])
}
export default useDesproteger