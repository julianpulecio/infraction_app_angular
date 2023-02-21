import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicemanNewComponent } from './policeman-new.component';

describe('PolicemanNewComponent', () => {
  let component: PolicemanNewComponent;
  let fixture: ComponentFixture<PolicemanNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicemanNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicemanNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
