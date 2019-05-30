import React from 'react'
import p1 from './pics/p1.jpg'
import p2 from './pics/p2.jpg'
import p3 from './pics/p3.jpg'

const initialState ={
 
    money: 200,
   list:[
    {
    id:1,
    name: 'ted',
    surname:'bunyan',
    contents: 0,
    type: 'male',
    addPerson: 0,
    pics: <img src={p1} height={100}  alt="pic1" />,
    quantity:0,
    price: 10,
    cartprice:0

   },
   {
    id:2,
    name: 'sarah',
    surname:'wilkins',
    contents: 0,
    type: 'female',
    addPerson: 0,
    pics: <img src={p2} height={100}  alt="p1" />,
    quantity:0,
    price: 20,
    cartprice:0
   },
    {
    id:3,
    name: 'jim',
    surname:'morrisson',
    contents: 0,
    type: 'male',
    addPerson: 0,
    pics: <img src={p3} height={100}  alt="p1" />,
    quantity:0,
    price: 30,
    cartprice:0
   },
   ]
}


const Reducer=(state=initialState,action)=> {
    
    const newState=state;

    if(action.type==='Test1'){
        return{
            ...state,
            list: state.list
        }
    }
    
    if(action.type==='Test2'){
        return{
            ...state,
            quantity: state.list[0].quantity += 1 ,
            price: state.list[0].price,
            cartprice: state.list[0].cartprice +=10
        }
    }
    
    if(action.type==='Test3'){
        return{
            ...state,
            quantity: state.list[1].quantity +=1 ,
            price: state.list[1].price,
            cartprice: state.list[1].cartprice += 20
        }
    }
    if(action.type==='Test4'){
        return{
            ...state,
            quantity: state.list[2].quantity +=1 ,
            price: state.list[2].price,
            cartprice: state.list[2].cartprice += 30 
                
        }
    }

    if(action.type==='Test4'){
        return{
            ...state,
           money: state.money 
                
        }
    }

 
   


    return newState
        
    
}

export default Reducer
