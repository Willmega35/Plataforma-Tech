import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { Schema, FormData } from "../../type/Valid-register"
import style from "./style.module.css"
import ConectaApi from "../../server/conectaApi";

export default function FormsRegister (){

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
    <div className={style.boxInput}>
      <label htmlFor="name">Nome</label>
      <input {...register("name")} id="name" type="text" placeholder="Digite seu nome"/>
    </div>

    <div className={style.boxInput}>
      <label>Email</label>
      <input {...register("email")} type="email" placeholder="Digite seu email"/>
    </div>

    <div className={style.boxDobleCamp}>
      <div className={style.boxInput}>
        <label>Data de Nacimento</label>
        <input {...register("date")} type="date" placeholder="Digite sua Data de Nascimento"/>
      </div>
      <div className={style.boxInput}>
        <label>Telefone</label>
        <input { ...register('phone')} type="tel" placeholder="Digite seu Telefone"/>
      </div>
    </div>

    <div className={style.boxDobleCamp}>
      <div className={style.boxInput}>
        <label>Senha</label>
        <input {...register("password")} type="password" placeholder="Digite sua senha"/>
      </div>
      <div className={style.boxInput}>
        <label>Confimar Senha</label>
        <input {...register("confirmPassword")} type="password" placeholder="Confime a sua Senha"/>
      </div>
    </div>

    <button className={style.boxButton} type="submit">Cadastra</button>
  </form>
 ) 
}