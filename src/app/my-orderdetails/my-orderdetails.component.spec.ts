import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrderdetailsComponent } from './my-orderdetails.component';

describe('MyOrderdetailsComponent', () => {
  let component: MyOrderdetailsComponent;
  let fixture: ComponentFixture<MyOrderdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOrderdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOrderdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
