import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicemanEditComponent } from './policeman-edit.component';

describe('PolicemanEditComponent', () => {
  let component: PolicemanEditComponent;
  let fixture: ComponentFixture<PolicemanEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicemanEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicemanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
