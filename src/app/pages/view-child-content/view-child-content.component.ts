import { Component, ElementRef, ViewChild } from '@angular/core';
import { RxjsOperatorComponent } from "../rxjs-operator/rxjs-operator.component";

@Component({
  selector: 'app-view-child-content',
  imports: [RxjsOperatorComponent],
  templateUrl: './view-child-content.component.html',
  styleUrl: './view-child-content.component.css'
})
export class ViewChildContentComponent {


  @ViewChild("txt") txtInput!: ElementRef;
  @ViewChild(RxjsOperatorComponent) rxjsComp! : RxjsOperatorComponent;

  readValue( ){
    const value=  this.txtInput.nativeElement.value;
    alert(value)
    this.rxjsComp.userId2$.subscribe((Res)=>{
      debugger;
    })
  }
}
