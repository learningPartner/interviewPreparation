import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContanierTempComponent } from './ng-contanier-temp.component';

describe('NgContanierTempComponent', () => {
  let component: NgContanierTempComponent;
  let fixture: ComponentFixture<NgContanierTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgContanierTempComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgContanierTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
