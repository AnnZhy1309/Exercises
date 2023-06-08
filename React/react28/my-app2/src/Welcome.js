import React from 'react';
import { LanguageContext } from './LanguageContext';

const String ={
    en: {welcome_phrase: "Welcome",
         your_age: "Your age is "},
    ru: {welcome_phrase: "Добро пожаловать",
        your_age: "Ваш возраст "}
}

export class Welcome extends React.Component{
    render(){
        return <div>
            <LanguageContext.Consumer>
              {(language)=>{
                return <div>
                    <h2>{String[language].welcome_phrase} {this.props.name}!</h2>
                    <p>{String[language].your_age} {this.props.age}</p>
                </div>
              }}
        </LanguageContext.Consumer>
        </div>
    }
}

