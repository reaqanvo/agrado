import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesPpalComponent } from './imagenes-ppal.component';

describe('ImagenesPpalComponent', () => {
  let component: ImagenesPpalComponent;
  let fixture: ComponentFixture<ImagenesPpalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenesPpalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenesPpalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
