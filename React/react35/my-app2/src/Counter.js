import React from "react";

export class Counter extends React.Component{
   state = {
     count: this.props.initialValue
   }
constructor(props){
    super(props)
    setInterval(()=>{
        this.setState((state)=>{
            return{
                count: state.count+this.props.incrementValue
            }
        })
    }, this.props.incrementInterval)
}

   render(){
    return(
        <div>
        <h1>{this.state.count}</h1>
        </div>
    )
   }
}

export class CounterDisplay extends React.Component{
    render(){
        return(
            <div>
            <h1>Counter</h1>
            <Counter incrementInterval={2000} incrementValue={10} initialValue={6}/>
            </div>
        )
    }
}