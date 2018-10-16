import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesPpalComponent } from './clientes-ppal.component';

describe('ClientesPpalComponent', () => {
  let component: ClientesPpalComponent;
  let fixture: ComponentFixture<ClientesPpalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesPpalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesPpalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
