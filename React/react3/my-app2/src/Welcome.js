import React from 'react';


export class Welcome extends React.Component{
    render(){
        return <h2>Welcome, {this.props.name}!</h2>
    }
}

export let greeting = <Welcome name="Kate"></Welcome>