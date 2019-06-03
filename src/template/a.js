import 'jquery';
import 'lodash';
import React,{Component} from 'react';

class Main extends Component {
    logMyGame(){
        console.log('信息技术');
        
    }
    componentDidMount(){
        setTimeout(()=>{
            this.logMyGame();
        },444);
    }
    render() {
        return <h1> 每天都思考 进步 反省 </h1>
    }
}
export default Main;