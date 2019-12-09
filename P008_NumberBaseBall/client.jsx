const React = require('react'); 
const ReactDom = require('react-dom'); 
const {hot} = require('react-hot-loader/root'); // /root를 제로초님도 그냥 하라고 해서 했다고 말함 

const baseBall = require('./NumberBaseBall'); 

const Hot = hot(baseBall); 

ReactDom.render(<Hot /> ,document.querySelector('#root')); 