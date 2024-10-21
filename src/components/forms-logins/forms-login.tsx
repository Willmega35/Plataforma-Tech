import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import style from "./style.module.css"
import ConectaApi from "../../server/conectaApi"
import { User } from "../../type/user"

export default function FormsLogin (){
  
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm()
  
  const validSubimit = async (data: {user: string, password: string})=> {
    const requestData: User = await new ConectaApi().Login(data.user);

    if (requestData == undefined) {
      console.log('Usuario não existe')
      return
    }
    if (data.password == requestData.password) {
      console.log('Usuario Cadastrado na Plataforma')
      navigate('/user')
    }
    // if ( (data.password == requestData[0].name))
    // console.log(requestData)
  }
  
  return(
    <form onSubmit={handleSubmit(validSubimit)} className={style.forms}>
      <span className={style.campDeAcesso}>
        <label htmlFor="" className={style.textPerf}>Email ou Usuario</label>
        <input { ...register('user')} className={style.inputCamp} type="text"/>
      </span>

      <span className={style.campDeAcesso}>
        <label htmlFor="" className={style.textPerf}>Senha</label>
        <input {...register('password')} className={style.inputCamp} type="password" />
      </span>

      <button className={style.button} type="submit">Login</button>
    </form>
  )
}