import { Component } from '@angular/core';
import { CodeBlockComponent } from "../../reusaabe/code-block/code-block.component";

@Component({
  selector: 'app-directive-ex',
  imports: [CodeBlockComponent],
  templateUrl: './directive-ex.component.html',
  styleUrl: './directive-ex.component.css'
})
export class DirectiveExComponent {


  ngiftsstr = `isDiv1Visiable: boolean = true;

div2Status: string = 'Show';

getDiv1VisibilityStatus() {
  return this.isDiv1Visiable;
}

get getDiv2Status(): string {
  return this.div2Status;
}`
  ngifstr=`<div *ngIf="isDiv1Visiable == true" class="bg-success p-3">
    Way - 1
</div>
<div *ngIf="div2Status == 'Show'" class="bg-danger p-3">
     Way - 2
</div>
    Way-3
<tr *ngFor="let item of studentList;let sr = index"> 
    <td>{{item.name}}</td> 
    <td>{{item.mobile}}</td>
    <td>
        <span *ngIf="item.isActive == true">Active</span>
        <span *ngIf="item.isActive == false">De-active</span>
    </td>
</tr>
 <p *ngIf="getDiv1VisibilityStatus()">
     way -4 
 </p>
 <p *ngIf="getDiv2Status">
     way 5 using getter method
  </p>
  `

  ngFortsStr=`cityList = ['Nagpur', 'Delhi', 'Noida', 'Mumbai', 'Pune'];

studentList = [
  {isActive: false, name: 'AAA', city: 'pune', mobile: '99887766' },
  {isActive: false, name: 'BBB', city: 'Mumbai', mobile: '1111111' },
  {isActive: false, name: 'CCC', city: 'Solpur', mobile: '2222222' },
  {isActive: false, name: 'DDD', city: 'Panji', mobile: '777777' },
]

getStudentList() {
  return this.studentList.filter(m=>m.isActive == true);
}
`;
ngFothtmstr=`<ul>
   <li *ngFor="let item of cityList"> {{item}}</li>
 </ul>

 <button class="btn btn-success" *ngFor="let city of cityList"> {{city}}</button>

 <tr *ngFor="let item of studentList;let sr = index">
     <td>{{ sr+1}}</td>
     <td>{{item.name}}</td>
     <td>{{item.mobile}}</td>
 </tr>

 <ul>
   <li *ngFor="let item of getStudentList()"> {{item.name}}</li>
 </ul>
 `;
 ngSwuttrstyr= `startingCharDayName: string = 'tue';`
 ngswichjhtmlstr=`<div [ngSwitch]="startingCharDayName">
    <span *ngSwitchCase="'mon'">Monday</span>
    <span *ngSwitchCase="'tue'">tuesday</span>
    <span *ngSwitchCase="'wed'">wednesday</span>
    <span *ngSwitchCase="'thu'">Thirsday</span>
    <span *ngSwitchDefault>No Value</span>
</div>`

highlstr=`ng generate directive highlight => cmd to create Directive

import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {
  constructor(private el: ElementRef) {}
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'black';
  }
}`

numberonlyDirStr=`ng generate directive numbersOnly

@Directive({
  selector: '[appNumbersOnly]'
})
export class NumbersOnlyDirective {

  constructor() { }

  @HostListener('keypress', ['$event']) onKeyPress(event: KeyboardEvent) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {// Allow: 0-9 only
      event.preventDefault();
    }
  }
}`

tooltipDirStr=`ng generate directive tooltip

  @Input('appTooltip') tooltipText: string = '';
  tooltip: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.tooltip) {
      this.tooltip = this.renderer.createElement('span');
      this.tooltip.innerText = this.tooltipText;
      this.renderer.appendChild(document.body, this.tooltip);

      this.renderer.setStyle(this.tooltip, 'position', 'fixed');
      this.renderer.setStyle(this.tooltip, 'background-color', '#333');
      this.renderer.setStyle(this.tooltip, 'color', '#fff');
      this.renderer.setStyle(this.tooltip, 'padding', '5px 10px');
      this.renderer.setStyle(this.tooltip, 'border-radius', '4px');
      this.renderer.setStyle(this.tooltip, 'font-size', '12px');
      this.renderer.setStyle(this.tooltip, 'z-index', '1000');
    }
  }

  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    if (this.tooltip) {
      this.renderer.setStyle(this.tooltip, 'top', (event.clientY + 10) + 'px');
      this.renderer.setStyle(this.tooltip, 'left', (event.clientX + 10) + 'px');
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltip) {
      this.renderer.removeChild(document.body, this.tooltip);
      this.tooltip = null;
    }
  }`;

  rolbsedirstr=`ng generate directive hasRole
  @Directive({
  selector: '[appHasRole]'
})
export class HasRoleDirective {

  constructor(private el: ElementRef) {
    const loggedRole = localStorage.getItem('loggedInRole');
     
    if (loggedRole !== 'Admin') {
      this.el.nativeElement.style.display = 'none'
    }
  } 
}`
 hoststrtsr=`@HostListener(eventName: string, [args: string[]])
methodName(args) {
   // handle event
}
@HostListener('mouseenter')
onMouseEnter() {
  this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
}
@HostListener('mouseleave')
onMouseLeave() {
  this.renderer.removeStyle(this.el.nativeElement, 'background-color');
}`


}
