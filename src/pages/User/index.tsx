import { Page, useIContextUser } from "../../context/AcessUser";

export default function Usuario (){

  const user = useIContextUser();
  
  return(
    <Page>
      <h1>Ola usuario {user?.name}</h1>
    </Page>
  )
}