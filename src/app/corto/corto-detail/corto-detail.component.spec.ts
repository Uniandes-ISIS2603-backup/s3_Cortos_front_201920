import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CortoDetailComponent } from './corto-detail.component';

describe('CortoDetailComponent', () => {
  let component: CortoDetailComponent;
  let fixture: ComponentFixture<CortoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CortoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CortoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
