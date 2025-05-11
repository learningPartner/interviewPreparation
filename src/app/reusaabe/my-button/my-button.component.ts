import { AfterContentInit, Component, ContentChild, DoCheck, ElementRef, Input, KeyValueDiffer, KeyValueDiffers, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-my-button',
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent implements DoCheck,OnChanges,AfterContentInit {
  @Input() user!: { name: string; age: number };
  private differ!: KeyValueDiffer<string, any>;
  

  @ContentChild('btnText') btnTxtSpan! : ElementRef; 

  constructor(private differs: KeyValueDiffers) {
    // setTimeout(() => { 
    //   const ss = this.iconEle.nativeElement.innerText;
    // }, 6000);
  } 

  ngOnChanges(changes: SimpleChanges): void { 
    debugger;
  }
  ngOnInit() {
    //const btnTetx = this.btnTxtSpan.nativeElement.innerText;
    if(!this.differ) {
    this.differ = this.differs.find(this.user).create();
    }
  }

  ngAfterContentInit(): void {
    debugger;
    //const btnTetx = this.btnTxtSpan.nativeElement.innerText;
  }

  ngDoCheck() { 
    debugger;
    if(this.differ) {
      const changes = this.differ.diff(this.user);
      if (changes) {
        changes.forEachChangedItem((item:any) => {
          console.log(`Property ${item.key} changed from ${item.previousValue} to ${item.currentValue}`);
        });
      }
    }
    
  }

  
}
