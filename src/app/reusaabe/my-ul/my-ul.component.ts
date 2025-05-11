import { AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-ul',
  imports: [],
  templateUrl: './my-ul.component.html',
  styleUrl: './my-ul.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
 
})
export class MyUlComponent implements AfterViewChecked,OnInit,DoCheck,AfterViewInit {
  @Input() itemList: string [] = []

  constructor(){
    console.log('constructor')
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }

  printConsole() {
    console.log('printConsole')
  }
  ngAfterViewChecked(): void {
   // console.log("UI Rendered")
  }
  ngAfterViewInit(): void {
    console.log("UI Rendered")
  }
  ngDoCheck(): void {
    console.log("ngDoCheck")
  }
}
