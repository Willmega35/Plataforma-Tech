import style from "./style.module.css"

export default function FormsLogin (){
  return(
    <form className={style.forms}>
      <span className={style.campDeAcesso}>
        <label htmlFor="" className={style.textPerf}>Email ou Usuario</label>
        <input className={style.inputCamp} type="text"/>
      </span>

      <span className={style.campDeAcesso}>
        <label htmlFor="" className={style.textPerf}>Senha</label>
        <input className={style.inputCamp} type="password" />
      </span>

      <button className={style.button} type="submit">Login</button>
    </form>
  )
}