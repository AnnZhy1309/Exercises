import {useState} from 'react'

export function Login(){
    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false
    })

    function handleInputChange(event){
      const {name, type, value, checked} = event.target
      setData((data)=>{
        return{
            ...data,
        [name]: type === 'checkbox' ? checked : value
        }
      })
    }

    return(
        <form>
            <input onChange={handleInputChange} name="username" value={data.username}/>
            <input onChange={handleInputChange} name="password" type="password" value={data.password}/>
            <input onChange={handleInputChange} name="remember" type="checkbox" checked={data.remebmer}/>
        </form>
    )
}