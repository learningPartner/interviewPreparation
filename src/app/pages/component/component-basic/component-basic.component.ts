import { Component } from '@angular/core';
import { CodeBlockComponent } from "../../../reusaabe/code-block/code-block.component";

@Component({
  selector: 'app-component-basic',
  imports: [CodeBlockComponent],
  templateUrl: './component-basic.component.html',
  styleUrl: './component-basic.component.css'
})
export class ComponentBasicComponent {
  standStr = `
  @Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  standalone: true,
  styleUrl: './add-user.component.css'
})`
}
