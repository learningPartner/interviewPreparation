import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestingComponent } from './unit-testing.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

fdescribe('UnitTestingComponent', () => {
  let component: UnitTestingComponent;
  let fixture: ComponentFixture<UnitTestingComponent>; 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitTestingComponent],
      providers: [HttpClient, HttpHandler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('get sum should retun addtion',()=>{ 
    const result   = component.getSum(12,12);
    expect(result).toBe(24)
  })

  it('shound generate full name', ()=> {
    component.generateFullName('Chetan','Jogi');
    expect(component.fullName).toEqual("Chetan Jogi")
  })

  it('should call ShowFullNAme fun',()=>{
    spyOn(component, 'showFullName');
    component.generateFullName("" ,"");
    expect(component.showFullName).toHaveBeenCalled()
  })

 
 


});
