import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContinentsComponent } from './new-continents.component';

describe('NewContinentsComponent', () => {
  let component: NewContinentsComponent;
  let fixture: ComponentFixture<NewContinentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewContinentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewContinentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
