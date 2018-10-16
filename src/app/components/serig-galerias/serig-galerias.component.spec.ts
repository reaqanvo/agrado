import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerigGaleriasComponent } from './serig-galerias.component';

describe('SerigGaleriasComponent', () => {
  let component: SerigGaleriasComponent;
  let fixture: ComponentFixture<SerigGaleriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerigGaleriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerigGaleriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
