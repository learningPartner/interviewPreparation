import { Component, OnInit } from '@angular/core';
import { CodeBlockComponent } from "../../reusaabe/code-block/code-block.component";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-unit-testing',
  imports: [CodeBlockComponent,ReactiveFormsModule],
  templateUrl: './unit-testing.component.html',
  styleUrl: './unit-testing.component.css'
})
export class UnitTestingComponent implements OnInit {

  testbedstr=`beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    });

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger initial data binding
  });`

  fullName: string = '';

  constructor(private http: HttpClient){

  }

  userForm :FormGroup = new FormGroup({
    name: new FormControl(""),
    city: new FormControl("")
  })


  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.userForm = new FormGroup({
    name: new FormControl(""),
    city: new FormControl("")
  })
  }


  getSum(num1:number,num2: number) {
    return num1 + num2 ;
  }

  generateFullName(fnane: string, lName: string) {
    this.fullName = fnane + ' ' +lName;
    //this.showFullName()
  }

  showFullName() {
    console.log(this.fullName)
  }


  




 
}
