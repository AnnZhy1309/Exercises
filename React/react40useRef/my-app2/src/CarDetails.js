import { useEffect, useRef , useState} from "react"

export function CarDetails(){
    const[data, setData] = useState({
        model: "Model",
        color: "Color",
        year: "Year",
    })
    const inputRef = useRef();

    useEffect(()=>{
        defaultValue
    })

    function handleChange(event){
        setData(event.target.value)
    }
    return(
    <form>
        <input name="model"  onChange={handleChange} ref={inputRef}/>
        <br/>
        <input name="color" onChange={handleChange} ref={inputRef}/>
        <br/>
        <input name="year"  onChange={handleChange} ref={inputRef}/>
    </form>
    )
}