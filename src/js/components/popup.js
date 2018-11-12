import React, { Component } from 'react';
import { observable } from "mobx";
import { inject } from 'mobx-react';
import '../../css/popup.css';

@inject("store")
class Popup extends Component {
    
    @observable popup = {
        nameInput: "",
        imgInput: ""
    }

    inputChange = (e)=> {
        this.popup[e.target.name] = e.target.value
    }

    addUser = ()=> {
        let name = this.popup.nameInput
        let img = this.popup.imgInput
       this.props.store.addUser(name, img)
       this.props.closePopup()
    }

    render() {
        return (
            <div className="popup">
                <div className="popup_inner">
                    <div><input type="button"  className="close-popup" value="X" onClick={this.props.closePopup} /></div>
                    <div>Name: <input type="text" name="nameInput" className="name-input" onChange={this.inputChange} /></div>
                    <div>imgURL: <input type="text" name="imgInput" className="img-input" onChange={this.inputChange} /></div>
                    <div>Children: </div>
                    <div><input type="button" value="Add New User" onClick={this.addUser} /></div>
                </div>
            </div>
        )
    }
}

export default Popup;