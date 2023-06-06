import React from 'react';


export class Todos extends React.Component{
    
    const [items, seiItem] = useState([]);

    handlerOnClick =(event)=>{
        let text = event.target.elements.input.value;
        items = [...this.items, text]
    }

    render(){
        return(
            <div>
               <ul>
                 {this.props.items.map((item) => (
                    <li>{item}</li>
                 ))}
               </ul>
               <input name='input' />
               <button onClick={handlerOnClick}>Submit</button>
            </div>
        )
    }
}