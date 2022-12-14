import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticalComponent } from './artical.component';

describe('ArticalComponent', () => {
  let component: ArticalComponent;
  let fixture: ComponentFixture<ArticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
