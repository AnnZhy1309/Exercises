import React from 'react';


export class Welcome extends React.Component{
    render(){
        return <div>
        <h2>Welcome, {this.props.name}!</h2>
        </div>
    }
}

export class InteractiveWelcome extends React.Component{
    render(){
        return(
            <div>
                <input name="thename" value={this.props.name}></input>
                <Welcome/>
            </div>
        )
    }
}