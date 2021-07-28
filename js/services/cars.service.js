import { findItemInArray } from "./helper.service.js";

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    toString() {
        return this.make + ', ' + this.model;
    }
}

class CarsService{
    cars = [];
    addCars(make, model) {
        const car = new Car(make, model);
        this.cars.push(car);
    }
    findCars(value) {
       return findItemInArray(value, this.cars);
    }
}

export const carsService = new CarsService();