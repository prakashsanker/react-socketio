import React from "react";

import "./css/UserChatBodyMessage.css";

class UserChatBodyMessage extends React.Component{
  
    render(){
        console.log(this.props);
        return this.props.chat.map((message,index)=>this.renderMessage(message,index,this.props.name));
    }
    renderMessage(message,index,name){
        console.log(message);
        if(Object.keys(message)[0] == name)
        return <div className="RightMessage" key={index}>{message.message}</div>
        else
        return <div className="LeftMessage" key={index}>{message.message}</div>
    }
}
export default UserChatBodyMessage;