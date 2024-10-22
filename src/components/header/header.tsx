import "./header.css"
import LogoTech from '../../assets/Logo Tech Academy.svg'
import { useState } from "react";
import UserIcon from "../../assets/user icon.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";


export function Header() {
    const [searchTerm, setSearchTerm] = useState("");
    const onChange = (event) => {
        setSearchTerm(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(searchTerm);
    }
    
    return (
        <>
            <div className="header-container">
                <div className="top-bar">
                    <img className="logo" src={LogoTech} alt="Logo do Tech Academy"/>
                    <form className="search-form" action="" onSubmit={onSubmit}>
                        <input type="search" name="search" id="search" placeholder="Digite aqui..." onChange={onChange} value={searchTerm} />
                    </form>
                    <div className="notification">
                        <FontAwesomeIcon icon={faBell} />
                    </div>
                    <div className="account">
                        <img src={UserIcon} alt="User icon" />
                    </div>
                </div>
                <div className="bottom-bar">
                    <a href="">Home</a>
                    <a href="">Cursos</a>
                    <a href="">Comunidade</a>
                </div>
            </div>
        </>
    )
}