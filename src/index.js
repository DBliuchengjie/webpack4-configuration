import ReactDom  from 'react-dom';
import React from 'react';
import Main from './template/a';


console.log('---环境---');
console.log(process.env.NODE_ENV);
console.log('---环境---');



ReactDom.render(<Main />,document.getElementById("root"));