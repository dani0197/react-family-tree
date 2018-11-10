import React, { Component } from "react";
import { observable } from "mobx";
import { inject } from 'mobx-react';
import '../../css/searchForm.css';

@inject("store")
class SearchForm extends Component {
    @observable user = {
        name: ""
    }

    inputChange = (e)=> {
        this.user[e.target.name] = e.target.value
        console.log(this.user.name)
    }

    getUser = ()=> {
        let userName = this.user.name
        this.props.getUser(userName)
    }

    render() {
        return (
            <div className="form">
                <input type="text" name="name" className="name-input" onChange={this.inputChange} />
                <input type="button" className="input-button" value="Search" />
                <input type="button" className="add-button" value="+" />
            </div>
        )
    }
}

export default SearchForm;