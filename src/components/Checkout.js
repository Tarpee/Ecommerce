import React from 'react'
import {connect} from 'react-redux'

function Checkout(props) {
    return (
        <div>
            <h3>
                <h3>you have chosen to buy
                <p>{props.quantity1} and you have</p>
                <p>{ props.money}{'  '}money</p>
                </h3>
            </h3>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        money:state.money,
        list: state.list,
        quantity1: state.list[0].quantity +
         state.list[1].quantity +
         state.list[2].quantity,
        cartprice1: state.list[0].cartprice + 
        state.list[1].cartprice + 
        state.list[2].cartprice 
    }
}


export default connect(mapStateToProps)(Checkout)
