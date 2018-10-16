import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoListadoComponent } from './pedido-listado.component';

describe('PedidoListadoComponent', () => {
  let component: PedidoListadoComponent;
  let fixture: ComponentFixture<PedidoListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
