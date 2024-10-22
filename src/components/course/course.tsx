import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./course.css"
export function Course({title, progress, color, image}: {title: string, progress: number, image: string, color: string}) {
  return (
    <>
      <div className="course-container" data-color={color}>
        <div className="course-top">
          <img src={image} alt="" />
          <FontAwesomeIcon icon={faChevronDown} />
        </div> 
        <h1>{title}</h1>
        <div className="course-progress">
          <h1>Progresso:</h1>
          <h1 id="progress">{progress}%</h1>
        </div>
      </div>
    </>
  )
}