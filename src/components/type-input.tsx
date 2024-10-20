import React from "react"
import { TypeInput } from "../type/TypeInput"

export default function InputType ({ children, type, placeholder="Você esqueceu o placeholder" } : TypeInput){

  const sizeCamp = type === "date" ? "12em" : "100%";
  const styleLabel: React.CSSProperties = { 
    font: "300 1rem var(--font-1)",
    paddingLeft: "10px"
  }
  const styleInput: React.CSSProperties = {
    fontSize: "1em",
    fontFamily: "var(--font-1)",
    width: sizeCamp,
    padding: ".8rem 15px .5rem ",
    borderRadius: "25px",
    backgroundColor: "#d9d9d9",
    border: "none",
  }
  return(
    <span style={{
      width: sizeCamp
    }}>
      <label form="" style={styleLabel}>{ children }</label>
      <input 
        style={styleInput} 
        type={type} 
        placeholder={placeholder}
      />
    </span>
  )
}