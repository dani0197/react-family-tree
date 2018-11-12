import React, { Component } from 'react';
import User from './user';
import { inject, observer } from 'mobx-react';
import '../../css/familyTree.css';

@inject("store")
@observer
class FamilyTree extends Component {


    render() {
        return (
            <div className="tree">
                <User />
            </div>
        )
    }
}

export default FamilyTree;