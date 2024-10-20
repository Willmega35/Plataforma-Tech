import React from "react";

import GitHub from "../assets/github.svg"
import Google from "../assets/icons8-google.svg"

type buttonType = {
  acess: string,
  children: React.ReactNode,
  typeAcess: string
}

export default function ButtonLogin ({ acess, children, typeAcess } : buttonType){
  
  const styleAnchor: React.CSSProperties = {
    width: "100%",
    padding: ".5em 1em",
    borderRadius: "25px",
    backgroundColor: typeAcess == "Google"? "var(--color1)" : "var(--color2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    textDecoration: "none",
    font: "500 1em var(--font2)",
    color: "#fff",
  }
  return(
    <a href={acess} style={styleAnchor}>
      <img src={ typeAcess == "Google" ? Google : GitHub } width={24} alt="Logo da plataforma descrita" />
      { children }
    </a>
  )
}