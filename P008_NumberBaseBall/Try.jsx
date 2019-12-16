const React = require('react'); 
const {Component} = React; 

//가독성 + 재사용성 + 성능 최적화를 위해
//이런식으로 컴포넌트를 뺄 수 도 있다. 

class Try extends Component {


    render(){
            return (
                <li>
           <div>{this.props.tryInfo.try}</div>
           <div>{this.props.tryInfo.result}</div>
                </li>
        )
    }
}


module.exports = Try; 