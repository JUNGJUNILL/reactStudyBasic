const React = require('react'); 
const {Component} = React; 

class GuGudan extends Component {
    constructor(props){
        super(props); 
        //this.myRef = React.createRef();

        //바뀌는 것들...
        this.state = {
           first : Math.ceil(Math.random()*9),
           second : Math.ceil(Math.random()*9),
           value: '',
           result: '',
        };
    } 

    //함수를 따로 뺀 경우 반드시 화살표 함수를 사용해야한다. function 쓰면 안됨... 
    //this 때문에... 
    onSubmit = (e)=>{ 

                e.preventDefault(); 
                if(parseInt(this.state.value) === this.state.first * this.state.second){
                    // this.setState({
                    //     result : this.state.value + ' 정답!!',
                    //     first : Math.ceil(Math.random()*9),
                    //     second : Math.ceil(Math.random()*9),
                    //     value : '',
                    // });
                    this.setState((preveState)=>{
                                    //예전 state값으로 새로운 state를 만들 때 
                                    //이런식으로 예전값을 가진 파라매터 return값을 설정해 주면 좋다... 
                                    //setState가 비동기함수이기 때문에... 여튼 정확하는 설명이 힘들지만, 비동기 이기때문에 
                                    //문제가 발생 할 수 도 있다.
                                                      
                        return {
                            result : preveState.value + ' 정답!!',
                            first : Math.ceil(Math.random()*9),
                            second : Math.ceil(Math.random()*9),
                            value : '',
                        };
                    });
                    //this.myRef.current.focus(); 
                    this.input.focus();
                    }else{
                    this.setState({
                        result : '땡',
                        value : '',
                    });
                    //this.myRef.current.focus();                             
                    this.input.focus();
                }

    };

   onChange = (e)=>{

            this.setState({value: e.target.value});

        };

  input;
  //Ref 돔에 접근하기 위함.... 


    render(){
            console.log('랜더링'); 
            return (
                    <React.Fragment>
                        <div>{this.state.first}곱하기 {this.state.second}는?</div>
                        <form onSubmit={this.onSubmit}>
                            <input ref={(e)=>this.input = e } type="number" value={this.state.value} onChange={this.onChange}/> 
                                                                         
                            <button>입력!</button>
                        </form>
                        <div>{this.state.result}</div>
                    </React.Fragment>
                   ); 
            }

}

module.exports = GuGudan; 