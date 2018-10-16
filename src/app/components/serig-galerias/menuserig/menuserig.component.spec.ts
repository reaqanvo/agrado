import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuserigComponent } from './menuserig.component';

describe('MenuserigComponent', () => {
  let component: MenuserigComponent;
  let fixture: ComponentFixture<MenuserigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuserigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuserigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
