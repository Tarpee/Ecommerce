import React from 'react'
import {connect} from 'react-redux'




const Page1=(props)=> {

   
    let proxy1 = props.list.filter(item=>item.id===1)
    let proxy2 = props.list.filter(item=>item.id===2)
    let proxy3 = props.list.filter(item=>item.id===3)
    
    return (
        <div>
            Page1
            <div>{proxy1.map(item=>item.name)}
            {proxy1.map(item=>item.pics)}
             </div>
             <div>
             quantity
             {props.quantity1}
             </div>
             <div>
             price
            {props.price1}
            </div>
            <button onClick={props.Test2}>buy</button>


            <div>{proxy2.map(item=>item.name)}
            {proxy2.map(item=>item.pics)}
             </div>
             <div>
             quantity
             {props.quantity2}
             </div>
             <div>
             price
            {props.price2}
            </div>
            <button onClick={props.Test3}>buy</button>


            <div>{proxy3.map(item=>item.name)}
            {proxy3.map(item=>item.pics)}
             </div>
             <div>
             quantity
             {props.quantity3}
             </div>
             <div>
             price
            {props.price3}
            </div>
            <button onClick={props.Test4}>buy</button>



        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        list: state.list,
        quantity1: state.list[0].quantity,
        quantity2: state.list[1].quantity,
        quantity3: state.list[2].quantity,
        price1: state.list[0].price,
        price2: state.list[1].price,
        price3: state.list[2].price,
        


    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        Test1:()=>dispatch({type:'Test1'}),
        Test2:()=>dispatch({type:'Test2'}),
        Test3:()=>dispatch({type:'Test3'}),
        Test4:()=>dispatch({type:'Test4'})
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Page1)
