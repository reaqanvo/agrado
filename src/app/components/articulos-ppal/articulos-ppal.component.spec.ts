import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosPpalComponent } from './articulos-ppal.component';

describe('ArticulosPpalComponent', () => {
  let component: ArticulosPpalComponent;
  let fixture: ComponentFixture<ArticulosPpalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticulosPpalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosPpalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
