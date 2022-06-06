import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Adm from "../Pages/Adm";
import Err from "../Pages/Err";
import Detalhes from "../Pages/Detalhes";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>} />
                <Route path={"/admin"} element={<Adm/>} />
                <Route path={"/admin/:viagemId/details"} element={<Detalhes/>} />
                <Route path={"*"} element={<Err/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;