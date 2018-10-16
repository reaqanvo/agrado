import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoPpalComponent } from './pedido-ppal.component';

describe('PedidoPpalComponent', () => {
  let component: PedidoPpalComponent;
  let fixture: ComponentFixture<PedidoPpalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoPpalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoPpalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
