import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import '../../css/user.css';
@inject("store")
@observer
class User extends Component {

    render() {
        let user = this.props.store.user
        console.log(user)
        return (
            <div className="user">
                <div>{user.userName}</div>
                <img src={user.imgUrl} alt={user.userName}></img>
            </div>
        )
    }
}

export default User;