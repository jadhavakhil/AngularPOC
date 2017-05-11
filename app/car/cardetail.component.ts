import 'rxjs/add/operator/switchMap';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {Location} from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Car } from '../_models/index';

import { CarService, AlertService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'cardetail.component.html'
})

export class CarDetailComponent implements OnInit, OnDestroy
{
 constructor(private carService: CarService,private alertService: AlertService,
 private route: ActivatedRoute,
 private router: Router, private location: Location) 
  {
    console.log("1. CarDetailComponent Constructor is called ")
  }
  
  car: Car;
  
  ngOnInit() {
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) =>
      { 
        console.log("ID :",params['id']);
        return this.carService.getCar(+params['id'])
      })
      .subscribe((car1: Car) => this.car = car1);
      
      console.log("2. CarDetailComponent On Init is called ");
      
  }
  
  ngOnDestroy(){
    console.log("3. CarDetailComponent On Destroy is called ");    
  }
  
  gotoCars()
  {
    //this.alertService.success('Backed successful', true);
    this.location.back();
    //this.router.navigate(['/car']);
  }
}