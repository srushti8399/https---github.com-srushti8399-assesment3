import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import{Injectable} from'@angular/core'
import { Observable } from 'rxjs';
import { Iemployee } from '../employee/employee.interface';

@Injectable()
export class EmployeeServices{
    employeesArray:Iemployee[]=[];

    EmployeeData:string='api/employees';

    constructor(private _http:HttpClient){
        
    }
    getEmployeeByApi():Observable<Iemployee[]>{
        return this._http.get<Iemployee[]>(this.EmployeeData);
}

returnEmployeeArray()
     {
         this.getEmployeeByApi().subscribe((empdata)=>{
             console.log(empdata) 
             this.employeesArray= empdata;
         })
         return this.employeesArray;
     }
findRowFromService(id:any)
{
 this.returnEmployeeArray()
 let temp={}
 this.employeesArray.map(item=>{
   if(item.id==id)
   {
     temp = item;

   }
   return item
 })
 return temp;
 console.log("row printing");
}
}