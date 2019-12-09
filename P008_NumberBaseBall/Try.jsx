const React = require('react'); 
const {Component} = React; 

//가독성 + 재사용성 + 성능 최적화를 위해
//이런식으로 컴포넌트를 뺄 수 도 있다. 

class Try extends Component {


    render(){
            return (
                <li>
                    <b>{this.props.value.fruit}</b> - {this.props.index}
                    <div>컨텐츠</div>
                    <div>컨텐츠1</div>
                    <div>컨텐츠2</div>
                    <div>컨텐츠3</div>
                    <div>컨텐츠4</div>
                </li>
        )
    }
}


module.exports = Try; 