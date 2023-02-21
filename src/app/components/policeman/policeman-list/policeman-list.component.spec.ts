import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicemanListComponent } from './policeman-list.component';

describe('PolicemanListComponent', () => {
  let component: PolicemanListComponent;
  let fixture: ComponentFixture<PolicemanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicemanListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicemanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
