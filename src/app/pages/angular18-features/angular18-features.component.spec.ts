import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular18FeaturesComponent } from './angular18-features.component';

describe('Angular18FeaturesComponent', () => {
  let component: Angular18FeaturesComponent;
  let fixture: ComponentFixture<Angular18FeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Angular18FeaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Angular18FeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
