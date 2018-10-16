import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGaleriasComponent } from './menu-galerias.component';

describe('MenuGaleriasComponent', () => {
  let component: MenuGaleriasComponent;
  let fixture: ComponentFixture<MenuGaleriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuGaleriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuGaleriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
