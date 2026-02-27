import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonHire } from './button-hire';

describe('ButtonHire', () => {
  let component: ButtonHire;
  let fixture: ComponentFixture<ButtonHire>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonHire]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonHire);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
