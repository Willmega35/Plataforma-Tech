// import InputText from "../../components/text-input";
import LogoTech from '../../assets/Logo Tech Academy.svg'
import ImageApresent from '../../assets/Imagem de Apresentação.png'

import FormsLogin from '../../components/forms/FormLogin'
import ButtonLogin from '../../components/login-component'

import "./style.css";

export default function Login() {

    const title = document.getElementById('title') as HTMLTitleElement
    title.textContent = 'Login | Tech Academy'
    return (
    <div className="login-container">
        <div className="login-form">
            <img src={LogoTech} alt="Logo do Tech Academy" width={300}/>
            <h2>Login</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos esse corrupti impedit porro.</p> 
            <FormsLogin />

            <div>ou</div>
    
            <ButtonLogin acess="#" typeAcess="Google"> Entre com a conta do Google </ButtonLogin>
            <ButtonLogin acess="#" typeAcess="GitHub"> Entre com a conta do GitHub </ButtonLogin>
            
            <p>Não possui uma conta? <a href="/Cadastrar">Cadastre-se</a></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aperiam suscipit quibusdam, quae dicta debitis!</p>
        </div>

        <div className="login-presentation">
            <h1>Invista no Futuro de Grandes Ideias</h1>
            <img src={ImageApresent} alt="Multiplas imagem de pessoas mechendo no computador"/>
        </div>

    </div>
    );
}

