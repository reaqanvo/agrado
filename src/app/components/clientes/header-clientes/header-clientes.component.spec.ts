import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderClientesComponent } from './header-clientes.component';

describe('HeaderClientesComponent', () => {
  let component: HeaderClientesComponent;
  let fixture: ComponentFixture<HeaderClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
