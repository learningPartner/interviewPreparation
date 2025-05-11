import { Component, computed, linkedSignal, signal, untracked } from '@angular/core';
import { CodeBlockComponent } from '../../reusaabe/code-block/code-block.component';

@Component({
  selector: 'app-angular18-features',
  imports: [CodeBlockComponent],
  templateUrl: './angular18-features.component.html',
  styleUrl: './angular18-features.component.css'
})
export class Angular18FeaturesComponent {

  routerStr = `
  import { redirectByRole } from './service/utility';
  {
          path:'',
          redirectTo: redirectByRole(),
          pathMatch:'full'
  }
  `

  redirfuncstr = `
  export function redirectByRole(): string{ 
    const loggedData =  localStorage.getItem("role");
    if(loggedData =='admin') {
        return 'life-cycle';
    } else {
       return 'view-encap';
    }
}`

  computredTSr = `count =  signal<number>(2);
doubleCount =  computed(()=> this.count() * 2);

constructor(){
  setTimeout(() => {
    this.count.set(5)
  }, 5000);
}
`
  count = signal<number>(2);

  doubleCount = computed(() => this.count() * 2);


  linkestr1= `
firstNum = signal<number>(5);
secondNum = signal<number>(7);
total = linkedSignal({
  source: this.firstNum,
  computation: () => (this.firstNum() + untracked(this.secondNum)),
});

constructor() {
  setTimeout(() => {
   this.firstNum.set(6)
 }, 8000);
 setTimeout(() => {
   this.secondNum.set(10)
 }, 10000);
}
  `
  firstNum = signal<number>(5);
  secondNum = signal<number>(7);


  total = linkedSignal({
    source: this.firstNum,
    computation: () => (this.firstNum() + untracked(this.secondNum)),
  });

  colWidth: string ="3";

  constructor() {
    setTimeout(() => {
      this.count.set(5)
    }, 5000);
     setTimeout(() => {
      this.firstNum.set(6)
    }, 8000);
    setTimeout(() => {
      this.secondNum.set(10)
    }, 10000);
    
  }

}
