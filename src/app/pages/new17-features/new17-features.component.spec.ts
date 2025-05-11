import { ComponentFixture, TestBed } from '@angular/core/testing';

import { New17FeaturesComponent } from './new17-features.component';

describe('New17FeaturesComponent', () => {
  let component: New17FeaturesComponent;
  let fixture: ComponentFixture<New17FeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [New17FeaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(New17FeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
