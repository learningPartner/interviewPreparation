import { Component } from '@angular/core';
import { CodeBlockComponent } from "../../reusaabe/code-block/code-block.component";
import { MyButtonComponent } from "../../reusaabe/my-button/my-button.component";

@Component({
  selector: 'app-life-cycle',
  imports: [CodeBlockComponent, MyButtonComponent],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css'
})
export class LifeCycleComponent {
  user = { name: 'Alice', age: 30 };

  updateUser() { 
    this.user.age = 31;
  }

  ngOnChange = `export class UserProfileComponent implements OnChanges {
    @Input() user!: User;
  
    ngOnChanges(changes: SimpleChanges) {
      if (changes['user']) {
        this.logUserChange(changes['user'].currentValue);
      }
    }
  
    private logUserChange(updatedUser: User) {
      console.log('User updated:', updatedUser);
    }
  }`;
  ngonint =`export class DashboardComponent implements OnInit {
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getUserData().subscribe(response => {
      this.data = response;
    });
  }`
  ngdoch =`
  export class MyButtonComponent implements DoCheck,OnChanges {
    @Input() user!: { name: string; age: number };
    private differ!: KeyValueDiffer<string, any>;
  
    constructor(private differs: KeyValueDiffers) {} 
  
    ngOnChanges(changes: SimpleChanges): void {
      debugger;
      //this will trigger if in parent 
    }
    ngOnInit() {
      this.differ = this.differs.find(this.user).create();
    }
  
    ngDoCheck() { 
      const changes = this.differ.diff(this.user);
      if (changes) {
        changes.forEachChangedItem((item:any) => {
          console.log("Property {item.key} changed from {item.previousValue} to {item.currentValue}");
        });
      }
    } 
    
  }
  `
  ngdoch2 =` 
  <button (click)="updateUser()">change</button>
   <app-my-button [user]="user"></app-my-button>`;
   ngdoch3 =`export class LifeCycleComponent {
  user = { name: 'Alice', age: 30 };

  updateUser() { 
    this.user.age = 31;
  }
  `

  ngdoch4 =`export class LifeCycleComponent {
    user = { name: 'Alice', age: 30 };
  
   
    updateUser() { 
      this.user =  { name: 'Alice', age: 50 };
    }  
    `

    ngcont1 = `export class ContentWrapperComponent implements AfterContentInit {
  @ContentChild('projectedContent') content!: ElementRef;

  ngAfterContentInit() {
    console.log('Projected content:', this.content.nativeElement.textContent);
  }
}`
ngcontent2 =`export class ContentCheckerComponent implements AfterContentChecked {
  ngAfterContentChecked() {
    console.log('Projected content checked.');
  }
}`
ngviewini =`export class ViewInitComponent implements AfterViewInit {
  @ViewChild('paragraph') paragraph!: ElementRef;

  ngAfterViewInit() {
    console.log('Paragraph content:', this.paragraph.nativeElement.textContent);
  }
}`

ngviewch =`export class ViewCheckerComponent implements AfterViewChecked {
  ngAfterViewChecked() {
    console.log('Component view checked.');
  }
}`
ngDest =`export class CleanupComponent implements OnDestroy {
  private subscription!: Subscription;

  constructor(private dataService: DataService) {
    this.subscription = this.dataService.getData().subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('Component destroyed and subscription unsubscribed.');
  }
}`
}
