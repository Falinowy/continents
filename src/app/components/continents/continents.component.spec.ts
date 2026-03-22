import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentsComponent } from './continents.component';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../service/countries.service';
import { TitleService } from '../../service/title.service';
import { ModalService } from '../../service/modal.service';
import { of } from 'rxjs';

describe('ContinentsComponent', () => {
  let component: ContinentsComponent;
  let fixture: ComponentFixture<ContinentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContinentsComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { params: {} } } },
        { provide: CountriesService, useValue: { getContinents: () => of([]), addContinent: () => of({ id: 1, name: 'X', region: 'Y' }) } },
        { provide: TitleService, useValue: { setTitle: () => void 0, title: () => '' } },
        { provide: ModalService, useValue: { openForm: () => of(null) } },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
