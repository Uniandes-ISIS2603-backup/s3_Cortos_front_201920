import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CortoCreateComponent } from './corto-create.component';

describe('CortoCreateComponent', () => {
  let component: CortoCreateComponent;
  let fixture: ComponentFixture<CortoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CortoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CortoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
