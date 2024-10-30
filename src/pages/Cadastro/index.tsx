// Importação das Imagens para a tela
import FormsRegister from "../../components/forms-Register/formsRegister";
import ButtonLogin from "../../components/login-component";

import ImageApresent from "../../assets/Imagem de Apresentação.png";
import LogoTech from "../../assets/Logo Tech Academy.svg";
import "./style.css";

export default function Cadastro (){
  
  const title = document.getElementById("title");
  title!.innerText = "Cadastrar";
  return(
    // Containner com principal para o cadastro
    <div className="signin-container">
      <div className="signin-presentation">
        <h1>Invista no Futuru de Grandes Ideias</h1>
        <img src={ImageApresent} alt="Multiplas imagem de pessoas mechendo no computador"/>
      </div>

      <div className="signin-form">
        <img src={LogoTech} alt="Logo da Tech Acadamy" width={300}/>
        <h2>Cadastar</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo earum assumenda?</p>
        <FormsRegister />

        <div>ou</div>
        <ButtonLogin typeAcess="Google" acess="#">Cadastrar pelo Google</ButtonLogin>
        <ButtonLogin typeAcess="GitHub" acess="#">Cadastrar pelo GitHub</ButtonLogin>
        <p>Ja possui um login? <a href={"/login"}>Login</a></p>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur soluta enim, omnis recusandae, in sapiente non quasi obcaecati!</p>

      </div>
    </div>
  )
}