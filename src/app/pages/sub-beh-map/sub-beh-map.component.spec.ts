import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubBehMapComponent } from './sub-beh-map.component';

describe('SubBehMapComponent', () => {
  let component: SubBehMapComponent;
  let fixture: ComponentFixture<SubBehMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubBehMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubBehMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
