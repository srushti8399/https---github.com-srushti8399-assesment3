import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";


export class Dataservice implements InMemoryDbService{
    createDb() {
        return {
          employees:[
            {id:"1",firstname:'John',middlename:'jerry',lastname:'jack',emailid:'john@gmail.com',contactno:1234567890, pincode:342346,gender:'Male',Dob:'20-jan-2000',add:'new york',emptype:'Permanent'},
            {id:"2",firstname:'Mary',middlename:'andrew',lastname:'hack',emailid:'mary@gmail.com',contactno:2345678901, pincode:123346,gender:'female',Dob:'25-feb-2002',add:'Japan',emptype:'Permanent'},
            {id:"3",firstname:'priya',middlename:'bheem',lastname:'mack',emailid:'priya@gmail.com',contactno:3456789012,pincode:342456346,gender:'female',Dob:'23-mar-2004',add:'India',emptype:'Permanent'},
            {id:"4",firstname:'raju',middlename:'ram',lastname:'rack',emailid:'raju@gmail.com',contactno:4567890123,pincode:801346,gender:'Male',Dob:'21-apr-2005',add:'Singapore',emptype:'Contractual'},
            {id:"5",firstname:'pinky',middlename:'shyam',lastname:'pack',emailid:'pinky@gmail.com',contactno:5678901234,pincode:234346,gender:'female',Dob:'22-jun-2003',add:'China',emptype:'Contractual'}
            ]
        }
        
    }
}