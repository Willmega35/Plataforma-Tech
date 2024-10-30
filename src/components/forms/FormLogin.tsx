import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import style from "./style.module.css"
import ConectaApi from "../../server/conectaApi"
import { User } from "../../type/user"

export default function FormLogin (){
  
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm()
  
  const validSubmit = async (data: {user: string, password: string})=> {
    const requestData: User = await new ConectaApi().Login(data.user);

    if (requestData == undefined) {
      console.log('Usuario não existe')
      return
    }
    if (data.password == requestData.password) {
      console.log('Usuario Cadastrado na Plataforma')
      navigate('/user')
    }
  }
  
  return(
    <form onSubmit={handleSubmit(validSubmit)} className={style.forms}>
      <div className={style.camp}>
        <label htmlFor="">Email ou Usuario</label>
        <input { ...register('user')} type="text" placeholder="Digite seu email ou usuário"/>
      </div>

      <div className={style.camp}>
        <label htmlFor="">Senha</label>
        <input {...register('password')} type="password" placeholder="Digite sua senha"/>
      </div>

      <button type="submit">Login</button>
    </form>
  )
}