import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, linkedSignal, OnInit, resource, signal, untracked } from '@angular/core';
import { CodeBlockComponent } from "../../reusaabe/code-block/code-block.component";
import { RxjsOperatorComponent } from "../rxjs-operator/rxjs-operator.component";
import { MyUlComponent } from '../../reusaabe/my-ul/my-ul.component';
import { ProductService } from '../../service/product.service';
import { AsyncPipe } from '@angular/common';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-new17-features',
  imports: [CodeBlockComponent, MyUlComponent,AsyncPipe],
  templateUrl: './new17-features.component.html',
  styleUrl: './new17-features.component.css'
})
export class New17FeaturesComponent {
  
  idleStr=`@defer (on idle) {
  <app-heavy-component></app-heavy-component>
} @placeholder {
  <p>Loading component...</p>
}
`
interactSrt=`@defer (on interaction) {
  <app-recent-activity></app-recent-activity>
} @placeholder {
  <p>Waiting for user activity...</p>
}`
viewportstr=`@defer (on viewport) {
  <app-footer-info></app-footer-info>
} @placeholder {
  <p>Footer loading...</p>
}`

cityList: string []= [ "Pune","Nagpur","Mumbai"]
studentLst: any []= [
  {fname:'sachin', lname:'Tendulkar'},
  {fname:'sachin', lname:'Tendulkar'},
  {fname:'sachin', lname:'Tendulkar'}
]
letstr = `@let`;

studArr =`studentLst: any []= [
  {fname:'sachin', lname:'Tendulkar'},
  {fname:'sachin', lname:'Tendulkar'},
  {fname:'sachin', lname:'Tendulkar'}
]`
letstrfpor=`@for (item of studentLst; track $index) {
    @let fullName = item.fname + ' '+item.lname;
    <li>
        {{fullName}}
    </li>
 }`

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

   chnagstr=`
bootstrapApplication(App, {
  providers: [provideExperimentalZonelessChangeDetection()],
});
`

signipstr=`
@Component({
  selector: 'app-my-card', 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyCardComponent { 
  @Input() htmlTemplate!: TemplateRef<Element>;
  @Input() showFillter: boolean = false;
  cardTitle = input<string>();//signal input
}`
signtmepstr=`
<div class="card">
    <div class="card-header bg-primary">{{cardTitle()}}</div>
    <div class="card-body">
        <ng-container [ngTemplateOutlet]="htmlTemplate"></ng-container>
    </div>
    @if (showFillter) {
        <div class="card-footer"> 
        </div>
    } 
</div>`

reactEvemnstr=`const nameControl = new FormControl<string|null>('name', Validators.required);
nameControl.events.subscribe(event => {
  // process the individual events
});`
 
userResourceData = resource({
  loader: () => {
    return fetch("https://jsonplaceholder.typicode.com/users").then(result=> result.json())
  }
})
resostr=`
userResourceData = resource({
  loader: () => {
    return fetch("https://jsonplaceholder.typicode.com/users").then(result=> result.json())
  }
})`
resourhtmkl=`
@if (userResourceData.isLoading()) {
 <span>Loading</span>
 }
 @if (userResourceData.hasValue()) {
 <ul>
     @for (item of userResourceData.value(); track $index) {
     <li>{{item.username}}</li>
     }
 </ul>
 }`
 userService = inject(ProductService)
 userId = signal(1);
user = rxResource({
    loader:() => this.userService.getUsers()
})

rsrestsr=`
user = rxResource({
    loader:() => this.userService.getUsers()
})`

rshtmstr=`
@if (user.isLoading()) {
    <span>Loading</span>
}
@if (user.hasValue()) {
    @for (item of userResourceData.value(); track $index) {
     <span>{{item.username}}</span> ,
    }
}`
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
