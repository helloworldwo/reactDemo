import React from 'react';
const HelloWorld = (props)=>{
    console.log(props);
    return(
        <div>{props.name} say:hello world</div>
    )
}
export default HelloWorld