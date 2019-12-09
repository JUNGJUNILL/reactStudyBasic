const React = require('react'); 
const {Component} = React; 
const Try = require('./Try'); 

//무슨 이유에선지 import는 안된다. 
// import React,{Component} from 'react'; 
// export default NumberBaseBall;

function getNumbers(){

}

class NumberBaseBall extends Component{

    state = {
        result:'',
        value:'',
        answer:getNumbers(),
        tries:[],
    };

    fruits = [
                    { fruit:'배', taste:'맛있다'},
                    { fruit:'배', taste:'맛있다'},
                    { fruit:'배', taste:'맛있다'},
                    { fruit:'배', taste:'맛있다'},
                    { fruit:'배', taste:'맛있다'},
              ]


    onSubmitForm = () =>{

    }

    onChangeInput= () =>{

    }

    render(){
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
                </form>
                <div>시도: </div>
                <ul>
                {this.fruits.map((v,i)=>{
                    return (
                        <Try value={v} index={i}/>
                    );
                })}
                   
                </ul>
            </>
        )
    }

}
module.exports = NumberBaseBall; 
