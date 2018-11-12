import React, { Component } from "react";
import { observable } from "mobx";
import { observer, inject } from 'mobx-react';
import Popup from './popup';
import '../../css/searchForm.css';

@inject("store")
@observer
class SearchForm extends Component {
    @observable person = {
        name: "",
    }

    @observable showPopup = false

    togglePopup = ()=> {
        this.showPopup = !this.showPopup
        // console.log(this.showPopup)
    }

    inputChange = (e)=> {
        this.person[e.target.name] = e.target.value
        console.log(this.person.name)
    }

    getUser = ()=> {
        let userName = this.user.name
        this.props.getUser(userName)
    }

    render() {
        return (
            <div className="form">
                <input type="text" name="name" className="name-search-input" onChange={this.inputChange} />
                <input type="button" className="input-button" value="Search" />
                <input type="button" className="add-button" value="Add Person" onClick={this.togglePopup} />
                {this.showPopup ? <Popup  closePopup={this.togglePopup} /> : null}
            </div>
        )
    }
}

export default SearchForm;