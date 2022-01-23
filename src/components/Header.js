
//---class component---

import { Component } from 'react'
class Header extends Component{
    render(){
        return(
            <h1>This is header {this.props.data}</h1>
            
        )
    }
}


// ---functional component---

// function Header(props){
//     return (
//         <h1>This is header {props.data}</h1>
//     )
// }
// export default Header