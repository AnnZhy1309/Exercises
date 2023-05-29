import React from "react";

const hello = <h1>Hello, world</h1>;

class Hello extends React.Component{
    render(){
        return hello
    }
}

console.log(Hello);