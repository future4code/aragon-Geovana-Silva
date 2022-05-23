import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Adm from "../Pages/Adm";
import Err from "../Pages/Err";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>} />
                <Route path={"/admin"} element={<Adm/>} />
                <Route path={"*"} element={<Err/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;