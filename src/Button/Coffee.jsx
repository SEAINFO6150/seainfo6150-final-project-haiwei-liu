import React from "react";
import {withRouter} from 'react-router-dom';
import { Button} from 'antd';
import './Button.module.css'

class Coffee extends React.Component{
    handleClick(){
        this.props.history.push("/tags/coffee");
    }
    render(){
        return(
            <div>
                <Button onClick={() => this.handleClick()}>Coffee</Button>
            </div>
        );
    }
}
export default withRouter(Coffee);