import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBandComponent } from './edit-band.component';

describe('EditBandComponent', () => {
  let component: EditBandComponent;
  let fixture: ComponentFixture<EditBandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
