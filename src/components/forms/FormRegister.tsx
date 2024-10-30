import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { Schema, FormData } from "../../type/Valid-register"
import style from "./style.module.css"
import ConectaApi from "../../server/conectaApi";

export default function FormRegister (){

  const { register, handleSubmit, formState: { errors } } = useForm<FormData> ({
    resolver: zodResolver(Schema)
  })

  if( !errors )
    console.error('Errors:', errors)

  function conectaApi (data: FormData) {
    const conectaApi = new ConectaApi()
    delete data.confirmPassword
    conectaApi.Cadastrar(data)
  }

 return(
  <form onSubmit={handleSubmit(conectaApi)} className={style.forms}>
    <div className={style.camp}>
      <label htmlFor="name">Nome</label>
      <input {...register("name")} id="name" type="text" placeholder="Digite seu nome"/>
    </div>

    <div className={style.camp}>
      <label>Email</label>
      <input {...register("email")} type="email" placeholder="Digite seu email"/>
    </div>

    <div className={style.doubleCamp}>
      <label>Data de Nacimento</label>
      <label>Telefone</label>
      <input {...register("date")} type="date" placeholder="Digite sua Data de Nascimento"/>
      <input { ...register('phone')} type="tel" placeholder="Digite seu Telefone"/>
    </div>

    <div className={style.doubleCamp}>
      <label>Senha</label>
      <label>Confimar Senha</label>
      <input {...register("password")} type="password" placeholder="Digite sua senha"/>
      <input {...register("confirmPassword")} type="password" placeholder="Confime a sua Senha"/>
    </div>

    <button type="submit">Cadastra</button>
  </form>
 ) 
}