import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-my-button',
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent {

  @ContentChild('icon') iconEle! : ElementRef; 
  constructor() {
    setTimeout(() => {
      debugger;
      const ss = this.iconEle.nativeElement.innerText;
    }, 6000);
  } 
}
