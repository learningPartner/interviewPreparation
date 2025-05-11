import { Component } from '@angular/core';
import { CodeBlockComponent } from "../../reusaabe/code-block/code-block.component";

@Component({
  selector: 'app-solid',
  imports: [CodeBlockComponent],
  templateUrl: './solid.component.html',
  styleUrl: './solid.component.css'
})
export class SolidComponent {

  oStr = `interface AuthStrategy {
  login(): Observable<any>;
}
class GoogleLogin implements AuthStrategy {
  login() { /* google logic */ }
}
class FacebookLogin implements AuthStrategy {
  login() { /* fb logic */ }
}
`
lstr=`interface NotificationService {
  send(msg: string): void;
}

class EmailService implements NotificationService {
  send(msg: string) { console.log('email sent'); }
}
class SMSService implements NotificationService {
  send(msg: string) { console.log('SMS sent'); }
}
`
istr1 =`interface User {
  name: string;
  email: string;
  password: string;
  address: string;
  cart: string[];
}
`
istr2=`interface UserProfile { name: string; email: string; }
interface AddressInfo { address: string; }
interface CartInfo { cart: string[]; }
`
}
