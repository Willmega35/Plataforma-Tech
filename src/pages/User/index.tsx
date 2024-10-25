import { Course } from "../../components/course/course";
import { Header } from "../../components/header/header";

// Import Image
import cursoIngles from "../../assets/curso-ingles.svg"
import cursoJs from "../../assets/curso-Js.svg"
import cursoHtmlCss from "../../assets/curso-html&css.svg"
import user1 from "../../assets/user-01.svg"
import user2 from "../../assets/user-02.png"

import "./style.css"
import Blog from "../../components/blog";
export default function Usuario (){
  // const user = useIContextUser();
  
  return(
    <>
      <div className="user-container">
        <Header></Header>
        <div className="home-grid">
          <div className="courses-container">
            <h1>Continue suas aulas</h1>
            <div className="courses">
              <Course title="Curso de Ingles" progress={41} color={"blue"} image={cursoIngles}/>
              <Course title="Curso de HTML e CSS" progress={90} color={"blue"} image={cursoHtmlCss}/>
              <Course title="Curso de JS" progress={71} color={"blue"} image={cursoJs}/>
            </div>
          </div>

          <div className="blog-container">
            <h1>Blogs</h1>
            <div className="blogs">
              <Blog title="Lua - Para quer serve e o q..." description="Loren epson not epit..." duration="3 messes" img={user1} type="Programação"/>
              <Blog title="Frameworks mais para d..." description="Loren epson not epit..." duration="6 messes" img={user2} type="Programação"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}