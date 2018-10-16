import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuclientesComponent } from './menuclientes.component';

describe('MenuclientesComponent', () => {
  let component: MenuclientesComponent;
  let fixture: ComponentFixture<MenuclientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuclientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
