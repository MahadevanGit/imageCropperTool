import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCropperExampleComponent } from './image-cropper-example.component';

describe('ImageCropperExampleComponent', () => {
  let component: ImageCropperExampleComponent;
  let fixture: ComponentFixture<ImageCropperExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageCropperExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCropperExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
