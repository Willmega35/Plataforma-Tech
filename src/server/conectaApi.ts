import { FormData } from '../type/Valid-register'

export default class ConectaApi {
  readonly API_URL = 'http://localhost:3000/user';

  public async Usuario ( seach: string ) {
    const conectaApi = await fetch(`${this.API_URL}?q=${seach}`)
    const data = await conectaApi.json()
    return data
  }

  public  async Cadastrar (data: FormData) : Promise<void> {
    let personResister:boolean = false

    const value: FormData[] = await this.Usuario(data.name)
    
    if (value.length === 0) personResister = true;
    
    console.log(personResister)
    // console.log(value)

    if(personResister){
      await fetch(this.API_URL, {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then( response => console.log(response.status))
      
        console.log('Usuario cadastrado!')
        return
    }
    console.log('Usuario já cadastrado');
  }
}