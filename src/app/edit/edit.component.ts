import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServices } from '../Services/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  EmpObj:any={};
  EmployeeId:string|null='';
  Company:string="Globallogic"
  


  saveUser(form:NgForm){
      console.log(form);
         }

  constructor(private _route:ActivatedRoute,private obj1:EmployeeServices,private _router:Router) { }

  ngOnInit(): void {
    this.EmployeeId= this._route.snapshot.paramMap.get('id');
    this.EmpObj = this.obj1.findRowFromService(this.EmployeeId);
  }
  Backtoemployee(){
    this._router.navigate(['/employee']);
  }

}
