import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBandComponent } from './create-band.component';

describe('CreateBandComponent', () => {
  let component: CreateBandComponent;
  let fixture: ComponentFixture<CreateBandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
