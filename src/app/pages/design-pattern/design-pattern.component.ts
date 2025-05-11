import { Component } from '@angular/core';
import { CodeBlockComponent } from "../../reusaabe/code-block/code-block.component";

@Component({
  selector: 'app-design-pattern',
  imports: [CodeBlockComponent],
  templateUrl: './design-pattern.component.html',
  styleUrl: './design-pattern.component.css'
})
export class DesignPatternComponent {

  facStr=`{
  provide: PaymentService,
  useFactory: (configService: ConfigService) => {
    return configService.useStripe ? new StripeService() : new RazorPayService();
  },
  deps: [ConfigService]
}
`
}
