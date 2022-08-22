import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServices } from '../Services/employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  EmpObj:any={};
  EmployeeId:string|null='';
  Company:string="Globallogic"
  saveUser(form:NgForm){
    console.log(form);
       }

  constructor(private _route:ActivatedRoute,private obj:EmployeeServices,private _router:Router) { }

  ngOnInit(): void {
    this.EmployeeId= this._route.snapshot.paramMap.get('id');
    this.EmpObj = this.obj.findRowFromService(this.EmployeeId);
  }
  GoEmployee(){
    this._router.navigate(['/employee']);
 }


}
