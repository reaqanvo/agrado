import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagGaleriasComponent } from './imag-galerias.component';

describe('ImagGaleriasComponent', () => {
  let component: ImagGaleriasComponent;
  let fixture: ComponentFixture<ImagGaleriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagGaleriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagGaleriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
