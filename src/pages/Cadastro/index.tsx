// Importação das Imagens para a tela
import FormsRegister from "../../components/forms-Resister/formsRegister";
import ButtonLogin from "../../components/login-component";

import ImageApresent from "../../assets/Imagem de Apresentação.png";
import LogoTech from "../../assets/Logo Tech Academy.svg";
import "./style.css";

export default function Cadastro (){
  
  const title = document.getElementById("title");
  title!.innerText = "Cadastrar";
  return(
    // Containner com principal para o cadastro
    <div className="cadastrar">
      <div className="cadastrar__presentation">
        <h1>Invista no Futuru de Grandes Ideias</h1>
        <img src={ImageApresent} alt="Multiplas imagem de pessoas mechendo no computador" width={650}/>
      </div>
      <div className="cadastrar__forms">
        <img src={LogoTech} alt="Logo da Tech Acadamy" width={350}/>
        <h2 className="cadastrar__forms-title">Cadastar</h2>
        <p className="cadastrar__forms-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo earum assumenda?</p>
        <FormsRegister />

        <div className="cadastrar__forms-separaitor">
          <span>ou</span>
        </div>

        <span className="cadastrar__forms-acess">
          <ButtonLogin typeAcess="Google" acess="#">Cadastrar pelo Google</ButtonLogin>
          <ButtonLogin typeAcess="GitHub" acess="#">Cadastrar pelo GitHub</ButtonLogin>
        </span>
        <span className="cadastrar__forms-login">Ja possui um login? <a href={"/login"}>Login</a></span>

        <p className="cadastrar__forms-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur soluta enim, omnis recusandae, in sapiente non quasi obcaecati!</p>

      </div>
    </div>
  )
}