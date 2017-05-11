import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Car } from '../_models/index';
import { CarService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'car.component.html'
})

export class CarComponent implements OnInit {

    
    //cars: Car[] = [];
    cars: Observable<Car[]>;
    constructor(private carService: CarService,private route: ActivatedRoute,private router: Router) {
      
      
    }
    private selectedId: number;
    ngOnInit() {
      //this.cars = this.carService.getCars();
       this.loadAllCars();
    }
    
    onSelect(car: Car) {
    this.router.navigate(['/car', car.id]);
  }

    deleteCar(id: number) {
        //this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllCars() {
      
      //this.cars = this.carService.getCars();
      this.cars = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = +params['id'];
        return this.carService.getCars();
      });
      
    }
}