import { observable, action, computed } from "mobx";

class PeopleStore {
    @observable people = null
}

// getUser = (userName)=> {
//     axios.get()
// } 

const store = new PeopleStore();
export default store;