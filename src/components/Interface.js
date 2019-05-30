import React, { Component } from 'react'
import {connect} from 'react-redux'



import '../App.css';


export class Interface extends Component {
    render() {
        return (
        
          
            <div className="InterfaceText">
            
            Interface 

           quantity:{this.props.quantity1}
           <br/>
           Cart:{this.props.cartprice1}

      

</div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        list: state.list,
        quantity1: state.list[0].quantity +
         state.list[1].quantity +
         state.list[2].quantity,
        cartprice1: state.list[0].cartprice + 
        state.list[1].cartprice + 
        state.list[2].cartprice 
    }
}


export default connect(mapStateToProps)(Interface)
