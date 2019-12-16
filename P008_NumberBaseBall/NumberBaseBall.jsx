const React = require('react'); 
const {Component} = React; 
const Try = require('./Try'); 

//무슨 이유에선지 import는 안된다. 
// import React,{Component} from 'react'; 
// export default NumberBaseBall;

function getNumbers(){//숫자 4개 랜덤하게 뽑아주는 함수 
    const candidate = [1,2,3,4,5,6,7,8,9]; 
    const array = []; 
    for(let i=0; i<4; i++){
        const chosen = candidate.splice(Math.floor(Math.random()*(9-i)),1)[0]; 
        array.push(chosen); 
        
    }

    return array;
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


    onSubmitForm = (e) =>{
        e.preventDefault() 
        if(this.state.value === this.state.answer.join('')){

            this.setState({
                result:'홈런',
                tries: [...this.state.tries,{ try: this.state.value, result:'홈런'}]
                        //옛날거, 현재꺼 비교 해야함 react 성질임 그냥 
            });
            alert('게임을 다시 시작합니다.'); 
            this.setState({
                value:'',
                answer:getNumbers(),
                tries:[]
            });

        }else{ //답 틀렸을면
           
            const answerArray = this.state.value.split('').map((v)=>{parseInt(v)}); 
            let strike = 0; 
            let ball   = 0; 
            if(this.state.tries.length >=9){ //10번 이상 틀렸을 때 
                this.setState({
                    result:`10번 넘게 틀려서 실패! 답은 ${this.State.answer.join(',')}였습니다.`,

                }); 
                alert('게임을 다시 시작합니다.'); 
                this.setState({
                    value:'',
                    answer:getNumbers(),
                    tries:[]
                });
            }else{
                 for(let i=0; i<4; i++){
                     if(answerArray[i] === this.state.answer[i]){
                            strike+=1;
                     }else if(this.state.answer.includes(answerArray[i])){
                            ball+=1; 

                     }
                 }
                 this.setState({
                     tries:[...this.state.tries,{try:this.state.value, result:`${strike} 스트라이크, ${ball} 입니다.`}]
                 });


            }

        }
    };

    onChangeInput= (e) =>{
        console.log(this.state.answer);
        this.setState({
            value:e.target.value,
        }); 
    };

    render(){
        return (
                <div>
                    <h1>{this.state.result}</h1>
                    <form onSubmit={this.onSubmitForm}>
                        <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
                    </form>
                    <div>시도: {this.state.tries.length}</div>
                    <ul>
                    {this.state.tries.map((v,i)=>{
                        return (
                            <Try key={`${i+1}차 시도 : `} tryInfo={v} index={i}/>
                        );
                    })}
                    
                    </ul>
                </div>
        )
    }

}
module.exports = NumberBaseBall; 
