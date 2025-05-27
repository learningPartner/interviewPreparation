import { Component } from '@angular/core';
import { CodeBlockComponent } from "../../reusaabe/code-block/code-block.component";

@Component({
  selector: 'app-unit-testing',
  imports: [CodeBlockComponent],
  templateUrl: './unit-testing.component.html',
  styleUrl: './unit-testing.component.css'
})
export class UnitTestingComponent {

  testbedstr=`beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    });

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger initial data binding
  });`
}
