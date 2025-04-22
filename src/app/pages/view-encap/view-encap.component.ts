import { Component, ViewEncapsulation } from '@angular/core';
import { CodeBlockComponent } from "../../reusaabe/code-block/code-block.component";
import { MyButtonComponent } from "../../reusaabe/my-button/my-button.component";
import { LifeCycleComponent } from "../life-cycle/life-cycle.component";

@Component({
  selector: 'app-view-encap',
  imports: [CodeBlockComponent, MyButtonComponent, LifeCycleComponent],
  templateUrl: './view-encap.component.html',
  styleUrl: './view-encap.component.css',
  encapsulation:ViewEncapsulation.None
})
export class ViewEncapComponent {

  emoult1 =`@Component({
  selector: 'app-example',
  template: '<h1 class='title'>Hello World</h1>',
  styles: ['.title { color: blue; }'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ExampleComponent {}
`
}
