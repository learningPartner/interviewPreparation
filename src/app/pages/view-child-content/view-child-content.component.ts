import { AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { RxjsOperatorComponent } from "../rxjs-operator/rxjs-operator.component";
import { MyButtonComponent } from '../../reusaabe/my-button/my-button.component';

@Component({
  selector: 'app-view-child-content',
  imports: [RxjsOperatorComponent],
  templateUrl: './view-child-content.component.html',
  styleUrl: './view-child-content.component.css'
})
export class ViewChildContentComponent implements AfterViewInit {


  @ViewChild("txt") txtInput!: ElementRef;

  @ViewChild('dyanamicTem', { read: ViewContainerRef }) container!: ViewContainerRef;

  private btnComponent!: ComponentRef<MyButtonComponent>

  @ViewChild(RxjsOperatorComponent) rxjsComp! : RxjsOperatorComponent;

  constructor(private viewContainerRef:ViewContainerRef) {
   //const compref =  this.viewContainerRef.createComponent(MyButtonComponent);
    
  }
  ngAfterViewInit(): void {
    this.container.createComponent(MyButtonComponent)
  }

  readValue( ){
    const value=  this.txtInput.nativeElement.value;
    alert(value)
    this.rxjsComp.userId2$.subscribe((Res)=>{
      debugger;
    })
  }
}
