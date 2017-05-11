import { Component, NgModule, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Car } from '../_models/index';
import { SorterService, CarService } from '../_services/index';
import { SortByDirective } from './_directives/index';

import { AlertService, SorterService, AuthenticationService, UserService, CarService } from './_services/index';

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

@Component({
 //selector: 'my-pagination',
   moduleId: module.id,
 templateUrl: 'carpagination.component.html',
})
export class CarPaginationComponent {

   filteredItems : Car[];
   pages : number = 4;
   pageSize : number = 5;
   pageNumber : number = 0;
   currentIndex : number = 1;
   items: Car[];
   pagesIndex : Array<number>;
   pageStart : number = 1;
   inputName : string = '';
   
   productList: Car[]; 

   constructor(private carService: CarService,private route: ActivatedRoute,private router: Router, private sorterService: SorterService){
    this.filteredItems = CARS;  
    this.productList = CARS;
    this.init();
   };
   
   private sortReverse: boolean = false;
    private sortProperty: string = '';
    sort(prop: string) {
        this.sortProperty = prop;
        this.sortReverse = !this.sortReverse;

        this.sorterService.sort(this.productList, prop);
         this.refreshItems();
    }
  
    onSelect(car: Car) {
    this.router.navigate(['/car', car.id]);
  }
   init(){
         this.currentIndex = 1;
         this.pageStart = 1;
         this.pages = 4;

         this.pageNumber = parseInt(""+ (this.filteredItems.length / this.pageSize));
         if(this.filteredItems.length % this.pageSize != 0){
            this.pageNumber ++;
         }
    
         if(this.pageNumber < this.pages){
               this.pages =  this.pageNumber;
         }

         this.refreshItems();

         console.log("this.pageNumber :  "+ this.pageNumber);

   }



   FilterByName(){

      this.filteredItems = [];

      if(this.inputName != ""){

            this.productList.forEach(element => {
                if(element.name.toUpperCase().indexOf(this.inputName.toUpperCase())>=0){
                  this.filteredItems.push(element);
               }
            });
      }else{
         this.filteredItems = this.productList;
      }
      console.log(this.filteredItems);
      this.init();
   }
   fillArray(): any{
      var obj = new Array();
      for(var index = this.pageStart; index< this.pageStart + this.pages; index ++) {

                  obj.push(index);

      }

      return obj;

   }

 refreshItems(){

               this.items = this.filteredItems.slice((this.currentIndex - 1)*this.pageSize, (this.currentIndex) * this.pageSize);

               this.pagesIndex =  this.fillArray();

   }

   prevPage(){
    console.log('Prev Page this.currentIndex' + this.currentIndex);
    console.log('Prev Page this.pageNumber' + this.pageNumber);
    
      if(this.currentIndex>1){
         this.currentIndex --;
      } 
      if(this.currentIndex < this.pageStart){

         this.pageStart = this.currentIndex;

      }

      this.refreshItems();

   }

   nextPage(){
    console.log('Next Page this.currentIndex' + this.currentIndex);
    console.log('Next Page this.pageNumber' + this.pageNumber);
      if(this.currentIndex < this.pageNumber){

            this.currentIndex ++;

      }

      if(this.currentIndex >= (this.pageStart + this.pages)){
         this.pageStart = this.currentIndex - this.pages + 1;
      }
 
      this.refreshItems();
      console.log('Next Page Finished');
   }
    setPage(index : number){
      
         this.currentIndex = index;
         this.refreshItems();
    }

 }