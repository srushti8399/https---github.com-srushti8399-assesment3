import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServices } from '../Services/employee.service';
import { Iemployee } from './employee.interface';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees:Iemployee[]= [];
  EmployeeId:string|null='';
  displayedColumns: string[] = [ 'id','name','emailid','actions'];

  constructor(private _empServices:EmployeeServices,private _route:ActivatedRoute, private _router:Router) { }

  ngOnInit(): void {
    this.EmployeeId= this._route.snapshot.paramMap.get('id');
    this._empServices.getEmployeeByApi().subscribe((empdata)=>{
      this.employees= empdata;
      
  })
  }
  navigate(element:any){
    if(element.id==7){
      this._router.navigate(['/logout']);
    }
    else
    this._router.navigate(['/employee',element.id]);

}
navigatetoedit(element:any){
  this._router.navigate(['/edit',element.id]);
}

}
