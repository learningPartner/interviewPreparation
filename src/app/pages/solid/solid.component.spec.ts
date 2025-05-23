import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidComponent } from './solid.component';

describe('SolidComponent', () => {
  let component: SolidComponent;
  let fixture: ComponentFixture<SolidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
