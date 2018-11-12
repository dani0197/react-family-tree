import { observable, action } from 'mobx';
import axios from 'axios';

class PeopleStore {

    @observable person = null

    @action addUser = async (userName, imgUrl) => {
       let newPerson = await axios.post('http://localhost:3030/users', { userName, imgUrl });
        this.person = newPerson;
    }

    // getUser = (userName)=> {
    //     axios.get()
    // } 
}


const store = new PeopleStore();
export default store;