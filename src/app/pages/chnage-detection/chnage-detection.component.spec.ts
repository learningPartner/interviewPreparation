import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChnageDetectionComponent } from './chnage-detection.component';

describe('ChnageDetectionComponent', () => {
  let component: ChnageDetectionComponent;
  let fixture: ComponentFixture<ChnageDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChnageDetectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChnageDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
