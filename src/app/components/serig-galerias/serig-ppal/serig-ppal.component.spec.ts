import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerigPpalComponent } from './serig-ppal.component';

describe('SerigPpalComponent', () => {
  let component: SerigPpalComponent;
  let fixture: ComponentFixture<SerigPpalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerigPpalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerigPpalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
