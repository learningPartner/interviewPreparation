import { CommonModule } from '@angular/common';
import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, ContentChild, ElementRef, Input, OnChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-code-block',
  imports: [CommonModule],
  templateUrl: './code-block.component.html',
  styleUrl: './code-block.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class CodeBlockComponent  implements OnChanges {
  @Input() code: string = '';
  escapedCode: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges() {
    this.escapedCode = this.sanitizer.bypassSecurityTrustHtml(this.escapeHtml(this.code));
  }

  private escapeHtml(raw: string): string {
    return raw
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}
