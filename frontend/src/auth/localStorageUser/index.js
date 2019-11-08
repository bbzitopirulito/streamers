class localStorageUser {
    constructor() {

    }

    checkLocalStorageUser(history) {
        if(localStorage.getItem('user') === null) {
            return history.push('/login');
        }
   }
}

export default new localStorageUser(); 
