import React, { Component } from "react";
import { observable } from "mobx";
import { observer, inject } from 'mobx-react';
import Popup from './popup';
import '../../css/searchForm.css';

@inject("store")
@observer
class SearchForm extends Component {
    @observable user = {
        name: "",
    }

    @observable showPopup = false

    togglePopup = ()=> {
        this.showPopup = !this.showPopup
    }

    inputChange = (e)=> {
        this.user[e.target.name] = e.target.value
    }

    getUser = ()=> {
        let userName = this.user.name
        this.props.store.getUser(userName)
    }

    render() {
        return (
            <div className="form">
                <input type="text" name="name" className="name-search-input" value={this.user.name} onChange={this.inputChange} />
                <input type="button" className="input-button" value="Search" onClick={this.getUser} />
                <input type="button" className="add-button" value="Add user" onClick={this.togglePopup} />
                {this.showPopup ? <Popup  closePopup={this.togglePopup} /> : null}
            </div>
        )
    }
}

export default SearchForm;