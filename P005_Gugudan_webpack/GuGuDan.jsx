const React = require('react'); 
const {useState , useRef} = React; 

//함수 컴포넌트 , 컴포넌트에서도 ref랑 setState를 사용할 수 있게 해주는게  Hooks이다... 
const GuGudan = ()=>{
console.log('구구단 함수');
//------------------------------------------------------------------------------ [Hooks State 선언 방식]함수 컴포넌트 안에 반드시 있어야 한다.
    const [first, setFirst]   = React.useState(Math.ceil(Math.random()*9)); // first만의 setFirst가 생김... 
    const [second, setSecond] = React.useState(Math.ceil(Math.random()*9)); 
    const [value, setValue]   = React.useState(''); 
    const [result, setResult]   = React.useState(''); 
                                        //use로 시작하는 것들이 Hooks이다.
                                        //Hooks에서.. state 가 바뀌면 GuGudan 함수 자체가 바뀐다, 다시 실행된다.
                                        //(class에서는 render 함수만 재 실행된다.)  
    const inputRef = React.useRef(); //Hooks에서 돔에 접근하는 방법.  
//------------------------------------------------------------------------------    

    const onChangeInput = (e)=>{

            setValue(e.target.value); 
    };  

    const onSubmitForm = (e)=>{

        e.preventDefault(); 
                if(parseInt(value) === first * second){
                    
                    setResult("정답  " + value); 
                    setFirst(Math.ceil(Math.random()*9));
                    setSecond(Math.ceil(Math.random()*9));                 
                    setValue(''); 
                    inputRef.current.focus(); //current도 추가 해야 한다. 

                }else{
                    setResult('땡'); 
                    setValue(''); 
                    inputRef.current.focus();
                }

    }
        
        return (
            <>
                <div>{first}곱하기 {second}는?</div>
                <form onSubmit={onSubmitForm}>
                    <input ref={inputRef}  type="number" value={value} onChange={onChangeInput}/> 
                                                                        
                    <button>입력!</button>
                </form>
                <div>{result}</div>
            </>
            ); 

}

    module.exports=GuGudan; 