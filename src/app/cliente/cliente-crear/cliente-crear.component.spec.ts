import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCrearComponent } from './cliente-crear.component';

describe('ClienteCrearComponent', () => {
  let component: ClienteCrearComponent;
  let fixture: ComponentFixture<ClienteCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
