const path = require('path'); 

module.exports = {

    name:'word-relay-setting', 
    mode: 'development' ,  //실서비스 production 
    devtool: 'eval',       //빠르게 하겠다..? 
    resolve: {
        extensions: ['.js','.jsx']
    },


    //입력
    entry:{
        //app:['./client.jsx','./WordRelay.jsx']
        app:['./GuGuDan'] 
                    //▲resolve에서 확장자를 지정해 줬기 떄문에 파일 확장자도 입력 안함. 
    }, 

    module:{
        rules:[{
                test: /\.jsx?/, //js파일과 jsx파일의 룰을 적용하겠다 어떤 룰?
                loader : 'babel-loader', // 바벨 룰! js,jsx파일에 바벨을 적용해서 최신문법과 실험적 문법을 활용해 (옛날 브라우저에서도))호환되게 끔 하겠다. 
                options:{ // 바벨의 옵션들...
                    presets:['@babel/preset-env','@babel/preset-react'],
                    plugins:['@babel/plugin-proposal-class-properties'],
                },
        }],
    },

    //출력
    //html에서는 결국에 이 파일 하나로 serve한다.
    output : {  
        path: path.join(__dirname,'dist'), 
        filename : 'app.js',
    }

}