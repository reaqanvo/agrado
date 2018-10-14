import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosSideBar2Component } from './articulos-side-bar2.component';

describe('ArticulosSideBar2Component', () => {
  let component: ArticulosSideBar2Component;
  let fixture: ComponentFixture<ArticulosSideBar2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticulosSideBar2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosSideBar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
