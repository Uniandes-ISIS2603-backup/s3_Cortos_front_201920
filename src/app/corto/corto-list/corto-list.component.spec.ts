import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CortoListComponent } from './corto-list.component';

describe('CortoListComponent', () => {
  let component: CortoListComponent;
  let fixture: ComponentFixture<CortoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CortoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CortoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
