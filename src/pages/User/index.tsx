import { Course } from "../../components/course/course";
import { Header } from "../../components/header/header";

// Import Image
import cursoIngles from "../../assets/curso-ingles.svg"
import cursoJs from "../../assets/curso-Js.svg"
import cursoHtmlCss from "../../assets/curso-html&css.svg"
import user1 from "../../assets/user-01.svg"
import user2 from "../../assets/user-02.png"

import "./style.css"
import Blogs from "../../components/blog";
export default function Usuario (){
  // const user = useIContextUser();
  
  return(
    <>
      <div className="container">
        <Header></Header>
        <div className="home-grid">
          <div className="courses-container">
            <h2 className="couses-container__title">Continue suas aulas</h2>
            <Course title="Curso de Ingles" progress={41} color={"blue"} image={cursoIngles}/>
            <Course title="Curso de HTML e CSS" progress={41} color={"blue"} image={cursoHtmlCss}/>
            <Course title="Curso de JS" progress={41} color={"blue"} image={cursoJs}/>
          </div>
          <div className="blog-container">
          <h3 className="blog-container__title">Blogs</h3>
            <Blogs title="Lua - Para quer serve e o q..." description="Loren epson not epit..." duration="3 messes" img={user1} type="Programação"/>
            <Blogs title="Frameworks mais para d..." description="Loren epson not epit..." duration="6 messes" img={user2} type="Programação"/>
          </div>
        </div>
      </div>
    </>
  )
}