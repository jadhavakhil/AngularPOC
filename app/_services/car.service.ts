import { Injectable } from '@angular/core';
import { Car } from '../_models/index';

let CARS: Car[] = [
      new Car(11, 'Lamborghini',"Veneno","2000","Red","Passed"),
      new Car(12, 'Ferrari',"Pininfarina Sergio","2012","Red","Passed"),
      new Car(13, 'Pagani',"Huayra BC","1998","Red","Passed"),
      new Car(14, 'W Motors',"ModelLykan Hypersport","2010","Red","Passed"),
      new Car(15, 'Maruti',"Swift","2007","Red","Passed"),
      new Car(16, 'Hundai',"I 20","2016","Red","Passed"),
      
      new Car(21, 'Lamborghini 2',"Veneno","2000","Red","Passed"),
      new Car(22, 'Ferrari 2',"Pininfarina Sergio","2012","Red","Passed"),
      new Car(23, 'Pagani 2',"Huayra BC","1998","Red","Passed"),
      new Car(24, 'W Motors 2',"ModelLykan Hypersport","2010","Red","Passed"),
      new Car(25, 'Maruti 2',"Swift","2007","Red","Passed"),
      new Car(26, 'Hundai 2',"I 20","2016","Red","Passed"),
];

let carsPromise = Promise.resolve(CARS);
@Injectable()
export class CarService {
  getCars() { return carsPromise; }
  getCar(id: number | string) {
    return carsPromise
      .then(cars => cars.find(car => car.id === +id));
      
  }
  getCarsList() { return CARS; }
}
