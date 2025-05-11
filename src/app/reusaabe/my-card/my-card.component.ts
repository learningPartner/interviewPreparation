import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, Input, Signal, signal, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-my-card',
  imports: [NgTemplateOutlet],
  templateUrl: './my-card.component.html',
  styleUrl: './my-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyCardComponent{ 
  @Input() htmlTemplate!: TemplateRef<Element>;
  @Input() showFillter: boolean = false;

  cardTitle = input<string>(); 
  //signal input
}
