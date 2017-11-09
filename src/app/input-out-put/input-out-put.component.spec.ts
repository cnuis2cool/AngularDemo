import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutPutComponent } from './input-out-put.component';

describe('InputOutPutComponent', () => {
  let component: InputOutPutComponent;
  let fixture: ComponentFixture<InputOutPutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputOutPutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
