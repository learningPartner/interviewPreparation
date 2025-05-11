import { JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-table',
  imports: [JsonPipe],
  templateUrl: './my-table.component.html',
  styleUrl: './my-table.component.css'
})
export class MyTableComponent {


  @Input() colArray: string[] = [];

  @Input() gridDataList: any[] = [];
}
