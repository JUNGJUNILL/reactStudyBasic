const React = require('react'); 
const {useState, useRef} = React; 


const WordRelay= ()=>{

    const [word,setWord] = useState('정준일');
    const [value,setValue] =useState('');
    const [result, setResult] = useState('');

    const inputRef = useRef(null);


   const onSubmitForm = (e) =>{
        e.preventDefault(); 
        if(word[word.length-1] === value[0]){
            setResult('딩동댕'); 
            setWord(value); 
            value('');
            inputRef.current.focus(); 

        }else{
            setResult('땡'); 
            setValue(''); 
            inputRef.current.focus(); 
        }

    }



    const onChangeInput = (e)=>{
        console.log('실행이되긴 하냐?'); 
        setValue(e.target.value); 
};  



  

        return(
            <React.Fragment>
                    <div>{word}</div>
                    <form onSubmit={onSubmitForm}>
                        <input ref={inputRef} value={value} onChange={onChangeInput} />
                        <button>입력!</button>
                    </form>
                    <div>{result}</div>
             </React.Fragment>
          
          );
        

 }

 module.exports = WordRelay; 

