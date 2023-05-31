import React from 'react';


export class Welcome extends React.Component{
    render(){
        return <div>
        <h2>Welcome, {this.props.name}!</h2>
        <Age age={30}/>
        </div>
    }
}

export class Age extends React.Component{
    render()  {
        return(
        <div>
            {this.props.age>18
               ?<p>Your age is {this.props.age}</p>
               :<p>You're too young</p>}
        </div>
            )
}}