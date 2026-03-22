import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../service/auth.service';
import { TitleService } from '../../service/title.service';
import { ModalService } from '../../service/modal.service';
import { of } from 'rxjs';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarComponent],
      providers: [
        { provide: Location, useValue: { back: () => void 0 } },
        { provide: Router, useValue: { navigate: () => Promise.resolve(true) } },
        { provide: MatDialog, useValue: { open: () => ({}) } },
        { provide: AuthService, useValue: { isLoggedIn: () => false, logout: () => void 0 } },
        { provide: TitleService, useValue: { title: () => 'Title' } },
        { provide: ModalService, useValue: { showMessage: () => of(void 0) } },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
