import React,{Component} from 'react';
class HelloWorld extends Component{
    state = {
        switch:0,
        name:this.props.name1
    }

    //left circle
    componentDidMount(props){
        console.log(this.refs);
    }

    clickHander=()=>{
        console.log(this.refs);
    }

    refCallback=(elem)=>{
        console.log(elem);
    }

    render(){
        return(
            <div className='container' onClick={this.clickHander}>
                <div ref='hello' className='hello'>Hello</div>
                <div ref={this.refCallback} className='world'>world</div>
            </div>
        )
    }
}
export default HelloWorld