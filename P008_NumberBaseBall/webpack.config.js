const path = require('path'); 
const Webpack = require('webpack'); 

module.exports = {

    name:'word-relay-setting',  //안 써도 된다. 
    mode: 'development' ,  //실서비스 production 
    devtool: 'eval',       //빠르게 하겠다..? ,개발용 eval, 실서비스 hidden-source-map
    resolve: {
        extensions: ['.js','.jsx']
    },


    //입력
    entry:{
        //app:['./client.jsx','./WordRelay.jsx']
        app:['./client'] // client.jsx에서 ./WordRelay.jsx를 require하고 있으므로 client.jsx만 입력 해 주면 된다.  
                    //▲resolve에서 확장자를 지정해 줬기 떄문에 파일 확장자도 입력 안함. 
    }, 

    module:{
        rules:[{
                test: /\.jsx?/, //js파일과 jsx파일의 룰을 적용하겠다 어떤 룰?
                loader : 'babel-loader', // 바벨 룰! js,jsx파일에 바벨을 적용해서 최신문법과 실험적 문법을 활용해 (옛날 브라우저에서도))호환되게 끔 하겠다. 
                options:{ // 바벨의 옵션들...
                    presets:[
                        ['@babel/preset-env',{
                            targets:{
                                browsers: ['> 5% in KR',                    //우리나라 5%이상인 브라우저는 지원할래      
                                           'last 2 chrome versions'      //크롬 최신버전 전전(2) 버전까지 지원 할래
                                          ],
                                           
                            },
                            debug:true, //개발용... 
                        }],
                        '@babel/preset-react'],
                    plugins:['@babel/plugin-proposal-class-properties','react-hot-loader/babel'],
                   // plugins:[],
                },
        }],
    },

    //플러그인.. 뭔가 추가적인... 
    plugins:[
        new Webpack.LoaderOptionsPlugin({debug:true}),

    ],

    //출력
    //html에서는 결국에 이 파일 하나로 serve한다.
    output : {  
        path: path.join(__dirname,'dist'),  //실제 경로
        filename : 'app.js',
        publicPath: '/dist/', //hot-loader쓰면 dist/app.js 안먹어서... 이 옵션 달아 줌 
                              //node의 app.use('/dist',express.static(__dirname,'dist'))와 유사하다.(가상 경로라고 생각하세요)
                              
    }

}