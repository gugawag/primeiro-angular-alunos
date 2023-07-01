import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MestreComponent } from './mestre.component';

describe('MestreComponent', () => {
  let component: MestreComponent;
  let fixture: ComponentFixture<MestreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MestreComponent]
    });
    fixture = TestBed.createComponent(MestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
