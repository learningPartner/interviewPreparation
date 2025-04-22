import { Component, ContentChild, DoCheck, ElementRef, Input, KeyValueDiffer, KeyValueDiffers, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-my-button',
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent implements DoCheck,OnChanges {
  @Input() user!: { name: string; age: number };
  private differ!: KeyValueDiffer<string, any>;

  constructor(private differs: KeyValueDiffers) {
    setTimeout(() => { 
      const ss = this.iconEle.nativeElement.innerText;
    }, 6000);
  } 

  ngOnChanges(changes: SimpleChanges): void { 
  }
  ngOnInit() {
    if(this.differ) {
    this.differ = this.differs.find(this.user).create();
    }
  }

  ngDoCheck() { 
    if(this.differ) {
      const changes = this.differ.diff(this.user);
      if (changes) {
        changes.forEachChangedItem((item:any) => {
          console.log(`Property ${item.key} changed from ${item.previousValue} to ${item.currentValue}`);
        });
      }
    }
    
  }
  @ContentChild('icon') iconEle! : ElementRef; 
  
}
