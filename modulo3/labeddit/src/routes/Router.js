import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detalhes from "../pages/detalhes";
import SignUp from "../pages/signup";
import Feed from "../pages/feed";
import Login from "../pages/login";
import Err from "../pages/err";

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}/>
                <Route path={"/signup"} element={<SignUp/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/post/:postId"} element={<Detalhes/>}/>
                <Route path={"*"} element={<Err/>}/>
                <Route path={"/feed"} element={<Feed/>}/>
            </Routes>
        </BrowserRouter>
    )
}