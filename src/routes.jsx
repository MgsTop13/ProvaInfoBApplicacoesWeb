import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/home.jsx'
import Multi from './pages/multi.jsx'

export default function Rotas(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Multi" element={<Multi />} />
        </Routes>
    </BrowserRouter>
    )

}