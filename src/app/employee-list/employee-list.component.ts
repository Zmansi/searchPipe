import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  private employeesData;
  private employeesList;
  searchInput;
  constructor(private router: Router ) {}

  ngOnInit() {
    this.getEmployeeData();
  }

  getEmployeeData(){
    this.employeesData = {"data": [{
      "id": 1,
      "name": "Jhon",
      "phone": "9999999999",
      "address":
      {
      "city": "Pune",
      "address_line1":"ABC road",
      "address_line2":"XYZ building",
      "postal_code":"12455"
      }
      }, {
      "id": 2,
      "name": "Jacob",
      "phone": "AZ99A99PQ9",
      "address":
      {
      "city": "Pune",
      "address_line1":"PQR road",
      "address_line2":"ABC building",
      "postal_code":"13455"
      }
      }, {
      "id": 3,
      "name": "Ari",
      "phone": "145458522",
      "address":
      {
      "city": "Mumbai",
      "address_line1":"ABC road",
      "address_line2":"XYZ building",
      "postal_code":"12455"
      }
      }]
     }
     
     this.employeesList = this.employeesData['data'];

     for (var val of this.employeesList) {
      var num1 = val.phone;
     if(isNaN(num1)){
      val.phone ="NA";
     }
    }
  }

  goToDetaiPage(employee){
    console.log(employee)
    let navigationExtras: NavigationExtras = {
      state: {
        emp: employee
      }
    };

    this.router.navigate(['/emp-detail'], navigationExtras);
  }
}
