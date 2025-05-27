import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentBasicComponent } from './component-basic.component';

describe('ComponentBasicComponent', () => {
  let component: ComponentBasicComponent;
  let fixture: ComponentFixture<ComponentBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
