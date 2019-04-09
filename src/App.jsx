import React, { Component } from 'react';
import Dialog from './component/dialog';
import Button from './component/mybutton';
import './css/style.css';

class App extends Component{
    state = {
        loading:false,
        dialog:false,
        message:'nice'
    }

    submit = ()=>{
        this.setState({
            loading:true
        })

        setTimeout(() => {
            const res = Math.random(1);
            if (res > 0.5){
                this.setState({
                    dialog:true,
                    message:'success'
                })
            }else{
                this.setState({
                    dialog:false,
                    message:'faile'
                })
            }
            
        }, 1000);
    }

    close = ()=>{
        this.setState({
            dialog:false
        })
    }

    render(){
        const {loading,dialog,message} = this.state;

        return(
            <div className='app-wrap'>
                <Button loading={loading} submit={this.submit}>提交</Button>
                {dialog && <Dialog message={ message } close={ this.close } /> }
            </div>
            )
    }
}

export default App;