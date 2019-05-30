import React from 'react'
import {connect} from 'react-redux'


function Page2(props) {

    const pics = props.list.filter(item=>item.id===2)

    return (
        <div>
            Page2
            {pics.map(item=>item.pics)}
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        list:state.list
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        Test1:()=>dispatch({type:'Test1'})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Page2)
