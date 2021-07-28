import { findItemInArray } from "./helper.service.js";

export class User {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    toString() {
        return this.firstName + ' ' +  this.lastName;
    }
}

class UsersService{
    users = [];
    addUser(first, last) {
        const user = new User(first, last);
        this.users.push(user);
    }
    findUsers(value){
        return findItemInArray(value, this.users);
    } 
}

export const usersService = new UsersService();
