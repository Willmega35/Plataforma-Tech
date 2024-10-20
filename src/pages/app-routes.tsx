import { Route, Routes } from "react-router-dom";
import Login  from "./Login/index.tsx";
import Cadastro from "./Cadastro/index.tsx";

// Import das variaveis de CSS
import "./style.css"

export function Approutes() {
    return (
        <Routes>
            <Route  path="/" element={<Login />} />
            <Route path="/cadastrar" element={<Cadastro />} />
        </Routes>
    );
}