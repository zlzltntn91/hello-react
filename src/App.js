import React, {Component} from 'react';
import './App.css';

class App extends Component{
    render() {
        const name = "react";
        return <div className={name}>{name}</div>
    }
}
// function App (){
//     const name = 'react';
//
//     return(
//         <div className={name}>{name}</div>
//     );
// }
export default App;
