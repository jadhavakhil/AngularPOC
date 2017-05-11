import { Component, OnInit, OnDestroy } from '@angular/core';

import { User, Customer } from '../_models/index';
import { UserService, AlertService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'profile.component.html'
})

export class ProfileComponent implements OnInit, OnDestroy {
    
    customer : Customer = null; 
    isEdit : bool = false;
    timeZoneList : [];
    genderList : [];
    ethnicityList : [];
    dayList:[];
    monthList:[];
    yearList:[];
    onEdit()
    {
      this.isEdit = true;
    }
    onCancel()
    {
      this.isEdit = false;
    }
    
    onSave()
    {
      this.isEdit = false;
      this.alertService.success('User record updated successfully !!', true);
    }
    
    constructor(private alertService: AlertService)
    {
      this.isEdit = false;
      this.customer = new Customer(1, "Ricky","Wills","Smith","01","Jan","1983","Male","Caucasian","Mountain Standard Time");
      this.timeZoneList = ["Mountain Standard Time","Indian Standard Time"];
      this.genderList = ["Male", "Female"];
      this.ethnicityList = ["Asian","Black","Caucasian"];
      this.dayList = ["01","02","03","04"];
      this.monthList = ["Jan","Feb","Mar","Apr"];
      this.yearList = ["1983","1984","1985","1986"];
      console.log("1. ProfileComponent Constructor is called ");  
    }
    
    /*currentUser: User;
    users: User[] = [];
    
    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }*/
    
    ngOnInit() {
        //this.loadAllUsers();
      console.log("2. ProfileComponent On Init is called ");  
    }
    ngOnDestroy(){
      console.log("3. ProfileComponent On Destroy is called ");    
    }
/*
    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }*/
}