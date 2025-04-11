import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildContentComponent } from './view-child-content.component';

describe('ViewChildContentComponent', () => {
  let component: ViewChildContentComponent;
  let fixture: ComponentFixture<ViewChildContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChildContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChildContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
