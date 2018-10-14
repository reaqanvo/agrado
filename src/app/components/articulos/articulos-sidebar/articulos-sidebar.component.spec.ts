import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosSidebarComponent } from './articulos-sidebar.component';

describe('ArticulosSidebarComponent', () => {
  let component: ArticulosSidebarComponent;
  let fixture: ComponentFixture<ArticulosSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticulosSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
