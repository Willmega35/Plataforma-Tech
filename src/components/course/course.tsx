import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./course.css"
import styled from "styled-components";
export function Course({title, progress, color, image}: {title: string, progress: number, image: string, color: string}) {
  const Progress = styled.div`
    position: relative;
    width: 100%;
    height: 0.5rem;
    background-color: #afafaf4b;
    margin: auto 0;
    border-radius: 1rem;
    &::after {
      position: absolute;
      top: -0.25rem;
      content: "";
      width: ${progress}%;
      height: 200%;
      border-radius: 1rem;
      background-color: white;
    }
  ` 
  return (
    <>
      <div className="course-container" data-color={color}>
        <div className="course-top">
          <img src={image} alt="" />
          <FontAwesomeIcon icon={faChevronDown} />
        </div> 
        <h1>{title}</h1>
        <Progress />
        <div className="course-progress">
          <h1>Progresso:</h1>
          <h1>{progress}%</h1>
        </div>
      </div>
    </>
  )
}