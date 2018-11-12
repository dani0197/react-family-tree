import { observable, action } from 'mobx';
import axios from 'axios';

class PeopleStore {

    @observable user = null

    @action addUser = async (userName, imgUrl) => {
       let newUser = await axios.post('http://localhost:3030/users', { userName, imgUrl });
        this.user = newUser.data;
    }

    getUser = async (userName)=> {
      let currentUser = await axios.get('http://localhost:3030/users/' + userName);
      this.user = currentUser.data
      console.log(this.user)
    } 
}


const store = new PeopleStore();
export default store;