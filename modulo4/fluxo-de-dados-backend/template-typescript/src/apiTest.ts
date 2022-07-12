import axios from "axios"

// //1
axios.get("http://localhost:3003/test")
    .then((res) => {
        console.log(res.data)
    })