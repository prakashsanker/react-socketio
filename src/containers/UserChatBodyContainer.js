import { connect } from "react-redux";
import UserChatBody from "../components/UserChatBody";


const mapStateToProps = state =>{
    console.log(state);
    return {
        chat:state.message.message,
        name:state.activeUser.ActiveUser
    };
};

const UserChatBodyContainer = connect(mapStateToProps)(UserChatBody);
export default UserChatBodyContainer;