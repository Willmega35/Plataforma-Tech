// import InputText from "../../components/text-input";
import LogoTech from '../../assets/Logo Tech Academy.svg'
import ImageApresent from '../../assets/Imagem de Apresentação.png'

import FormsLogin from '../../components/forms-logins/forms-login'
import ButtonLogin from '../../components/login-component'

import "./home.css";

export default function Login() {

    const title = document.getElementById('title') as HTMLTitleElement
    title.textContent = 'Login | Tech Academy'
    return (
    <div className="container">
        <div className="container__forms">
            <img src={LogoTech} alt="Logo do Tech Academy" width={400}/>
            <h2 className="container__forms-title">Login</h2>
            <p className="container__forms-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos esse corrupti impedit porro.</p> 
            <FormsLogin />

            <div className="contaner__forms-separaitor">
            <span>ou</span>
            </div>
    
            <span className="contaner__forms_ohter">
                <ButtonLogin acess="#" typeAcess="Google"> Entre com a conta do Google </ButtonLogin>
                <ButtonLogin acess="#" typeAcess="GitHub"> Entre com a conta do GitHub </ButtonLogin>
            </span>

            <span className="container__forms-resister">Não possui uma conta? <a href="/Cadastrar">Cadastre-se</a></span>
            <p className="container__forms-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aperiam suscipit quibusdam, quae dicta debitis!</p>
        </div>

        <div className="constainer__presentation">
            <h1>Invista no Futuru de Grandes Ideias</h1>
            <img src={ImageApresent} alt="Multiplas imagem de pessoas mechendo no computador" width={620}/>
        </div>

    </div>
    );
}

