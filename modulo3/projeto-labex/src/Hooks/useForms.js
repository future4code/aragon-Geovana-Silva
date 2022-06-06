import { useState } from "react";

const useForms = (initialState) => {
const [form, setForm] = useState(initialState)

const onChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value})
}

const limpar = () => {
    setForm(initialState)
}

return{form, onChange, limpar};
}

export default useForms;