import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForCountryComponent } from './for-country.component';

describe('ForCountryComponent', () => {
  let component: ForCountryComponent;
  let fixture: ComponentFixture<ForCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForCountryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
