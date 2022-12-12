import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForCapitalComponent } from './for-capital.component';

describe('ForCapitalComponent', () => {
  let component: ForCapitalComponent;
  let fixture: ComponentFixture<ForCapitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForCapitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
