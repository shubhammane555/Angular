import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcctransferComponent } from './acctransfer.component';

describe('AcctransferComponent', () => {
  let component: AcctransferComponent;
  let fixture: ComponentFixture<AcctransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcctransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcctransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
