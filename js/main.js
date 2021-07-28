import { List } from './components/list.component.js';
import {usersService} from './services/users.service.js';
import {carsService} from './services/cars.service.js';

usersService.addUser('Joe', 'Moe');
usersService.addUser('Bill', 'Will');
usersService.addUser('Jim', 'James');

const usersList = new List();
usersList.updateItems(usersService.users);

const filteredusers = new List();
filteredusers.updateItems(usersService.findUsers('j'))


carsService.addCars('Chevy', 'Corvette');
carsService.addCars('Ford', 'F150');

const usersList2 = new List();
usersList2.updateItems(carsService.cars);

const filteredusers2 = new List();
filteredusers2.updateItems(carsService.findCars('v'))