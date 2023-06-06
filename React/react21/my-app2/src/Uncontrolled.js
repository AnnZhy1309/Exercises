import React from 'react'

export class UncontrolledLogin extends React.Component{
    render(){
        return(
            <div>
                <h1>Uncontrolled Login</h1>
                <form>
                    <input name="username" />
                    <input name="password" type="password"/>
                    <input name="remember" tupe="checkbox"/>
                    <button type="submit">Login</button>
                    <button type="reset">Reset</button>
                </form>
            </div>
        )
    }
}