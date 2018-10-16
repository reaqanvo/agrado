import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoMenuComponent } from './pedido-menu.component';

describe('PedidoMenuComponent', () => {
  let component: PedidoMenuComponent;
  let fixture: ComponentFixture<PedidoMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
